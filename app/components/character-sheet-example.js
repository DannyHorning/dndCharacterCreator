"use client";
import {useState, useEffect} from 'react';

const ProficiencyBonus = 2;
const StrengthBonus = 3;
const DexterityBonus = 2;
const ConstitutionBonus = 2;
const IntelligenceBonus = 0;
const WisdomBonus = 1;
const CharismaBonus = -1;
const doubleRacialBonus = 2;
const racialBonus = 1;



export default function CharacterSheetExample() {
    const [explaination, setExplaination] = useState('other');

    function handleSheetExplaination(value) {
        if (value === 'characterDetails') {
            return () => setExplaination('characterDetails');
        }
        if (value === 'abilityScores') {
            return () => setExplaination('abilityScores');
        }
        if (value === 'skills') {
            return () => setExplaination('skills');
        }
        if (value === 'speed') {
            return () => setExplaination('speed');
        }
        if (value === 'proficiencyBonus') {
            return () => setExplaination('proficiencyBonus');
        }
        if (value === 'armorClass') {
            return () => setExplaination('armorClass');
        }
        if (value === 'hitpoints') {
            return () => setExplaination('hitpoints');
        }
        if (value === 'proficiencies') {
            return () => setExplaination('proficiencies');
        }
        if (value === 'savingThrows') {
            return () => setExplaination('savingThrows');
        }
        if (value === 'equipment') {
            return () => setExplaination('equipment');
        }
        if (value === 'features') {
            return () => setExplaination('features');
        }
        if (value === 'actions') {
            return () => setExplaination('actions');
        }
        else {
            return () => setExplaination('other');
        }
    }

    const displayExplaination = (explaination) => {
        if (explaination === 'characterDetails') {
            return (
                <div>
                    <h3 className='font-bold'>Character Details</h3>
                    <p> {`This is the character details section of the character sheet. It includes information such as the character's name, class, race, level, and background
                    information. This information is important for understanding the character's backstory and roleplaying opportunities, as well as any bonuses the character
                    might receive for being who they are. For example, Grakthar receives bonuses to his strength and consitution scores because he is a Half-Orc. He also gains 
                    some passive skills like Darkvision and Relentless Endurance. His class also grants some bonuses, like the ability to Rage and Unarmored Defense. As Grakthar levels up,
                    he will gain more abilities and bonuses based on rules in the Basic Rules for Dungeons and Dragons 5th Edition.`}
                    </p>
                </div>
            )
        }
        if (explaination === 'abilityScores') {
            return (
                <div>
                    <h3 className='font-bold'>Ability Scores</h3>
                    <p>{`This section of the character sheet includes the character's ability scores, which are used to determine the character's bonuses to skills, saving throws, and other 
                    abilities. Ability scores are determined by rolling dice or using a point-buy system, and they represent the character's natural talents and abilities. One way, and 
                    probably the most common way of determining a characters ability score is using the roll method. In this case, we roll 4D6 (4 six-sided dice), then we discard the lowest number
                    and add the remaining three dice together to determine am ability score. Another way is to determine ability score is using the buy method. In this example, an ability
                    scores cost starts at an 8 in ability score = 0 points, and increases in cost by 1 until we get to 18 ability score = 18 points. The DM would then determine how many
                    ability score points you are allowed to allocate in total to your ability scores, with 15 being a low power character, and 32 being a high power character. The ability score modifier
                    starts at 10 being equal to 0, and then increments by 1 for every 2 points in ability score. For example, if a character has a strength of 10, the ability modifier is 0. If 
                    and ability score is 16, then the modifier is 3. If a character has an ability score of 7, then the modifier is -1, because we round down (up if it is negative). In Grakthar's case, 
                    his highest ability score is Strength, which gives him bonuses to skills like Athletics. His second highest score is Dexterity, which gives him bonuses to 
                    skills like Acrobatics and Stealth, as well is added to his Armor Class (AC). His lowest score is Charisma, which gives him penalties to skills like Persuasion and Deception.
                    The best way to describe ability score is to think of it like this: Strength is how strong you are, Dexterity is how agile you are, Constitution is how tough you are, Intelligence is how smart you are, 
                    Wisdom is how perceptive you are, and Charisma is how charming you are.`}
                    </p>
                </div>
            )
        }
        if (explaination === 'skills') {
            return (
                <div>
                    <h3 className='font-bold'>Skills</h3>
                    <p>{`This section of the character sheet includes the character's skills, which are used to determine the character's bonuses to certain actions and abilities. Skills are 
                    determined by the character's ability scores and any bonuses they receive from their racial or class bonuses. For example, Grakthar has a high Strength score, which gives him a bonus
                    to skills like Athletics. He also has a high Wisdom score, which gives him a bonus to skills like Animal Handling and Perception. Whenever you, as a character, want to do something in the game,
                    your DM might ask you to make a check, in which you will roll a D20 (20 sided dice) and add your ability score modifier to the roll. If you are proficient in that skill, you will also add your proficiency bonus to the roll.`}
                    </p>
                </div>
            )
        }
        if (explaination === 'proficiencyBonus') {
            return (
                <div>
                    <h3 className='font-bold'>Proficiency Bonus</h3>
                    <p>{`The character's proficiency bonus is also added to any skills. Essentially, the proficiency bonus is a bonus to a skill that the character is especially good at.
                    Proficiency bonus is level based, with a proficiency bonus of +2 at level 1, and increasing as the character levels up. Proficiency bonus is added to any skill that the character is proficient in.
                    The skills a character is proficient in is usually picked or determined by the character's class and background. For example, Grakthar is proficient in Athletics, Intimidation, and Perception.`}
                    </p>
                </div>
            )
        }
        if (explaination === 'armorClass') {
            return (
                <div>
                    <h3 className='font-bold'>Armor Class</h3>
                    <p>{`Armor Class (AC) is a measure of how difficult it is to hit a character with an attack. Armor Class is determined by the character's Dexterity bonus and any armor or shield they are wearing.
                    The higher the character's AC, the harder it is for enemies to hit them. An unarmored character, with a +0 in dexterity would have an AC of 10. Most armor pieces will have
                    a base AC that is higher than 10, like leather armor, which has an AC of 11. In this case, the character would have a base AC of 11, then add their dexterity bonus, to a maximum of +2.
                    In Grakthar's case, his AC is 14,which means that enemies need to roll a 14 or higher to hit him with an attack. But wait, how is it 14? This is because Grakthar has a Dexterity bonus of +2, 
                    and a Constitution bonus of +2, which adds up to 4. The reason Grakthar gets to add his constitiution bonus to his AC is because he is a Barbarian, and Barbarians get to add their constitution bonus to their AC if they
                    are not wearing any armor, as per the Unarmored Defense attribute.`}
                    </p>
                </div>
            )
        }
        if (explaination === 'speed') {
            return (
                <div>
                    <h3 className='font-bold'>Speed</h3>
                    <p>{`Speed is a measure of how far a character can move in a single turn. Speed is determined by the character's race, and sometimes a magical item or other modifier.
                    Speed usually comes into play during combat, when the character needs to move to a different location on the battlefield. If you are playing in a campaign that has a map,
                    usually one tile is equal to 5 feet. For example, Grakthar has a speed of 30 feet, which means he can move 30 feet, or 6 tiles, in a single turn.`}
                    </p>
                </div>
            )
        }
        if (explaination === 'hitpoints') {
            return (
                <div>
                    <h3 className='font-bold'>Hitpoints</h3>
                    <p>{`Hitpoints are a measure of how much damage a character can take before they are knocked unconscious or killed. Hitpoints are determined by the character's class and level, as well as their 
                    Constitution bonus. At the first level, every class will have a hit die. In Grakthar's case, it is a D12. So this means at the first level, Grakthar gets 12 hitpoints, plus his constitution bonus. 
                    In Grakthar's case, his hitpoints are 14, which means that he can take 14 points of damage before he is knocked unconscious. If he takes more than 28 (double his hitpoints) points of damage in a single attack,
                    Grakthar is then instantly killed instead of being knocked unconscious. To calculate hitpoints at a higher level, you would roll the hit die for the class, and add the constitution bonus to the roll. If we were
                    to level Grakthar up to level 2, he would roll a D12, and add his constitution bonus to the roll, and then add that to his current maximum hitpoints.`}
                    </p>
                </div>
            )
        }
        if (explaination === 'proficiencies') {
            return (
                <div>
                    <h3 className='font-bold'>Proficiencies</h3>
                    <p>{`Proficiencies are skills, tools, and weapons that the character is proficient in. Proficiencies are determined by the character's class and background. For example, 
                    Grakthar is proficient in light armor, medium armor, shields, simple weapons, and martial weapons. This means that he can use these items without penalty, 
                    and he can add his proficiency bonus to any skill checks or attacks that use these items. Grakthar is also proficient in Strength and Constitution saving throws, as well as the skills
                     Athletics, Intimidation, and Perception. This means that he can add his proficiency bonus to any saving throws or skill checks that use these abilities.`}
                    </p>
                </div>
            )
        }
        if (explaination === 'savingThrows') {
            return (
                <div>
                    <h3 className='font-bold'>Saving Throws</h3>
                    <p>{`Saving throws are a measure of how well a character can resist certain effects, like poison or fire. Saving throws are determined by the character's ability scores and any bonuses they receive from their
                    class or background. For example, Grakthar is proficient in Strength and Constitution saving throws, which means that he can add his proficiency bonus to any saving throws that use these abilities.
                    Saving throws are made by rolling a D20 and adding the character's ability score modifier and proficiency bonus, if they are proficient in that saving throw. When something occurs in the game,
                    the DM might ask you to make a saving throw to see if your character can resist the effect. For example, if Grakthar was hit by a poison dart, the DM might ask him to make a Constitution saving throw to see if he can resist the poison.`}
                    </p>
                </div>
            )
        }
        if (explaination === 'equipment') {
            return (
                <div>
                    <h3 className='font-bold'>Equipment</h3>
                    <p>{`Equipment is the items that the character carries with them on their adventures. Equipment is determined by the character's class and background, as well as any items they might have found or purchased
                    during their adventures. For example, Grakthar carries a Great Axe, 2 Handaxes, an Explorer's Pack, and 4 Javelins. These items are used in combat and exploration to help the character overcome obstacles and defeat enemies.
                    Usually loot (found equipment) is obtained through talking with NPCs, exploring the world, and defeating enemies. It is important to remember that certain characters are proficient in certain equipment.
                    While a character can use any weapon, they might not be proficient in using it, which means they do not get to add their proficiency bonus to the action, and in some cases, penalties might apply.`}
                    </p>
                </div>
            )
        }
        if (explaination === 'features') {
            return (
                <div>
                    <h3 className='font-bold'>Features and Traits</h3>
                    <p>{`Features and traits are special abilities that the character has, usually granted by their class or background. Features and traits can be passive abilities, like Darkvision, which allows the character to see in the dark,
                    or active abilities, like Rage, which allows the character to enter a state of heightened combat ability. Features and traits are used to give the character unique abilities and bonuses that help them overcome challenges and
                    defeat enemies. For example, Grakthar has the features Darkvision, Relentless Endurance, and Savage Attacks, which give him bonuses to seeing in the dark, surviving a fatal blow, and dealing extra damage in combat.`}
                    </p>
                </div>
            )
        }
        if (explaination === 'actions') {
            return (
                <div>
                    <h3 className='font-bold'>Actions</h3>
                    <p>{`Actions are the things that the character can do in combat and exploration. Actions are determined by the character's class and equipment, as well as any special
                     abilities they might have. Actions usually come into play during combat. Every character can move (the distance is specified by the characters speed), and has one action
                     and one bonus action per turn, unless otherwise specified. For example, Grakthar can attack with a Great Axe, Handaxe, or Javelin, each of which has a different attack bonus and damage. 
                     When Grakthar attacks, he rolls a D20 and adds his attack bonus to the roll to see if he hits the target. If he hits, he then rolls the damage dice and adds 
                     his ability score modifier to the damage. In addition to attacking, Grakthar can Rage as a bonus action. This means in one turn, Grakthar can move, Rage, and Attack, 
                     all in one turn. The order in which Grakthar does these does not matter, meaning he can attack, Rage, then move if he wants to.
                     Actions are used to resolve combat and exploration encounters, and they help the character overcome obstacles and defeat enemies.`}
                    </p>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h3 className='font-bold'>Grakthar Bonecrusher</h3>
                    <p>{`This is the character sheet for Grakthar Bonecrusher, a level 1 Half-Orc Barbarian. The character sheet includes information such as the character's ability scores, skills, equipment, and other important information. 
                    This character sheet is based on the character sheet provided in the Basic Rules for Dungeons and Dragons 5th Edition.`}
                    </p>
                </div>
            )
        }
    }



    return(
    <div className='flex flex-col mr-20 ml-20'>
        <h2 className='font-bold'>Character Sheet Example</h2>
        <p>{`
            Let's take a look at an already created character (we will go into the specifics of making a character later). So far, we are only concerned about what a character sheet might
            look like, and how the information is related to each other. Below is an example of a character sheet for a character named Grakthar Bonecrusher. This character is a level 1 Half-Orc Barbarian. The character sheet includes information such as the character
            ability scores, skills, equipment, and other important information. This character sheet is based on the character sheet provided in the Basic Rules for Dungeons and Dragons 5th Edition.
        `}
        </p>
        <div className='flex flex-wrap justify-center'>
        <div className= 'flex flex-col '>
        <div className="bg-red-700 m-3 p-2 rounded-lg hover:cursor-pointer hover:bg-red-600" onClick={handleSheetExplaination('characterDetails')} value="characterDetails">
            <p className='font-bold'>Character Details</p>
            <p>Name: Grakthar Bonecrusher</p>
            <p>Class: Barbarian</p>
            <p>Race: Half-Orc</p>
            <p>Level: 1</p>
            <p>Background: Acolyte</p>
        </div>
        <div className='flex flex-col bg-red-700 m-3 p-2 rounded-lg hover:cursor-pointer hover:bg-red-600' onClick={handleSheetExplaination('abilityScores')} value="abilityScores">
            <h3 className='font-bold '>Ability Scores</h3>
            <p>Strength: 18 ({StrengthBonus + doubleRacialBonus})</p>
            <p>Dexterity: 14 ({DexterityBonus})</p>
            <p>Constitution: 15 ({ConstitutionBonus + racialBonus})</p>
            <p>Intelligence: 10 ({IntelligenceBonus})</p>
            <p>Wisdom: 12 ({WisdomBonus})</p>
            <p>Charisma: 8 ({CharismaBonus})</p>
        </div>
        <div className='bg-red-700 m-3 p-2 rounded-lg hover:cursor-pointer hover:bg-red-600' onClick={handleSheetExplaination('skills')} value ='skills'>
            <h3 className='font-bold'>
                Skills
            </h3>
            <ul>
            <li>o Acrobatics: {DexterityBonus}</li>
            <li>o Animal Handling: {WisdomBonus}</li>
            <li>o Arcana: {IntelligenceBonus}</li>
            <li>p Athletics: {StrengthBonus + ProficiencyBonus}</li>
            <li>o Deception: {CharismaBonus}</li>
            <li>o History: {IntelligenceBonus}</li>
            <li>o Insight: {WisdomBonus}</li>
            <li>p Intimidation: {CharismaBonus + ProficiencyBonus}</li>
            <li>o Investigation: {IntelligenceBonus}</li>
            <li>o Medicine: {WisdomBonus}</li>
            <li>o Nature: {IntelligenceBonus}</li>
            <li>p Perception: {WisdomBonus + ProficiencyBonus}</li>
            <li>o Performance: {CharismaBonus}</li>
            <li>o Persuasion: {CharismaBonus}</li>
            <li>o Religion: {IntelligenceBonus}</li>
            <li>o Sleight of Hand: {DexterityBonus}</li>
            <li>o Stealth: {DexterityBonus}</li>
            <li>o Survival: {WisdomBonus}</li>
            </ul>
        </div>
        </div>
        <div className='flex flex-col'>
        <div className="flex flex-col bg-red-700 m-3 p-2 rounded-lg hover:cursor-pointer hover:bg-red-600" onClick={handleSheetExplaination('proficiencyBonus')} value = 'proficiencyBonus'>
            <p className='font-bold'>Proficiency Bonus: </p>
            <p className="ml-2">{ProficiencyBonus}</p>
        </div>
        <div className='bg-red-700 m-3 p-2 rounded-lg hover:cursor-pointer hover:bg-red-600' onClick={handleSheetExplaination('speed')} value = 'speed'>
            <p className='font-bold'>Speed:</p>
            <p>{'30 feet'}</p>
        </div>
        <div className='bg-red-700 m-3 p-2 rounded-lg hover:cursor-pointer hover:bg-red-600' onClick={handleSheetExplaination('armorClass')} value = 'armorClass'>
            <p className='font-bold'>Armor Class:</p>
            <p>{10 + DexterityBonus + ConstitutionBonus}</p>
        </div>
        <div className='bg-red-700 m-3 p-2 rounded-lg hover:cursor-pointer hover:bg-red-600' onClick={handleSheetExplaination('hitpoints')} value = 'hitpoints'>
            <p className='font-bold'>Hitpoints:</p>
            <p> {12 + ConstitutionBonus} </p>
        </div>
        <div className='bg-red-700 m-3 p-2 rounded-lg hover:cursor-pointer hover:bg-red-600' onClick={handleSheetExplaination('proficiencies')} value = 'proficiencies'>
            <h3 className='font-bold'>Proficiencies</h3>
            <p>Armor: Light Armor, Medium Armor, Shields</p>
            <p>Weapons: Simple Weapons, Martial Weapons</p>
            <p>Tools: None</p>
            <p>Saving Throws: Strength, Constitution</p>
            <p>Skills: Athletics, Intimidation, Perception,</p>
        </div>
        <div className='bg-red-700 m-3 p-2 rounded-lg hover:cursor-pointer hover:bg-red-600' onClick={handleSheetExplaination('savingThrows')} value = 'savingThrows'>
            <h3 className='font-bold'>Saving Throws</h3>
            <p>Strength: {StrengthBonus + ProficiencyBonus} </p>
            <p>Dexterity: {DexterityBonus}</p>
            <p>Constitution: {ConstitutionBonus + ProficiencyBonus}</p>
            <p>Intelligence: {IntelligenceBonus}</p>
            <p>Wisdom: {WisdomBonus}</p>
            <p>Charisma: {CharismaBonus}</p>
        </div>
        </div>
        
        
        
        <div className = 'flex flex-col'>
        <div className='bg-red-700 m-3 p-2 rounded-lg hover:cursor-pointer hover:bg-red-600' onClick={handleSheetExplaination('equipment')} value = 'equipment'>
            <h3 className='font-bold'>Equipment</h3>
            <ul>
                <li>Great Axe</li>
                <li>2 Handaxes</li>
                <li>{`Explorer's Pack`}</li>
                <li>Javelin (4)</li>
            </ul>
        </div>
        <div className= 'bg-red-700 m-3 p-2 rounded-lg hover:cursor-pointer hover:bg-red-600' onClick={handleSheetExplaination('features')} value = 'features'>
            <h3 className='font-bold'>Features and Traits</h3>
            <p>Darkvision</p>
            <p>Relentless Endurance</p>
            <p>Savage Attacks</p>
            <p>Languages: Common and Orc</p>
            <p>Rage: 2/Day</p>
            <p>Unarmored Defense</p>
        </div>
        
        <div className='bg-red-700 m-3 p-2 rounded-lg hover:cursor-pointer hover:bg-red-600' onClick={handleSheetExplaination('actions')} value = 'actions'>
            <h3 className='font-bold'>Actions</h3>
            <p>Great Axe: +5 to hit, 1d12 + 3 slashing damage</p>
            <p>Handaxe: +5 to hit, 1d6 + 3 slashing damage</p>
            <p>Javelin: +4 to hit, 1d6 + 3 piercing damage</p>
        </div>
        </div>  
        <div className='bg-red-700 m-3 p-2 rounded-lg text-center'>
        {displayExplaination(explaination)}
    </div>
    </div>
    </div>
    )
};