import { useState } from 'react'
import { useMoodsContext } from '../hooks/useMoodsContext'

export default function MoodForm() {
    const { dispatch } = useMoodsContext()
  const [rating, setRating] = useState('')
  const [emotion, setEmotion] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const mood = {rating, emotion}
    
    const response = await fetch('http://localhost:4000/api/moods', {
      method: 'POST',
      body: JSON.stringify(mood),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
        setRating('')
        setEmotion('')
      console.log('new mood added:', json)
      dispatch({type: 'CREATE_MOOD', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Mood</h3>

      <label>Mood Rating:</label>
      <input 
        type="number" 
        onChange={(e) => setRating(e.target.value)} 
        value={rating}
      />

      <label>Emotion: </label>
      <input 
        type="text" 
        onChange={(e) => setEmotion(e.target.value)} 
        value={emotion}
      />

      <button>Add Mood</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

