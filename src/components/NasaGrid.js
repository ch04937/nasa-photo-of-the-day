import React from 'react'


export default function NasaGrid({limit}) {

    return <div className = 'nasa-grid'>
        <div className = 'nasa-card'>
            <img src = 'https://api.nasa.gov/DONKI/IPS?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&location=LOCATION&catalog=CATALOG&api_key=DEMO_KEY' alt 'nasa'>
        </div>
    </div>
}