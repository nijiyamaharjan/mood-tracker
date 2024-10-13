import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MoodCard({ mood, handleDelete }) {
  const moodLevels = ['Very Sad', 'Sad', 'Neutral', 'Happy', 'Very Happy'];

  const getMoodLevel = (rating) => {
    const index = Number(rating) - 1; // Adjust for 0-based index
    return moodLevels[index] || 'Unknown Mood'; // Fallback if rating is invalid
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 500,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 2,
      }}
    >
      <Card variant="soft" sx={{ position: 'relative' }}> {/* Added position: relative */}
        {/* Icon Button Positioned Absolutely */}
        <IconButton
          aria-label="delete"
          onClick={handleDelete}
          variant="soft"
          sx={{ 
            position: 'absolute', 
            top: 8,  // Position from the top
            right: 8 // Position from the right
          }}
        >
          <DeleteIcon />
        </IconButton>

        <CardContent>
          <Typography level="title-md">
            {new Date(mood.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </Typography>
          <Typography><strong>Rating: </strong>{getMoodLevel(mood.rating)}</Typography>
          <Typography>
            <strong>Emotions: </strong>
            {mood.emotions.length > 0 ? mood.emotions.join(', ') : 'No emotions selected'}
          </Typography>
          {/* <Typography><strong>Hours Slept: </strong>{mood.hoursSlept || '0'}</Typography> */}
          <Typography><strong>Note: </strong>{mood.note || 'N/A'}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
