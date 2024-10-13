import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Button from '@mui/material/Button';  
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css'; // Import the default styles
import { Modal, Box, Typography } from '@mui/material'; // Modal for mood details
import './CalendarMood.css'; // Custom CSS file to style the calendar

function CalendarMood() {
    const [moodData, setMoodData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [moodsForDate, setMoodsForDate] = useState([]);    
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    // Fetch moods from API
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

    // Handle selecting a date on the calendar
    const handleDateChange = (date) => {
        setSelectedDate(date);
        
        // Find all moods for the selected date, ignoring the time part
        const moodsForSelectedDate = moodData.filter((mood) => {
            const moodDate = new Date(mood.date).toLocaleDateString(); // Adjust this line if your API uses a different field for the date
            return moodDate === date.toLocaleDateString();
        });

        setMoodsForDate(moodsForSelectedDate); // Set all moods for the selected date
        setOpen(true); // Open modal to show mood details
    };

    const handleLogMood = () => {
        const nextDate = new Date(selectedDate);
        nextDate.setDate(nextDate.getDate() + 1);
        const formattedDate = nextDate.toISOString().split('T')[0];
        navigate(`/mood-logs?date=${formattedDate}`);
    };

    // Format the calendar tiles with mood ratings
    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const moodsForDate = moodData.filter((mood) => {
                const moodDate = new Date(mood.date).toLocaleDateString(); // Get mood date without time
                return moodDate === date.toLocaleDateString(); // Compare dates
            });

            return (
                <div>
                    {moodsForDate.map((mood, index) => {
                        // Define a color for each mood rating
                        let moodColor;
                        switch (mood.rating) {
                            case 'Very Happy':
                                moodColor = 'green';
                                break;
                            case 'Happy':
                                moodColor = 'lightgreen';
                                break;
                            case 'Neutral':
                                moodColor = 'yellow';
                                break;
                            case 'Sad':
                                moodColor = 'orange';
                                break;
                            case 'Very Sad':
                                moodColor = 'red';
                                break;
                            default:
                                moodColor = 'gray'; // Default color if rating is unknown
                        }
                        return (
                            <span key={index} style={{ color: moodColor, fontWeight: 'bold' }}>●</span>
                        );
                    })}
                </div>
            );
        }
        return null;
    };

    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set the time to midnight for accurate comparison

    return (
        <div>
            {/* Calendar component with minDate prop to prevent future date selection */}
            <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                tileContent={tileContent}
                className="custom-calendar"
                maxDate={today} // Prevent selecting future dates
            />

            {/* Modal to display mood details */}
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={{ p: 4, bgcolor: 'white', borderRadius: 2 }}>
                    <Typography variant="h6">Mood Entries for {selectedDate.toDateString()}</Typography>
                    {moodsForDate.length > 0 ? (
                        moodsForDate.map((mood, index) => (
                            <div key={index}>
                                <Typography sx={{ pt: 1}}><strong>Rating: </strong>{mood.rating}</Typography>
                                <Typography><strong>Emotions: </strong>{mood.emotions.join(', ')}</Typography>
                                <Typography><strong>Hours Slept: </strong>{mood.hoursSlept}</Typography>
                                <Typography sx={{ borderBottom: '1px solid lightgray', pb: 1 }}><strong>Note: </strong>{mood.note}</Typography>
                            </div>
                        ))
                    ) : (
                        <Typography gutterBottom>
                            No moods logged for this date. Would you like to log one?
                        </Typography>
                    )}

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={handleLogMood}
                    >
                        {moodsForDate.length > 0 ? 'Add New Entry' : 'Log Mood'}
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

export default CalendarMood;
