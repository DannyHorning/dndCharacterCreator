"use client";
import {useState, useEffect} from 'react';


export default function ClassDescription({classUrl}) {
    const [classDescription, setClassDescription] = useState(null);
    const [classLevels, setClassLevels] = useState([]);
    
    useEffect(() => {
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
        fetchClassDescription();
        fetchClassLevels();
    }, [classUrl]);

    

    if (classDescription === null) {
        return (
        <div>
            <p>Choose a class to get started</p>;
        </div>)
    }   

    return (
        <div className='flex flex-row justify-center'>
            <div className=' bg-red-700 rounded-lg p-2 flex  flex-col items-center w-1/2 m-2 text-center'>
    <h2 className='font-bold'>{classDescription.name}</h2>
    <p>Hit die: {classDescription.hit_die}</p>
    <p className='font-bold'>Proficiencies:</p>
    
    <ul>
        {classDescription.proficiency_choices.map((choices, index) => (
            <li key={index}>
                {choices.desc}
                <ul>
                    {classDescription.proficiencies.map((proficiency, proficiencyIndex) => (
                        <li key={proficiencyIndex}>{proficiency.name}</li>
                    ))}
                </ul>
            </li>
        ))}
    </ul>
    <p className='font-bold'>Starting Equipment:</p>
    <ul>
        {classDescription.starting_equipment.map((equipment, index) => (
            <li key={index}>{equipment.equipment.name}</li>
        ))}
        {classDescription.starting_equipment_options.map((options, index) => (
            <li key={index}>{options.desc}</li>
        ))}
    </ul>
    </div>
    <div  className='bg-red-700 rounded-lg p-2 flex flex-col items-center m-2 text-center'>
    <p className='font-bold'>Features:</p>
    {classLevels.map((level, index) => (
        <ul key={index}>
            <li className='font-bold'>Level {level.level}</li>
            <ul>
                {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature.name}</li>
                ))}
            </ul>
        </ul>
    ))}
    </div>
</div>      
    )
};