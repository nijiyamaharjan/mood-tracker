import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState(null);

  const moodLevels = [
    { mood: 'Very Happy', emoji: '😄' },
    { mood: 'Happy', emoji: '😊' },
    { mood: 'Neutral', emoji: '😐' },
    { mood: 'Sad', emoji: '☹️' },
    { mood: 'Very Sad', emoji: '😢' }
  ];

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
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
            variant={selectedMood === level.mood ? 'contained' : 'outlined'}
            onClick={() => handleMoodClick(level.mood)}
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

      {/* {selectedMood && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          You are feeling: {selectedMood}
        </Typography>
      )} */}
    </Box>
  );
}
