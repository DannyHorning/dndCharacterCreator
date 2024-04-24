"use client";
import {useState, useEffect} from 'react';


export default function RaceDescription({raceUrl}) {
    
    const [raceDescription, setRaceDescription] = useState(null);
    
    const fetchRaceDescription = async () => {
        try {
            const response = await fetch(`https://www.dnd5eapi.co${raceUrl}`);
            const data = await response.json();
            setRaceDescription(data);
            console.log(data);
            
        }
        catch (error) {
            console.error('Error in fetching data. ', error);
        }
    }

    useEffect(() => {
        fetchRaceDescription();
    }, [raceUrl]);

    

    

    if (raceDescription === null) {
        return (
        <div>
            <p>Choose a race to get started</p>
        </div>)
    }

    return (
        <div className='flex flex-row justify-center'>
            <div className=' bg-red-700 rounded-lg p-2 flex justify-center flex-col items-center w-1/2 m-2'>
            <h2 className='font-bold'>{raceDescription.name}</h2>
            <p>Speed: {raceDescription.speed} ft</p>
            <p>{raceDescription.alignment}</p> 
            <p>{raceDescription.age}</p>
            <p className='font-bold'>{raceDescription.size}</p>
            <p>{raceDescription.size_description}</p>
            <p className='font-bold'>Languages: </p>
            <ul>
                {raceDescription.languages.map((language, index) => (
                    <li key={index}>{language.name}</li>
                ))}
            </ul>
            <p>{raceDescription.language_desc}</p>
            </div>
            <div className='bg-red-700 rounded-lg p-2 flex flex-col items-center m-2'>
            <h3 className='font-bold'>Ability Bonuses</h3>
            <ul>
                {raceDescription.ability_bonuses.map((ability, index) => (
                    <li key={index}>{ability.ability_score.name} +{ability.bonus}</li>
                ))}
            </ul> 
            <h3 className='font-bold'>Starting Proficiencies</h3>
            <ul>
                {raceDescription.starting_proficiencies.map((proficiency, index) => (
                    <li key={index}>{proficiency.name}</li>
                ))}
            </ul>
            
            <h3 className='font-bold'>Traits</h3>
            <ul>
                {raceDescription.traits.map((trait, index) => (
                    <li key={index}>{trait.name}</li>
                ))}
            </ul>
            </div>
            


            
            
            </div>
    )
}