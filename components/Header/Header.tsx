import Menu from './Menu'
import Logo from './Logo'
import WatsApp from './WatsApp'
import {Manrope} from 'next/font/google'
import MenuDrawer from './Drawer_'

export default function Header(){
    return <>
        <header className="hidden lg:grid w-full bg-white h-[80px] grid-cols-[1fr_auto_1fr] items-center mt-[10px]">
            <Logo/> 
            <Menu/>
            <div className='justify-items-center'><WatsApp buttonText='Напишите нам!'/></div>
        </header>
        <header className='lg:hidden w-full flex justify-between h-[60px] items-center my-3 mx-5'>
            <div className='justefy-self-start'><MenuDrawer/></div>
            <div className='justefy-self-center'><Logo/></div>
            <div className='justefy-self-end'><WatsApp/></div>
        </header>
    </>
}