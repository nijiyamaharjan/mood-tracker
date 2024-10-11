import { useEffect, useState } from 'react'
import { useMoodsContext } from '../hooks/useMoodsContext'

import MoodDetails from '../components/MoodDetails'
import MoodForm from '../components/MoodForm'

import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


export default function Home() {
    const { moods, dispatch } = useMoodsContext()

    useEffect(() => {
        const fetchMoods = async () => {
            const response = await fetch('http://localhost:4000/api/moods')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_MOODS', payload: json})
            }
        }

        fetchMoods()
    }, [dispatch])

    return (
        <div>


            <div>
                {moods && moods.map(mood => (
                    <MoodDetails mood={mood} key={mood._id} />
                ))}
            </div>
            
        </div>
    )
  }