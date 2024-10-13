import { useEffect } from 'react';
import { useMoodsContext } from '../hooks/useMoodsContext';
import MoodDetails from '../components/MoodDetails';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function Home() {
    const { moods, dispatch } = useMoodsContext();

    useEffect(() => {
        const fetchMoods = async () => {
            const response = await fetch('http://localhost:4000/api/moods');
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_MOODS', payload: json });
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

    const sortedDates = Object.keys(groupedMoods).sort((a, b) => new Date(b) - new Date(a))
    return (
        <Box sx={{ padding: 2 }}>
            {sortedDates.map((date) => (
                <Box key={date} sx={{ marginBottom: 4 }}>
                    <Typography variant="h6" sx={{ borderBottom: '1px solid lightgray', pb: 1 }}>
                    {new Date(date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long',
                            day: 'numeric' 
                        })}
                    </Typography>
                    {groupedMoods[date].map((mood) => (
                        <MoodDetails mood={mood} key={mood._id} />
                    ))}
                </Box>
            ))}
        </Box>
    );
}
