import { AnimatePresence, motion } from "framer-motion"
import { X, Clock, XIcon } from 'lucide-react'

interface VipMissionAreaPopupProps {
    isOpen: boolean
    onClose: () => void
    t: (key: string) => string
    purchasedPackages: any[]; // Purchased packages
    allPackages: any[]; // All packages (including non-purchased)
    onMissionChange: (missionName: string, pkgId: string) => void; // Callback to change mission
    selectedMission: string; // Selected mission/package
}

const VipMissionAreaPopup: React.FC<VipMissionAreaPopupProps> = ({ isOpen, onClose, t,
    purchasedPackages,
    allPackages,
    onMissionChange,
    selectedMission
}) => {
    if (!isOpen) return null

    const isPurchased = (pkgId: string) => {
        return purchasedPackages.some((p: any) => p.package._id === pkgId);
    };

    // Get the number of likes today for a purchased package
    const getTodayLikes = (pkgId: string) => {
        const purchased = purchasedPackages.find((p: any) => p.package._id === pkgId);
        return purchased ? purchased.likesToday : 0;
    };

    const modifiedSelectedMission = selectedMission.replace('VIP', 'VIP');
    const levelNumber = modifiedSelectedMission.match(/\d+/g)?.[0];



    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose?.()
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center select-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={handleOutsideClick}
                >
                    <motion.div
                        className="w-full bg-[#1c1c1c] rounded-t-[13px] max-w-[435px]"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{
                            type: "tween",
                            ease: [1, 1, 1, 1],
                            duration: 0.25,
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="h-[400px] ">

                            <div className="flex items-center justify-center h-[50px] relative">
                                <span className="text-white font-sora text-[14px]">{t('reels.popup.selectVipMission.title')}</span>

                                <XIcon color="white" size={20} className="absolute right-4 top-[12px]"
                                    onClick={() => { onClose() }}
                                />
                            </div>
                            <div className="py-2 px-3 h-[350px] space-y-2 overflow-y-scroll">
                                {allPackages.map((pkg, index) => {
                                    const purchased = isPurchased(pkg._id);
                                    const likesToday = purchased ? getTodayLikes(pkg._id) : 0; // 0 for non-purchased packages
                                    // const displayText = `${pkg.packageName}  (${likesToday}/${pkg.dailyViews})`;
                                    const displayText = `${pkg.packageName} ${t('reels.missionAreaLabel')} (${likesToday}/${pkg.dailyViews})`;

                                    const modifiedDisplayText = displayText.replace('VIP', 'VIP');
                                    const levelNumber = modifiedDisplayText.match(/\d+/g)?.[0];

                                    return (
                                        <div
                                            key={index}
                                            className="px-4 py-1.5 text-[14px] text-white h-[44px] rounded-[12px] border border-[#393939] cursor-pointer font-sora flex items-center"
                                            onClick={() => {
                                                // Check if the selected package starts with the package name
                                                if (selectedMission.startsWith(pkg.packageName)) {
                                                    onClose(); // Close the dropdown if the active item is clicked again
                                                } else {
                                                    onMissionChange(pkg.packageName, pkg._id); // Trigger mission change
                                                    onClose(); // Close the popup after selection
                                                }
                                            }}
                                        >
                                            <img src={`/vip-icons/vip${Number(levelNumber)}.png`} className="w-[20px] h-[20px]  " />


                                            <div className="ml-2">
                                                {displayText}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default VipMissionAreaPopup