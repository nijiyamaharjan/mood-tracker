import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

export default function Note({ onNoteChange, note }) {
    return (
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: '400px',
          margin: 'auto',
          padding: 2,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="h5" component="h3" gutterBottom>
          Add Note
        </Typography>
        
        <TextField
          label="Note"
          type="text"
          variant="outlined"
          value={note}
          onChange={(e) => onNoteChange(e.target.value)}
          fullWidth
        />
      </Box>
    )
}