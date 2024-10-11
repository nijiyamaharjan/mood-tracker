import React from 'react';
import MoodForm from '../components/MoodForm';
import SleepSlider from '../components/SleepSlider'
import MoodButtons from '../components/MoodButtons'
import Emotions from '../components/Emotions';
import Note from '../components/Note';

function MoodLogs() {
  return (
    <div>
      <h1>Log Mood</h1>
      <MoodForm />
      Hours Slept
      <SleepSlider />
      Set Mood
      <MoodButtons />
      Set Emotions
      <Emotions />
      Add Note
      <Note />
    </div>
  );
}

export default MoodLogs;
