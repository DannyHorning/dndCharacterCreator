"use client";
import RaceDescription from './race-description';

import {useState, useEffect} from 'react';


export default function Race() {
    const [races, setRaces] = useState([]);
    const [selectedRace, setSelectedRace] = useState(null);


    const fetchDndRaceList = async () => {
        try {
            const response = await fetch('https://www.dnd5eapi.co/api/races/');
            const data = await response.json();
            setRaces(data.results);
            console.log(data.results);
        }
        catch (error) {
            console.error('Error in fetching data. ', error);
        }
    }
    useEffect(() => {
        fetchDndRaceList();
    }, []);
    
    const handleRaceChange = (event) => {
        setSelectedRace(event.target.value);
    };
    
    return (
        <div>
            <h2 className='font-bold'>Pick a Race</h2>
            <select onChange={handleRaceChange}>
                    <option value="">Select a rule</option>
                    {races.map((race, index) => (
                        <option key={index} value={race.url}>
                            {race.name}
                        </option>
                    ))}
                </select>
                {selectedRace}
            <RaceDescription raceUrl={selectedRace} />

        </div>
    )

};