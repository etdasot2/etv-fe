import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { fetchUnreadNotificationsCount } from '@/lib/api' // Adjust the path as needed
import { BELL_ICON } from '../custom-icons'

export default function RenderBell() {
    const [unreadCount, setUnreadCount] = useState<number | null>(null)

    useEffect(() => {
        const getUnreadCount = async () => {
            try {
                const count = await fetchUnreadNotificationsCount()
                setUnreadCount(count)
            } catch (error) {
                console.error('Error fetching unread notifications count:', error)
            }
        }

        getUnreadCount()
    }, [])

    return (
        <Link href="/information/index" className="cursor-default  rounded-full relative">
            {/* Notification Icon */}
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAHhQTFRFAAAA/////////////////////////////////////////////////////////////////tFu/tFv/tFr/s9w/s9w/s9w/tJx/s9w/tFv/tFw/tFw/tBx/tNn/tFv/tFu/tFu/tBv/tBq/s9u/tFv/tBt/tJx/tBtTOQO9QAAACh0Uk5TAECP3//PnyAQf+9fcL+vYFCf/0Agz99PEO+ff68gv1+PgDBwb1A/nwJoJGkAAAL1SURBVHic7ZhZbxMxEMcze9jb0HJGKFLFCwi+/+dBCAkhoRaEuNtcuybJzHp9jNdOnAeE8n+oumv7t2N7ZuwMTBIEW+3+LFP6xrs0q4L+68TiBMCmVUPvMkqMA4vCeOi6bKBsrUfD3COBwrYpamIUWNsmqTbQLxlYOc+bfwu492hbqlyP7ssIsAFYsQ2q2YRjJggM4nYSizqEDAEvuzBuJ9X8OQQoxf0obo+sWCNZoG2eWENZqgm0tbI+I4rfiUAzepVYSCMh2NteM/NggEawFYyLQG20+wvtA4dYmy75rZRKI2EdBWr7VBd2YCj6cZ6NLvCi/+R4djayuJN+HOBlT2m4HWS/7PS0gbKkGciA2xp6RF1Ea620DSwhmTcQL34FgX0Xzr8Y9etjTdoEyg0+xU8iEkWA6EzX99tVHT99ybQ1DjdnZAD7HYkebMbo0jPRANIKMuEU1sM710QDSFtcptxgetGpLe4YIJl/kIE6UodlgnBTksiMwTEGIM44epC7codpIK1Gsg/2opjWK6+Bj9HdD5yxnrMOVg2kL8UuBp4a3EU9Mw1Ej7IDPUmY4ac/XaDzPl3oHfos0EDcrcQ8YwrXSm+zBuItK5qofVES6xffASZlVluUAs7AM/AM/A+Bw1X8eGBfkwDzNpoFnOCtF6yaQiZwV5MAu6aQCdyeVWDXFHKBkxbsmkI2sAM87YTCiY/8EA5JVkTan88K8PGI084V3RROD8TzWCiRyVvhlAEsr8lXAXR7OpVKx7FztXVsO/QytQ89KznkCZPDZPcTXeVbqRDilwie4Cv4Ojp8hhGrvrkNPvAZGlt+GQU+xwxd38aBcyoGN59GeDSN6rPXwpRZrikMp/AxgJsLupdefUgBzjs6cKppyyFfVAvKSYyBbGXp5Xf9r6zdxnuj5PWA+R5b+3rl7R2rp++Yl3x17jolm7G8UP3w9Y/YTyp59ZZ9HypIztrx6qySN3xDeNisrUNWSil480aBW73pWj+RL6vu/ciYv0CLH4A2NPtvAAAAAElFTkSuQmCC"
             className="w-[20px] h-[20px]" />


            {/* Show Badge if there are unread notifications */}
            {unreadCount !== null && unreadCount > 0 && (
                <div className="absolute top-[-5px] right-[-5px] text-white bg-red-500 border border-white rounded-[5px] font-sora text-[10px] w-[15px] h-[15px] flex items-center justify-center">
                    {unreadCount}
                </div>
            )}
        </Link>
    )
}
