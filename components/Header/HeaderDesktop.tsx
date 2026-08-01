import Menu from './Menu'
import Logo from './Logo'
import WatsApp from './WatsApp'
import {Manrope} from 'next/font/google'
export default function HeaderDesktop(){
    return <>
        <header className="hidden lg:grid w-full bg-white h-[80px] grid-cols-[1fr_auto_1fr] justify-items-center items-center mt-[10px]">
            <Logo/> 
            <Menu/>
            <WatsApp/>
        </header>
    </>
}