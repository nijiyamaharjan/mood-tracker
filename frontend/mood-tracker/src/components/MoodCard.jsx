import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function MoodCard({ mood, handleDelete }) {
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
        <Card variant="soft">
          <CardContent>
            <Typography level="title-md">{mood.createdAt}</Typography>
            <Typography><strong>Rating: </strong>{mood.rating}</Typography>
            <Typography><strong>Emotion: </strong>{mood.emotion}</Typography>
            <button onClick={handleDelete}>delete</button>
          </CardContent>
        </Card>
      </Box>
    );
  }