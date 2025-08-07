import { motion } from 'framer-motion'

function KanyeAvatar({ isActive }) {
  return (
    <div className="kanye-avatar-container">
      <motion.div
        className="kanye-avatar"
        animate={{
          scale: isActive ? [1, 1.05, 1] : 1,
          rotate: isActive ? [0, 2, -2, 0] : 0
        }}
        transition={{
          duration: 0.5,
          repeat: isActive ? Infinity : 0,
          ease: "easeInOut"
        }}
      >
        <div className="avatar-circle">
          <div className="sunglasses">
            <div className="lens left-lens"></div>
            <div className="lens right-lens"></div>
            <div className="bridge"></div>
          </div>
        </div>
        
        {isActive && (
          <motion.div
            className="speech-indicator"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            💭
          </motion.div>
        )}
      </motion.div>
      
      <p className="avatar-label">Kanye West</p>
    </div>
  )
}

export default KanyeAvatar
