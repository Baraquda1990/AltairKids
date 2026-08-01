import Link from "next/link"
import {Manrope} from 'next/font/google'
const manrope=Manrope({subsets:['cyrillic']})
export default function Menu(){
  type itemsMenuType={name:string,href:string}
  let itemsMenu:itemsMenuType[]=[
    {name:'Главная',href:"/"},
    {name:'Каталог',href:"/catalog/"},
    {name:'Мальчикам',href:"/boys/"},
    {name:'Девочкам',href:"/girls/"},
    {name:'Новинки',href:"/new/"},
    {name:'О нас',href:"/about/"},
    {name:'Контакты',href:"/contacts/"}]
  return <nav className={`${manrope.className} flex justify-between w-full font-bold text-[#222222] text-base`}>
        {itemsMenu.map((item)=>(
          <Link className="transition duration-300 hover:text-[#FFB648] px-2" href={item.href}>{item.name}</Link>
        ))}
    </nav>
}