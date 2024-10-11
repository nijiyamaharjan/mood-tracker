import React, { useState } from 'react';
import { Button, Box, Typography, TextField } from '@mui/material';

export default function Note() {
    const [note, setNote ] = useState('')
    
    return (
        <Box
        component="form"
        
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
          onChange={(e) => setNote(e.target.value)}
          fullWidth
          required
        />
        
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add Note
        </Button>
      </Box>
    )
}