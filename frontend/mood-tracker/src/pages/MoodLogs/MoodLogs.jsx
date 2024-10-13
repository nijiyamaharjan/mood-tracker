import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoodRating from './MoodRating';
import Emotions from './Emotions';
import Note from './Note';
import { useMoodsContext } from '../../hooks/useMoodsContext';
import { Button, Box, Typography } from '@mui/material';

import "react-datepicker/dist/react-datepicker.css";

function MoodLogs() {
    const { dispatch } = useMoodsContext();
    const location = useLocation();
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [mood, setMood] = useState({
        rating: null,
        emotions: [],
        // hoursSlept: 0,
        note: '',
        date: new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) // Default date to today (midnight UTC)
    });
    const [isToday, setIsToday] = useState(true); // Renamed to be clearer

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const dateParam = params.get('date');
        if (dateParam) {
            const newDate = new Date(dateParam);
            newDate.setHours(0, 0, 0, 0); // Set time to midnight
            setMood(prevMood => ({ ...prevMood, date: newDate }));
            setIsToday(isTodayFunc(newDate)); // Check if the initial date is today
        } else {
            setIsToday(isTodayFunc(mood.date)); // Check if default date is today
        }
    }, [location]);

    const isTodayFunc = (date) => {
        const today = new Date();
        return date.getFullYear() === today.getFullYear() &&
               date.getMonth() === today.getMonth() &&
               date.getDate() === today.getDate();
    };

    const handleRatingChange = (newRating) => {
        setMood((prevMood) => ({ ...prevMood, rating: newRating }));
    };

    // const handleHoursSleptChange = (hours) => {
    //     setMood((prevMood) => ({ ...prevMood, hoursSlept: hours }));
    // };

    const handleEmotionsChange = (selectedEmotions) => {
        setMood((prevMood) => ({ ...prevMood, emotions: selectedEmotions }));
    };

    const handleNoteChange = (note) => {
        setMood((prevMood) => ({ ...prevMood, note: note }));
    };

    const handleDateChange = (date) => {
        const updatedDate = new Date(date);
        setMood((prevMood) => ({ ...prevMood, date: updatedDate }));
        setIsToday(isTodayFunc(updatedDate));
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submit button clicked');
        console.log('Current mood state:', mood);

        if (mood.rating === null || mood.emotions.length === 0) {
            console.log('Validation failed');
            console.log('Rating:', mood.rating);
            console.log('Emotions:', mood.emotions);
            setError("Please fill out all required fields (rating and emotions).");
            return;
        }

        try {
            console.log('Sending POST request');
            const response = await fetch('http://localhost:4000/api/moods', {
                method: 'POST',
                body: JSON.stringify(mood),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();
            console.log('Response received:', json);

            if (!response.ok) {
                setError(json.error);
                setSuccessMessage(null);
            } else {
                setError(null);
                setSuccessMessage('Mood added successfully!');
                setMood({ rating: null, emotions: [], note: '', date: new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) }); // Reset mood after submission
                console.log('New mood added:', json);
                dispatch({ type: 'CREATE_MOOD', payload: json });
            }

            console.log('Mood submitted successfully!');
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to submit mood. Please try again.');
            setSuccessMessage(null);
        }
    };

    const changeDate = (direction) => {
        const newDate = new Date(mood.date);
        if (direction === 'prev') {
            newDate.setDate(newDate.getDate() - 1); // Move to the previous day
        } else if (direction === 'next') {
            newDate.setDate(newDate.getDate() + 1); // Move to the next day
        }
        handleDateChange(newDate); // Update moods for the new date
    };

    return (
        <Box sx={{ maxWidth: '600px', margin: 'auto', padding: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Log Mood
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <Button variant="outlined" onClick={() => changeDate('prev')}>← Previous</Button>
                <Typography variant="h6" style={{ margin: '0 1rem' }}>
                {mood.date.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                })}
                </Typography>
                {/* Only show the Next button if it's not today */}
                {!isToday && <Button variant="outlined" onClick={() => changeDate('next')}>Next →</Button>}
            </div>
            <form onSubmit={handleSubmit}>
                {/* <SleepSlider value={mood.hoursSlept} onHoursSleptChange={handleHoursSleptChange} /> */}
                <MoodRating selectedMood={mood.rating} onRatingChange={handleRatingChange} />
                <Emotions selectedEmotions={mood.emotions} onEmotionsChange={handleEmotionsChange} />
                <Note onNoteChange={handleNoteChange} note={mood.note} />
                {/* <DatePicker
                    selected={mood.date}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    maxDate={new Date()} // Disable future dates
                /> */}
                <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
                    Add Mood
                </Button>
            </form>
            {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
            {successMessage && <Typography color="success" sx={{ mt: 2 }}>{successMessage}</Typography>}
        </Box>
    );
}

export default MoodLogs;
