import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

export default function Note({ onNoteChange, note }) {
    return (
      <>
      <h3 className='font-bold justify-center text-center text-xl my-2'>
          Add Note
      </h3>
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: '400px',
          margin: 'auto',
          padding: 2,
          boxShadow: 0,
          borderRadius: 2,
          backgroundColor: '#f9f9f9',
        }}
      >
        
        
        <TextField
          label="Note"
          type="text"
          variant="outlined"
          value={note}
          onChange={(e) => onNoteChange(e.target.value)}
          fullWidth
        />
      </Box>
      </>
    )
}