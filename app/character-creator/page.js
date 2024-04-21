import Class from "../components/class";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Race from "../components/race";

export default function Page() {
    
    return (
        <div className='min-h-screen'>
        <Header/>
        <Navbar />
        <p className="flex justify-center items-center text-center m-5">
            {`
            Let's get started on making your first character! One of the first things we are going to need to pick is our race. There are lots of races to pick from, each with their own 
            unique abilities and traits. In the grand scheme of things, the race is not going to have a massive impact on the game play of your character, but it can help to shape the character's
            backstory and personality. So pick which ever one you feel like you would have the most fun playing.`}
        </p>
        <Race />
        <p className="flex justify-center items-center text-center m-5">
            {`
            Now that we have seen some of the options for race, let's take a look at some of the options for class. The class of your character is going to have a much larger impact on the game
             play. This will essentially determine what your character is good at and what they can do. So pick the class that you think you would have the most fun playing.`}
        </p>
        <Class />
        </div>
    )
     
    };
