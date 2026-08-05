import Menu from './Menu'
import Logo from './Logo'
import WatsApp from './WatsApp'
import {Manrope} from 'next/font/google'
import MenuDrawer from './Drawer_'

export default function Header(){
    return <>
        <header className="hidden lg:grid w-full grid-cols-4 justify-around bg-white h-[80px] justify-items-center items-center mt-[10px]">
            <Logo/> 
            <div className='col-span-2'><Menu/></div>
            <WatsApp buttonText='Напишите нам!'/>
        </header>
        <header className='lg:hidden w-full grid grid-cols-3 justify-around h-[60px] justify-items-center items-center my-3 md:mx-5'>
            <MenuDrawer/>
            <Logo/>
            <WatsApp/>
        </header>
    </>
}