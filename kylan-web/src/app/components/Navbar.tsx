import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export const NavBar = () => {
    return (
        <div className="flex items-center justify-between h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="text-3xl font-bold mr-50 text-[#D3AF37]">KYLAN</h1>
            <ul className="flex gap-20">
                <li className="">Home</li>
                <li className="">About Us</li>
                <li className="">Projects</li>
                <li className="">Contact</li>
            </ul>
        </div>
        // <div className="relative flex gap-2">
        //     <div className="">
        //         <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
        //             <a aria-label="Home" className="pointer-events-auto" href="/">Kylan</a>
        //         </div>
        //     </div>
        //     <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        //         <li>
        //             <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/about">About</a>
        //         </li>
        //         <li>
        //             <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</a>
        //         </li>
        //         <li>
        //             <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/contactus">Contact Us</a>
        //         </li>
        //     </ul>
        // </div>
    );
}
