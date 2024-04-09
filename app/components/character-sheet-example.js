
const ProficiencyBonus = 2;
const StrengthBonus = 3;
const DexterityBonus = 2;
const ConstitutionBonus = 2;
const IntelligenceBonus = 0;
const WisdomBonus = 1;
const CharismaBonus = -1;


export default function CharacterSheetExample() {
    return(
    <div className='mr-20 ml-20'>
        <h2 className='font-bold'>Character Sheet Example</h2>
        <p>
            Let's take a look at an already created character (we will go into the specifics of making a character later). So far, we are only concerned about what a character sheet might
            look like, and how the information is related to each other. Below is an example of a character sheet for a character named "Grakthar Bonecrusher". This character is a level 1 Half-Orc Barbarian. The character sheet includes information such as the character
            ability scores, skills, equipment, and other important information. This character sheet is based on the character sheet provided in the Basic Rules for Dungeons and Dragons 5th Edition.
        </p>
        <div className='flex flex-wrap justify-center'>
        <div className= 'flex flex-col '>
        <div className="bg-red-700 m-3 p-2 rounded-lg">
            <p className='font-bold'>Character Details</p>
            <p>Name: Grakthar Bonecrusher</p>
            <p>Class: Barbarian</p>
            <p>Race: Half-Orc</p>
            <p>Level: 1</p>
            <p>Background: Acolyte</p>
        </div>
        <div className='flex flex-col bg-red-700 m-3 p-2 rounded-lg'>
            <h3 className='font-bold '>Ability Scores</h3>
            <p>Strength: 16 ({StrengthBonus})</p>
            <p>Dexterity: 14 ({DexterityBonus})</p>
            <p>Constitution: 14 ({ConstitutionBonus})</p>
            <p>Intelligence: 10 ({IntelligenceBonus})</p>
            <p>Wisdom: 12 ({WisdomBonus})</p>
            <p>Charisma: 8 ({CharismaBonus})</p>
        </div>
        <div className='bg-red-700 m-3 p-2 rounded-lg'>
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
        <div className="flex flex-col bg-red-700 m-3 p-2 rounded-lg">
            <p className='font-bold'>Proficiency Bonus: </p>
            <p className="ml-2">{ProficiencyBonus}</p>
        </div>
        <div className='bg-red-700 m-3 p-2 rounded-lg'>
            <p className='font-bold'>Armor Class:</p>
            <p>{10 + DexterityBonus + ConstitutionBonus}</p>
        </div>
        <div className='bg-red-700 m-3 p-2 rounded-lg'>
            <p className='font-bold'>Hitpoints:</p>
            <p> {12 + ConstitutionBonus} </p>
        </div>
        <div className='bg-red-700 m-3 p-2 rounded-lg'>
            <h3 className='font-bold'>Proficiencies</h3>
            <p>Armor: Light Armor, Medium Armor, Shields</p>
            <p>Weapons: Simple Weapons, Martial Weapons</p>
            <p>Tools: None</p>
            <p>Saving Throws: Strength, Constitution</p>
            <p>Skills: Athletics, Intimidation, Perception,</p>
        </div>
        <div className='bg-red-700 m-3 p-2 rounded-lg'>
            <h3 className='font-bold'>Saving Throws</h3>
            <p>Strength: ({StrengthBonus + ProficiencyBonus}) </p>
            <p>Dexterity: {DexterityBonus}</p>
            <p>Constitution: ({ConstitutionBonus + ProficiencyBonus})</p>
            <p>Intelligence: {IntelligenceBonus}</p>
            <p>Wisdom: {WisdomBonus}</p>
            <p>Charisma: {CharismaBonus}</p>
        </div>
        </div>
        
        
        
        <div className = 'flex flex-col'>
        <div className='bg-red-700 m-3 p-2 rounded-lg'>
            <h3 className='font-bold'>Equipment</h3>
            <ul>
                <li>Great Axe</li>
                <li>2 Handaxes</li>
                <li>Explorer's Pack</li>
                <li>Javelin (4)</li>
            </ul>
        </div>
        <div className= 'bg-red-700 m-3 p-2 rounded-lg'>
            <h3 className='font-bold'>Features and Traits</h3>
            <p>Rage: 2/Day</p>
            <p>Unarmored Defense</p>
        </div>
        
        <div className='bg-red-700 m-3 p-2 rounded-lg'>
            <h3 className='font-bold'>Actions</h3>
            <p>Great Axe: +5 to hit, 1d12 + 3 slashing damage</p>
            <p>Handaxe: +5 to hit, 1d6 + 3 slashing damage</p>
            <p>Javelin: +4 to hit, 1d6 + 3 piercing damage</p>
        </div>
        </div>
    </div>
    </div>
    )
};