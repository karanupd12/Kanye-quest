import { motion } from 'framer-motion'

function KanyeAvatar({ isActive }) {
  return (
    <div className="kanye-avatar-container flex flex-col items-center">
      <motion.div
        className="kanye-avatar relative"
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
        {/* Kanye Image */}
        <img
          src="https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3nMr04-default.jpg"
          alt="Kanye West"
          className="rounded-full w-32 h-32 object-cover border-4 border-gray-300 shadow-lg"
        />

        {/* Speech indicator */}
        {isActive && (
          <motion.div
            className="absolute bottom-0 right-0 bg-white rounded-full shadow-lg p-2 text-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            💭
          </motion.div>
        )}
      </motion.div>

      <p className="avatar-label mt-2 text-center font-semibold">Kanye West</p>
    </div>
  )
}

export default KanyeAvatar
