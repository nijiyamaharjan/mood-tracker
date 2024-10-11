import React from 'react';
import MoodForm from '../components/MoodForm';
import SleepSlider from '../components/SleepSlider'
function MoodLogs() {
  return (
    <div>
      <h1>Mood Logs</h1>
      <MoodForm />
      <SleepSlider />
    </div>
  );
}

export default MoodLogs;
