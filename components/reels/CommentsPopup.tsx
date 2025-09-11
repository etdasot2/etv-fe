import { motion } from "framer-motion"
import { X, Clock } from 'lucide-react'

interface CommentsPopupProps {
  isOpen: boolean
  onClose: () => void
  t: (key: string) => string
}

const CommentsPopup: React.FC<CommentsPopupProps> = ({ isOpen, onClose, t }) => {
  if (!isOpen) return null

  return (
    <motion.div
      className="absolute inset-x-0 bottom-0 bg-black rounded-t-3xl z-50"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 500 }}
    >
      <div className="p-4 h-[70vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[15px] font-semibold text-white font-sora">{t('reels.comments.label')}</h3>
          <button onClick={onClose}>
            <X className="w-5 h-5" color="white"/>
          </button>
        </div>
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 backdrop-blur-md flex flex-col items-center justify-center z-10">
            <Clock className="w-16 h-16 text-white mb-4" />
            <h4 className="text-xl font-bold text-white font-sora mb-2">
              {t('reels.comments.stayTuned')}
            </h4>
            <p className="text-white font-sora text-[14px]">{t('reels.comments.stayTunedMsg')}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CommentsPopup