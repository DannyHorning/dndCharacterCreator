"use client";

import {useState, useEffect} from "react";

export default function BasicRules({ruleUrl}) {
    const [ruleData, setRuleData] = useState('Ability Checks');

    useEffect(() => {
        fetchDndBasicRules();
        
        console.log(ruleUrl);
        console.log(ruleData);
    }, [ruleUrl]);


    const fetchDndBasicRules = async () => {
        try {
            const response = await fetch(`https://www.dnd5eapi.co${ruleUrl}`);
            const data = await response.json();
            setRuleData(data);
        } catch (error) {
            console.error('Error in fetching data. ', error);
        }
    };
    return (
        <div className='flex flex-col justify-center items-center'>
        <p>{ruleData.desc}</p>
        </div>
    );
    }