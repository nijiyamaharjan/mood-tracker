import React from 'react';
import MoodForm from '../components/MoodForm';
import SleepSlider from '../components/SleepSlider'
import MoodButtons from '../components/MoodButtons'

function MoodLogs() {
  return (
    <div>
      <h1>Log Mood</h1>
      <MoodForm />
      Hours Slept
      <SleepSlider />
      Set Mood
      <MoodButtons />
    </div>
  );
}

export default MoodLogs;
