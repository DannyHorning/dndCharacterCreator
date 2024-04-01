"use client";

import {useState, useEffect} from "react";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';

export default function BasicRules({ruleUrl}) {
    const [ruleData, setRuleData] = useState('Ability Checks');

    useEffect(() => {
        fetchDndBasicRules();
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
        <div className="flex justify-center items-center flex-col ml-20 mr-20">
        <Markdown remarkPlugins={[remarkGfm]}>{ruleData.desc}</Markdown>
        </div>
    );
    }