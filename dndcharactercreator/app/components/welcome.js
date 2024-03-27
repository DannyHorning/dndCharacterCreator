import Link from 'next/link';

export default function Welcome() {
    return (
        <p className='ml-20 mr-20'>
            
            Welcome to the Newbies guide to playing Dungeons and Dragons. Here you will find some helpful information on making your very first dnd Character.
            This set of rules is based on the Basic Rules for Dungeons and Dragons 5th Edition. If you are interested in learning more about the game, you can find the Basic Rules and other
            content books at the <Link href='https://www.dndbeyond.com/' className='text-blue-700 hover:text-blue-400 hover:cursor-pointer hover:underline p-1'>DnD Beyond website</Link> or <Link href='https://5e.tools/' className='text-blue-700 hover:text-blue-400 hover:cursor-pointer hover:underline p-1'>5e.tools</Link> for a more user friendly version of the rules.
        </p>
    )
};