"use client";

import {useState, useEffect} from 'react';
import ClassDescription from './class-description';

export default function Class(){

    const [characterClass, setCharacterClass] = useState([]);
    const [selectedClass, setSelectedClass] = useState(null);

    const fetchDndClassList = async () => {
        try {
            const response = await fetch('https://www.dnd5eapi.co/api/classes/');
            const data = await response.json();
            setCharacterClass(data.results);
            console.log(data.results);
        }
        catch (error) {
            console.error('Error in fetching data. ', error);
        }
    }


useEffect(() => {
    fetchDndClassList();
}, []);

const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
};

console.log(selectedClass);
console.log(characterClass);

return (
    <div>
        <h2 className='font-bold'>Pick a Class</h2>
        <select onChange={handleClassChange}>
                <option value="">Select a rule</option>
                {characterClass.map((classList, index) => (
                    <option key={index} value={classList.url}>
                        {classList.name}
                    </option>
                ))}
            </select>
            {selectedClass}
        <ClassDescription classUrl={selectedClass} />

    </div>
)

};