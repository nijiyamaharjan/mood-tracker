import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the default styles
import { Modal, Box, Typography } from '@mui/material'; // Modal for mood details

// Custom styles to increase tile size
import './CalendarMood.css'; // Custom CSS file to style the calendar

function CalendarMood() {
    const [moodData, setMoodData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedMood, setSelectedMood] = useState(null);
    const [open, setOpen] = useState(false);

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
        const moodForDate = moodData.find((mood) => {
            const moodDate = new Date(mood.createdAt).toDateString();
            return moodDate === date.toDateString();
        });
        setSelectedMood(moodForDate);
        setOpen(true);
    };

    // Format the calendar tiles
    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const moodForDate = moodData.find((mood) => {
                const moodDate = new Date(mood.createdAt).toDateString();
                return moodDate === date.toDateString();
            });

            return moodForDate ? (
                <span style={{ color: 'green', fontWeight: 'bold' }}>●</span>
            ) : null;
        }
    };

    return (
        <div>
            {/* Calendar component */}
            <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                tileContent={tileContent}
                className="custom-calendar"
            />

            {/* Modal to display mood details */}
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={{ p: 4, bgcolor: 'white', borderRadius: 2 }}>
                    {selectedMood ? (
                        <>
                            <Typography variant="h6">Mood Details</Typography>
                            <Typography><strong>Rating: </strong>{selectedMood.rating}</Typography>
                            <Typography><strong>Emotions: </strong>{selectedMood.emotions.join(', ')}</Typography>
                            <Typography><strong>Hours Slept: </strong>{selectedMood.hoursSlept}</Typography>
                            <Typography><strong>Note: </strong>{selectedMood.note}</Typography>
                        </>
                    ) : (
                        <Typography>No mood logged for this date</Typography>
                    )}
                </Box>
            </Modal>
        </div>
    );
}

export default CalendarMood;
