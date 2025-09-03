import { useState } from 'react'
import ChatInterface from './components/ChatInterface'
import KanyeAvatar from './components/KanyeAvatar'
import './App.css'

function App() {
  const [isKanyeSpeaking, setIsKanyeSpeaking] = useState(false)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Ask Ye Anything</h1>
        <p>Unfiltered bars. Raw wisdom. Straight from Ye. No Rap stuff only Yapp stuff</p>
      </header>
      
      <main className="app-main">
        <div className="kanye-section">
          <KanyeAvatar isActive={isKanyeSpeaking} />
        </div>

        <div className="chat-section">
          <ChatInterface 
            onKanyeResponse={(speaking) => setIsKanyeSpeaking(speaking)} 
          />
        </div>
      </main>
      
      <footer className="app-footer">
        <p>⚡ Speak truth. Stay bold. Yapp with Ye⚡</p>
      </footer>
    </div>
  )
}

export default App
