import { useEffect } from 'react';
import { useMoodsContext } from '../hooks/useMoodsContext';
import MoodDetails from '../components/MoodDetails';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import dummyMoodData from './dummyMoodData.js';

export default function Home() {
  const { moods, dispatch } = useMoodsContext();

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/moods');
        const json = await response.json();

        if (response.ok && json.length > 0) {
          dispatch({ type: 'SET_MOODS', payload: json });
        } else {
          console.warn('Using dummy data as fallback.');
          dispatch({ type: 'SET_MOODS', payload: dummyMoodData });
        }
      } catch (error) {
        console.error('Error fetching mood data:', error);
        console.warn('Using dummy data as fallback.');
        dispatch({ type: 'SET_MOODS', payload: dummyMoodData });
      }
    };

    fetchMoods();
  }, [dispatch]);

  // Function to group moods by date
  const groupMoodsByDate = (moods) => {
    return moods.reduce((acc, mood) => {
      const moodDate = new Date(mood.date).toLocaleDateString();
      if (!acc[moodDate]) {
        acc[moodDate] = [];
      }
      acc[moodDate].push(mood);
      return acc;
    }, {});
  };

  const groupedMoods = groupMoodsByDate(moods);
  const sortedDates = Object.keys(groupedMoods).sort((a, b) => new Date(b) - new Date(a));
console.log(sortedDates)
  return (
    <>
      <Box sx={{ padding: 2 }}>
        {sortedDates.map((date) => (
          <Box key={date} sx={{ marginBottom: 2 }}>
            <Typography variant="h6" sx={{ borderBottom: '1px solid lightgray', pb: 1 }}>
              {new Date(date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Typography>
            <div className="flex flex-row flex-wrap" style={{ overflow: 'hidden' }}>
              {groupedMoods[date].map((mood) => (
                <Box key={mood._id || `${date}-${mood.rating}`} sx={{ margin: '2px' }}>
                  <MoodDetails mood={mood} />
                </Box>
              ))}
            </div>
          </Box>
        ))}
      </Box>
    </>
  );
}
