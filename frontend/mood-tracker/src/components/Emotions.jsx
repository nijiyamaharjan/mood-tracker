import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

export default function Emotions() {
  const [selectedEmotions, setSelectedEmotions] = useState([]); // Change to an array

  const emotions = [
    'happy', 
    'excited', 
    'grateful', 
    'relaxed', 
    'content', 
    'tired', 
    'unsure', 
    'bored', 
    'anxious', 
    'angry', 
    'stressed', 
    'sad'
  ];

  const handleEmotionClick = (emotion) => {
    setSelectedEmotions((prev) => 
      prev.includes(emotion) 
        ? prev.filter((e) => e !== emotion) // Remove emotion if already selected
        : [...prev, emotion] // Add emotion if not selected
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Select Your Emotions:
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, maxWidth: 740 }}>
        {emotions.map((emotion, index) => (
          <Button
            key={index}
            variant={selectedEmotions.includes(emotion) ? 'contained' : 'outlined'}
            onClick={() => handleEmotionClick(emotion)}
            sx={{
              fontSize: 16,
              width: 120,
              height: 50,
              borderRadius: '8px',
            }}
          >
            {emotion}
          </Button>
        ))}
      </Box>

      {/* Display selected emotions if any */}
      {selectedEmotions.length > 0 && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          You are feeling: {selectedEmotions.join(', ')}
        </Typography>
      )}
    </Box>
  );
}
