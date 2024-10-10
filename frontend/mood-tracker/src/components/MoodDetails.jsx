import { useMoodsContext } from "../hooks/useMoodsContext"
import * as React from 'react';
import MoodCard from "./MoodCard";

export default function MoodDetails({ mood }) {

    const { dispatch } = useMoodsContext()

    const handleClick = async () => {
        const response = await fetch('http://localhost:4000/api/moods/' + mood._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_MOOD', payload: json})
        }
    }
    return (
        
        <div className="py-2">  
            <MoodCard mood={mood} handleDelete={handleClick} />
        </div>
        )
}

