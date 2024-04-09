import Header from './components/header';
import Welcome from './components/welcome';
import RulesList from './components/rules-list';
import CharacterSheetExample from './components/character-sheet-example';
export default function Page() {
  return (
    <div className='min-h-screen flex flex-col items-center'>
      <Header/>
      <div className='mt-7'>
      <Welcome />
      <p className= 'mt-2 ml-20 mr-20'>
        {`
            Before we get started on creating your character, let's go over some basic rules of the game. These are fundamental rules that you will need to know in order to play. Understanding these rules
            will help you to make informed decisions when creating your character and when playing the game. There are many different play styles and ways to play DnD, but these rules are the foundation of the game.
            Select a rule from the dropdown menu below to learn more about it.
            `}
        </p>
      </div>
      <div>
      <RulesList />
      </div>
      <CharacterSheetExample />
    </div>
  )
 
};