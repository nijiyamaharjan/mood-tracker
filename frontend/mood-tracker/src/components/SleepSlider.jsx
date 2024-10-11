import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

function valuetext(value) {
  return `${value} hours`;
}

export default function DiscreteSlider() {
    const [value, setValue] = useState(30)

    const handleSliderChange = (event, newValue) => {
        setValue(newValue); // Update state with new slider value
      };

  return (
    <Box sx={{ width: 300 }}>
      <Typography gutterBottom>{value} Hours</Typography>
      <Slider
        aria-label="Hours Slept"
        value={value} // Bind the value to the slider
        onChange={handleSliderChange} // Handle slider value change
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </Box>
  );
}
