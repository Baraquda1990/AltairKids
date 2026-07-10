import Link from "next/link"
import {Manrope} from 'next/font/google'
const manrope=Manrope({subsets:['cyrillic']})
export default function Menu(){
  type itemsMenuType={name:string,href:string}
  let itemsMenu:itemsMenuType[]=[
    {name:'Главная',href:""},
    {name:'Каталог',href:""},
    {name:'Мальчикам',href:""},
    {name:'Девочкам',href:""},
    {name:'Новинки',href:""},
    {name:'О нас',href:""},
    {name:'Контакты',href:""}]
  return <nav className={`${manrope.className} flex justify-between w-full font-bold text-[#222222] text-base`}>
        {itemsMenu.map((item)=>(
          <Link className="transition duration-300 hover:text-[#FFB648]" href={item.href}>{item.name}</Link>
        ))}
    </nav>
}