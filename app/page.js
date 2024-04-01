import Header from './components/header';
import Welcome from './components/welcome';
import RulesList from './components/rules-list';
export default function Page() {
  return (
    <div className='min-h-screen flex flex-col items-center'>
      <Header/>
      <div className='mt-7'>
      <Welcome />
      </div>
      <div>
      <RulesList />
      </div>
    </div>
  )
 
};