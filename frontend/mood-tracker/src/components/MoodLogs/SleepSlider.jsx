import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

function valuetext(value) {
  return `${value} hours`;
}

export default function SleepSlider({ value, onHoursSleptChange }) {
  const handleSliderChange = (event, newValue) => {
    onHoursSleptChange(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography gutterBottom>{value} Hours</Typography>
      <Slider
        aria-label="Hours Slept"
        value={value}
        onChange={handleSliderChange}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={12}
      />
    </Box>
  );
}