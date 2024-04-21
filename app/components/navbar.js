import Link from 'next/link';

export default function Navbar() {
    return (
        <div className = 'flex justify-evenly bg-red-700 text-2xl m-5 font-bold'>
            <div><Link href='./'>Basic Rules</Link></div>
            <div><Link href='./character-creator/'>Planning your First Character</Link></div>
            <div><Link href='./contact/'>Contact Me</Link></div>
            

        </div>
    )
}
