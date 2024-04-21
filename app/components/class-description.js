"use client";
import {useState, useEffect} from 'react';


export default function ClassDescription({classUrl}) {
    const [classDescription, setClassDescription] = useState(null);
    const [classLevels, setClassLevels] = useState([]);

    useEffect(() => {
        fetchClassDescription();
        fetchClassLevels();
    }, [classUrl]);

    const fetchClassLevels = async () => {
        try {
            const response = await fetch(`https://www.dnd5eapi.co${classUrl}/levels`);
            const data = await response.json();
            setClassLevels(data);
            console.log(data);
        }
        catch (error) {
            console.error('Error in fetching data. ', error);
        }
    }

    const fetchClassDescription = async () => {
        try {
            const response = await fetch(`https://www.dnd5eapi.co${classUrl}`);
            const data = await response.json();
            setClassDescription(data);
            console.log(data);
        }
        catch (error) {
            console.error('Error in fetching data. ', error);
        }
    }

    if (classDescription === null) {
        return (
        <div>
            <p>Choose a class to get started</p>;
        </div>)
    }   

    return (
        <div>
            <h2>{classDescription.name}</h2>
            <p>Hit die: {classDescription.hit_die}</p>
            <p>Proficiencies: </p>
            <p>{classDescription.proficiency_choices.map((choices, index) => (
                <ul>
                <li key={index}>{choices.desc}</li>
                <li>{classDescription.proficiencies.map((proficiency, index) => 
                <ul>
                    <li key={index}>{proficiency.name}</li>
                </ul>)}</li>
                </ul>
            ))}</p>
            <p>Starting Equipment: </p>
            <ul>
                {classDescription.starting_equipment.map((equipment, index) => (
                    <li key={index}>{equipment.equipment.name}</li>
                ))}
                {classDescription.starting_equipment_options.map((options, index) => (
                    <li key={index}>{options.desc}</li>
                ))}
            </ul>
            <p>Features:
            </p>
            <ul>
                {classLevels.map((level, index) => (
                    <ul>
                    <li key={index}>Level {level.level}</li>
                    <ul>
                        <li key={index}>{classLevels.spellcasting.cantrips_known}</li>

                </ul>
                    <li key={index}>{level.features.map((feature, index) => (
                        <ul>
                            <li key={index}>{feature.name}</li>
                        </ul>
                    ))}</li>
                
            </ul>))}
            </ul>
            
        </div>      
    )
};