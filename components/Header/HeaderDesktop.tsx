import Menu from './Menu'
import Logo from './Logo'
import {Manrope} from 'next/font/google'
export default function HeaderDesktop(){
    return <>
        <header className="w-full h-[80px] grid grid-cols-3 justify-items-center items-center mt-[10px]">
            <Logo/> 
            <Menu/>
        </header>
    </>
}