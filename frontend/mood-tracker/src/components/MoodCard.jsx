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
            {/* <Typography level="title-md">{new Date(mood.createdAt).toLocaleString()}</Typography> */}
            <Typography><strong>Rating: </strong>{mood.rating}</Typography>
            <Typography>
              <strong>Emotions: </strong>
              {mood.emotions.length > 0 ? mood.emotions.join(', ') : 'No emotions selected'}
            </Typography>
            <Typography><strong>Hours Slept: </strong>{mood.hoursSlept || '0'}</Typography>
            <Typography><strong>Note: </strong>{mood.note || 'N/A'}</Typography>
            <Typography>
              <strong>Date: </strong>
              {mood.date ? new Date(mood.date).toLocaleDateString() : 'N/A'}
            </Typography>
            <button onClick={handleDelete}>Delete</button>
          </CardContent>
        </Card>
      </Box>
    );
}
