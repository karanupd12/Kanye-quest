import { useState } from 'react'
import ChatInterface from './components/ChatInterface'
import KanyeAvatar from './components/KanyeAvatar'
import './App.css'

function App() {
  const [isKanyeSpeaking, setIsKanyeSpeaking] = useState(false)

  return (
    <div className="app">
      {/* === HEADER === */}
      <header className="app-header">
        <h1>Ask Ye Anything</h1>
        <p>Unfiltered bars. Raw wisdom. Straight from Ye. No Rap stuff only Yapp stuff</p>
      </header>
      
      {/* === MAIN LAYOUT === */}
      <main className="app-main">
        {/* Kanye Avatar Section */}
        <div className="kanye-section">
          <KanyeAvatar isActive={isKanyeSpeaking} />
        </div>
        
        {/* Chat Section */}
        <div className="chat-section">
          <ChatInterface 
            onKanyeResponse={(speaking) => setIsKanyeSpeaking(speaking)} 
          />
        </div>
      </main>

      {/* === FOOTER TAGLINE === */}
      <footer className="app-footer">
        <p>⚡ Speak truth. Stay bold. Yapp with Ye⚡</p>
      </footer>
    </div>
  )
}

export default App
