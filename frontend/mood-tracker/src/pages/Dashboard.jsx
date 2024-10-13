import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function Dashboard() {
  const [moodData, setMoodData] = useState([]);

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/moods');
        const json = await response.json();
        setMoodData(json);
      } catch (error) {
        console.error('Error fetching mood data:', error);
      }
    };
    fetchMoods();
  }, []);

  const moodLevels = ['Very Sad', 'Sad', 'Neutral', 'Happy', 'Very Happy'];

  const formattedMoodData = moodData.map(item => ({
    date: new Date(item.date).toLocaleDateString(),
    hoursSlept: item.hoursSlept,
    moodRating: item.rating,
    moodRatingIndex: Number(item.rating) - 1 
  }));

  console.log(formattedMoodData)

  const sortedMoodData = formattedMoodData.sort((a, b) =>new Date(a.date) - new Date(b.date));
  return (
    <div>
      <h3>Hours of Sleep Over Time</h3>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sortedMoodData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="hoursSlept" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <h3>Mood Rating Over Time</h3>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sortedMoodData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            dataKey="moodRatingIndex"
            type="number"
            domain={[moodLevels]} // Adjusted to accommodate the range of indices
            ticks={[0, 1, 2, 3, 4]} // Tick indices for mood levels
            tickFormatter={(value) => moodLevels[value]}
          />
          <Tooltip 
            formatter={(value, name) => {
              if (name === 'moodRatingIndex') {
                return moodLevels[value];
              }
              return value;
            }}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Legend />
          <Line type="monotone" dataKey="moodRatingIndex" stroke="#82ca9d" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Dashboard;

