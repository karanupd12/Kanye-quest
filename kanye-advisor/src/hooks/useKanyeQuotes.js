import { useState, useCallback } from 'react'

const useKanyeQuotes = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchKanyeQuote = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('https://api.kanye.rest')
      
      if (!response.ok) {
        throw new Error('Failed to fetch Kanye quote')
      }
      
      const data = await response.json()
      return data.quote
    } catch (err) {
      setError(err.message)
      // Fallback quotes if API fails
      const fallbackQuotes = [
        "I am a god",
        "Believe in your flyness, conquer your shyness",
        "I feel like I'm too busy writing history to read it",
        "My greatest pain in life is that I will never be able to see myself perform live",
        "I refuse to accept other people's ideas of happiness for me"
      ]
      return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)]
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    fetchKanyeQuote,
    isLoading,
    error
  }
}

export default useKanyeQuotes
