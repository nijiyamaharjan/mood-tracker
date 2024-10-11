import { useState } from 'react'
import { useMoodsContext } from '../hooks/useMoodsContext'
import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

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
    <Box
    component="form"
    onSubmit={handleSubmit}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      maxWidth: '400px',
      margin: 'auto',
      padding: 2,
      // boxShadow: 3,
      borderRadius: 2,
      backgroundColor: '#f9f9f9',
    }}
  >
    <Typography variant="h5" component="h3" gutterBottom>
      Log Mood
    </Typography>
    
    <TextField
      label="Mood Rating"
      type="number"
      variant="outlined"
      value={rating}
      onChange={(e) => setRating(e.target.value)}
      fullWidth
      required
    />
    
    <TextField
      label="Emotion"
      type="text"
      variant="outlined"
      value={emotion}
      onChange={(e) => setEmotion(e.target.value)}
      fullWidth
      required
    />
    
    <Button variant="contained" color="primary" type="submit" fullWidth>
      Log Mood
    </Button>

    {error && (
      <Typography color="error" variant="body2" sx={{ marginTop: 1 }}>
        {error}
      </Typography>
    )}
  </Box>
);
}

