import React, { useState, useEffect } from 'react';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
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

  const formattedMoodData = moodData.map(item => ({
    date: new Date(item.date).toLocaleDateString(),
    // hoursSlept: item.hoursSlept,
    moodRating: item.rating,
    moodRatingIndex: Number(item.rating) - 1,
    emotions: item.emotions
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

  const totalMoodData = moodData.reduce((acc, item) => {
    const moodRating = Number(item.rating) - 1; // Convert to index
    acc[moodRating] = (acc[moodRating] || 0) + 1;
    return acc;
  }, {});

  const moodLevels = ['Very Sad', 'Sad', 'Neutral', 'Happy', 'Very Happy'];
  const pieDataMoods = moodLevels.map((name, index) => ({
    name,
    value: totalMoodData[index] || 0, // Get count or default to 0
  }));

  const aggregatedEmotions = moodData.reduce((acc, item) => {
    const emotions = item.emotions; // This is an array of emotions
    // Increment the count for each emotion in the array
    emotions.forEach(emotion => {
      acc[emotion] = (acc[emotion] || 0) + 1;
    });
    return acc;
  }, {});

  const emotions = [
    'happy', 'excited', 'grateful', 'relaxed', 'content', 'tired',
    'unsure', 'bored', 'anxious', 'angry', 'stressed', 'sad'
  ];
  
  // Prepare the pie data using the aggregatedEmotions
  const pieDataEmotions = emotions.map(name => ({
    name,
    value: aggregatedEmotions[name] || 0, // Get count or default to 0
  }));
  console.log(formattedMoodData)

  const sortedMoodDataForEmotions = Object.values(aggregatedMoodData).sort((a, b) => new Date(a.date) - new Date(b.date));

  const sortedMoodData = formattedMoodData.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div>
      <h3 className='font-bold justify-center text-center text-xl my-4'>Mood Ratings Over Time</h3>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={sortedMoodDataForEmotions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="VerySad" stackId="a" fill="#8C8C8C" />
          <Bar dataKey="Sad" stackId="a" fill="#033E8C" />
          <Bar dataKey="Neutral" stackId="a" fill="#EEECE2" />
          <Bar dataKey="Happy" stackId="a" fill="#F29325" />
          <Bar dataKey="VeryHappy" stackId="a" fill="#F2CD13" />
        </BarChart>
      </ResponsiveContainer>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <h3 className='font-bold justify-center text-center text-xl my-2'>Mood Distribution</h3>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={pieDataMoods}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
          >
            {pieDataMoods.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getMoodColor(index)} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <h3 className='font-bold justify-center text-center text-xl my-2'>Emotions Distribution</h3>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={pieDataEmotions}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            
          >
            {pieDataEmotions.map((entry, index) => ( // Corrected to use pieDataEmotions
              <Cell key={`cell-${index}`} fill={getEmotionColor(index)} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

const getEmotionColor = (index) => {
  const colors = ['#F2B6C6', '#BF2A70', '#48CAD9', '#AEEBF2', '#D8F0F2', '#D9E4FA', '#E5DCFA', '#BEBFFA', '#A1DBFA9', '#E9C2FF', '#FFA39D', '#BF0426'];
  return colors[index];
};

const getMoodColor = (index) => {
  const colors = ['#8C8C8C', '#033E8C', '#EEECE2', '#F29325', '#F2CD13'];
  return colors[index];
};
export default Dashboard;
