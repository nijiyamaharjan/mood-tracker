import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
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

  const aggregatedMoodData = moodData.reduce((acc, item) => {
    const date = new Date(item.date).toLocaleDateString();
    const moodRating = Number(item.rating) - 1; // Convert to index
    acc[date] = acc[date] || { date, VerySad: 0, Sad: 0, Neutral: 0, Happy: 0, VeryHappy: 0 };
    
    switch (moodRating) {
      case 0: acc[date].VerySad++; break;
      case 1: acc[date].Sad++; break;
      case 2: acc[date].Neutral++; break;
      case 3: acc[date].Happy++; break;
      case 4: acc[date].VeryHappy++; break;
      default: break;
    }
    return acc;
  }, {});

  console.log(formattedMoodData)

  const sortedMoodDataForEmotions = Object.values(aggregatedMoodData).sort((a, b) => new Date(a.date) - new Date(b.date));

  const sortedMoodData = formattedMoodData.sort((a, b) =>new Date(a.date) - new Date(b.date));

  return (
    <div>
      <h3>Hours of Sleep Over Time</h3>
      <ResponsiveContainer width="100%" height={500}>
      <AreaChart data={sortedMoodData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="hoursSlept" stroke="#8884d8" activeDot={{ r: 8 }} />
        </AreaChart>
      </ResponsiveContainer>

      <h3>Mood Ratings Over Time</h3>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={sortedMoodDataForEmotions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="VerySad" stackId="a" fill="#ff4d4d" />
          <Bar dataKey="Sad" stackId="a" fill="#ffcc00" />
          <Bar dataKey="Neutral" stackId="a" fill="#80ccff" />
          <Bar dataKey="Happy" stackId="a" fill="#66ff66" />
          <Bar dataKey="VeryHappy" stackId="a" fill="#009933" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Dashboard;
