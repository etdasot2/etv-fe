"use client"

import { useEffect, useState } from "react"
import DefaultLoading from "@/components/loaders/DefaultLoading"
import { useTranslation } from "react-i18next"
import GenFilter from "./GenFilter"
import { fetchTeamMembers } from "@/lib/api"
import { debounce } from "lodash"
import { formatDateTime } from "@/utils/time-format"
import ValidMemberCard from "./ValidMemberCard"
import InvalidMemberCard from "./InvalidMemberCard"

interface TeamMember {
    id: string
    uuid: string
    username: string
    telegram: string | null
    whatsapp: string | null
    avatar: string
    registrationDate: string
    generation: string
    valid: boolean
}

export default function MyTeamList() {
    const { t } = useTranslation()
    const [selectedGen, setSelectedGen] = useState(1)
    const [members, setMembers] = useState<TeamMember[]>([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const loadMembers = async (pageNumber: number, generation: number) => {
        if (loading) return

        setLoading(true)
        try {
            const data = await fetchTeamMembers(generation, pageNumber)

            // Add new members to the state, preventing duplicates
            setMembers((prevMembers) => {
                const newMembers = data.allMembersList.filter(
                    (newMember: TeamMember) => !prevMembers.some((existingMember) => existingMember.id === newMember.id),
                )
                return [...prevMembers, ...newMembers]
            })

            setHasMore(data.hasMore)
        } catch (error) {
            console.error("Error fetching team members:", error)
        } finally {
            setLoading(false)
        }
    }

    // Initial load and generation change
    useEffect(() => {
        setMembers([])
        setPage(1)
        setHasMore(true)
        loadMembers(1, selectedGen)
    }, [selectedGen])

    // Load more when page changes
    useEffect(() => {
        if (page > 1) {
            loadMembers(page, selectedGen)
        }
    }, [page, selectedGen])

    // Scroll handler
    useEffect(() => {
        const handleScroll = debounce(() => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement
            if (scrollTop + clientHeight >= scrollHeight - 100 && !loading && hasMore) {
                setPage((prev) => prev + 1)
            }
        }, 100)

        window.addEventListener("scroll", handleScroll)
        return () => {
            handleScroll.cancel()
            window.removeEventListener("scroll", handleScroll)
        }
    }, [loading, hasMore])


    return (
        <>
            <GenFilter selectedGen={selectedGen} onSelectGen={setSelectedGen} />
            <div className="pl-4 pr-4 pt-0">
                {members.length > 0 ? (
                    members.map((member) => (
                        <>
                            <div key={member.id}>
                                {member.valid ? (
                                    <ValidMemberCard member={member} />
                                ) : (<InvalidMemberCard member={member}/>)}
                            </div>

                        </>
                    ))
                ) : !loading ? (
                    <div className="text-center text-white py-4">{t("myTeam.noResults")}</div>
                ) : null}

                {loading && (
                    <div className="flex justify-center py-4">
                        <DefaultLoading />
                    </div>
                )}

                {!hasMore && members.length > 0 && (
                    <div className="text-center text-[#bdbdbd] font-sora py-4 text-[12px]">- {t("myTeam.noMoreResults")} -</div>
                )}
            </div>
        </>
    )
}

