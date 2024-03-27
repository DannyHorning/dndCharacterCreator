"use client"

import {useState, useEffect} from "react";




export default function RulesList() {
    const [rules, setRules] = useState([]);

    const fetchDndBasicRulesList = async () => {
        try {
            const response = await fetch('https://www.dnd5eapi.co/api/rule-sections/');
            const data = await response.json();
            setRules(data.results);
        } catch (error) {
            console.error('Error in fetching data. ', error);
        }
    };

    useEffect(() => {
        fetchDndBasicRulesList();
    }, []);

    return (
        <div className='flex flex-col justify-center items-center'>
            <label>
                <h2 className='font-bold'>Basic Rules</h2>
                <select>
                    {rules.map((rule, index) => (
                    <option key={index} value={rule}>{rule.name}
                    </option>
                    ))}
                </select>
            </label>
        </div>
    );
}
