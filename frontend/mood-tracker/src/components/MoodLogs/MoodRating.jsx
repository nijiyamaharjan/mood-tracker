import React from 'react';
import { Button, Box, Typography } from '@mui/material';

export default function MoodRating({ selectedMood, onRatingChange }) {
  const moodLevels = [
    { mood: 'Very Happy', emoji: '😄', value: 5 },
    { mood: 'Happy', emoji: '😊', value: 4 },
    { mood: 'Neutral', emoji: '😐', value: 3 },
    { mood: 'Sad', emoji: '☹️', value: 2 },
    { mood: 'Very Sad', emoji: '😢', value: 1 }
  ];

  const handleMoodClick = (value) => {
    onRatingChange(value);  // Pass the numeric value to the parent component
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Select Your Mood:
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        {moodLevels.map((level, index) => (
          <Button
            key={index}
            variant={selectedMood === level.value ? 'contained' : 'outlined'}
            onClick={() => handleMoodClick(level.value)}  // Pass the numeric value instead of mood description
            sx={{
              fontSize: 24,
              width: 60,
              height: 60,
              borderRadius: '50%',
            }}
          >
            {level.emoji}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
