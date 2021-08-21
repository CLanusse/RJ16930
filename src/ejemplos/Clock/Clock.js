import React, { useEffect, useState } from 'react'



export const Clock = () => {
    
    const [time, setTime] = useState( new Date() )

    const handleTimer = () => {
        setTime( new Date() )
    }


    return (
        <div onClick={handleTimer}>
            <h2>Hora local:</h2>
            <p>{ time.toLocaleString() }</p>
        </div>
    )
}
