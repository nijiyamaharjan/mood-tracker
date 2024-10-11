import React from 'react';
import { Button, Box, Typography } from '@mui/material';

export default function Emotions({ selectedEmotions, onEmotionsChange }) {
  const emotions = [
    'happy', 'excited', 'grateful', 'relaxed', 'content', 'tired',
    'unsure', 'bored', 'anxious', 'angry', 'stressed', 'sad'
  ];

  const handleEmotionClick = (emotion) => {
    const newEmotions = selectedEmotions.includes(emotion)
      ? selectedEmotions.filter((e) => e !== emotion)
      : [...selectedEmotions, emotion];
    onEmotionsChange(newEmotions);
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
    </Box>
  );
}