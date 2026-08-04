import { Button } from "@/components/ui/button"
import Image from "next/image"
import {Manrope} from 'next/font/google'
import left from '@/public/left.png'
import heart from "@/public/heart.png"
import _4t from "@/public/4t.png"
import right from "@/public/right.png"
import children from "@/public/children.jpg"
import boy from "@/public/boy.png"
import girl from "@/public/girl.png"
import _new from "@/public/new.png"
import sale from "@/public/sale.png"
import l1 from "@/public/l1.jpg"
import l2 from "@/public/l2.jpg"
import l3 from "@/public/l3.jpg"
import l4 from "@/public/l4.jpg"
import { products } from '@/components/Catalog/Products'
import CatalogItem from '@/components/Catalog/CatalogItem'
import Link from "next/link"

const manrope=Manrope({subsets:['cyrillic']})
export default function Page() {
  return (
    <main className="min-h-screen bg-white pb-[60px] lg:pb-0 relative">

      <div className="absolute left-0 top-[50px] z-10">
        <Image src={left} alt=""/>
      </div>
      <div className="absolute left-[36%] top-[80px] z-10">
        <Image src={heart} alt=""/>
      </div>
      <div className="absolute left-[20px] top-[400px] z-10">
        <Image src={_4t} alt=""/>
      </div>
      <div className="absolute right-0 top-[80px] z-10">
        <Image src={right} alt=""/>
      </div>

      <div className={`${manrope.className} max-w-[1260px] mx-auto px-[15px] lg:px-[30px] pt-[10px] lg:pt-[20px] pb-[10px] lg:pb-[20px] relative z-40`}>
        <section className="grid md:grid-cols-[auto_1fr] items-center pt-[20px]">
          <div className="flex flex-col space-y-5 items-left px-5 md:px-0 ">
            <p className="px-5 py-2 bg-[#fcefed] rounded-2xl font-semibold text-sm w-[200px] md:w-auto">
              Новая коллекция <br className="md:hidden"/> Лето-Осень 2026
            </p>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#222222] pb-[15px]">
              Стильная одежда <br/> для ваших детей
            </h1>
            <p className="text-sm sm:text-base/8">
              Качественный материалы, удобные фасоны <br/> и  яркие эмоции каждый день
            </p>
            <Link href="/catalog/" className="w-full md:w-[180px] py-[8px] md:py-[15px] text-white text-xl bg-[#ffc42e] hover:bg-[#fab609] rounded-xl transition duration-200 text-center font-semibold">К каталогу {'>'}</Link>
          </div>

          <div>
            <Image src={children} alt=""/>
          </div>
        </section>


        <section className="mt-1 grid grid-cols-1 md:grid-cols-4 gap-3">

          <div className="flex rounded-xl bg-[#e4f0eb] h-[235px] px-2 py-0 overflow-hidden justify-evenly">
            <div className="flex flex-col ps-3 mt-[30px]">
              <h3 className="text-base font-semibold">
                Мальчикам
              </h3>
              <p className="text-xs mt-2">
                Стиль и комфорт на каждый день
              </p>
              <Link href="/boys/" className="text-xs bg-[#baded2] mt-5 text-[#142125] hover:bg-[#63a58f] text-center py-[10px] rounded-2xl">Смотреть</Link>
            </div>
            <Image src={boy} alt="Boy"/>
          </div>

          <div className="flex rounded-xl bg-[#fbe4e3] h-[235px] px-2 overflow-hidden justify-evenly">
            <div className="flex flex-col ps-3 mt-[30px]">
              <h3 className="text-base font-semibold">
                Девочкам
              </h3>
              <p className="text-xs mt-2">
                Нежные образы для маленьких модниц
              </p>
              <Link href="/girls/" className="text-xs bg-[#f4c9c3] mt-5 text-[#534c4c] hover:bg-[#d18a81] text-center py-[10px] rounded-2xl">Смотреть</Link>
            </div>
            <Image src={girl} alt="Girl"/>
          </div>

          <div className="flex rounded-xl bg-[#fdeed7] h-[235px] px-2 overflow-hidden justify-evenly">
            <div className="flex flex-col ps-3 mt-[30px]">
              <h3 className="text-base font-semibold">
                Новинки
              </h3>
              <p className="text-xs mt-2">
                Самые свежие поступления
              </p>
              <Link href="/new/" className="text-xs bg-[#fadeb1] mt-5 text-[#393835] hover:bg-[#d0a96b] text-center py-[10px] rounded-2xl">Смотреть</Link>
            </div>
            <Image src={_new} alt="New"/>
          </div>

          <div className="flex rounded-xl bg-[#e6f1f6] h-[235px] px-2 overflow-hidden justify-evenly">
            <div className="flex flex-col ps-3 mt-[30px]">
              <h3 className="text-base font-semibold">
                Распродажа
              </h3>
              <p className="text-xs mt-2">
                Любимые вещи по выгодным ценам
              </p>
              <Link href="/catalog/" className="text-xs bg-[#c2e1ed] mt-5 text-[#25333a] hover:bg-[#74bcd9] text-center py-[10px] rounded-2xl">Смотреть</Link>
            </div>
            <Image src={sale} alt="Sale"/>
          </div>

        </section>


        <section className="mt-5 grid grid-cols-1 md:grid-cols-4 rounded-2xl shadow-sm px-5 py-5">

          <div className="flex items-center">
            <Image className="mx-5" src={l1} alt="Натуральные материалы"/>
            <div>
              <h4 className="text-sm font-semibold">Натуральные материалы</h4>
              <p className="text-xs text-[#949798] mt-1">Только качественные ткани</p>
            </div>
          </div>
          
          <div className="bg-gray-200 md:hidden w-full h-[2px] my-3"></div>

          <div className="flex items-center">
            <div className="invisible bg-gray-200 md:visible h-full w-[2px]"></div>
            <Image className="mx-5" src={l2} alt="Безопасность"/>
            <div>
              <h4 className="text-sm font-semibold">Безопасность</h4>
              <p className="text-xs text-[#949798] mt-1">Гипоаллергенные материалы</p>
            </div>
          </div>

          <div className="bg-gray-200 md:hidden w-full h-[2px] my-3"></div>

          <div className="flex items-center">
            <div className="invisible bg-gray-200 md:visible h-full w-[2px]"></div>
            <Image className="mx-5" src={l3} alt="Доставка"/>
            <div>
              <h4 className="text-sm font-semibold">Быстрая доставка</h4>
              <p className="text-xs text-[#949798] mt-1">Доставка по городу Актобе</p>
            </div>
          </div>
          
          <div className="bg-gray-200 md:hidden w-full h-[2px] my-3"></div>
          
          <div className="flex items-center">
            <div className="invisible bg-gray-200 md:visible h-full w-[2px]"></div>
            <Image className="mx-5" src={l4} alt="Забота о детях"/>
            <div>
              <h4 className="text-sm font-semibold">С заботой о детях</h4>
              <p className="text-xs text-[#949798] mt-1">Удобство и стиль для малышей</p>
            </div>
          </div>
        
        </section>

        <section className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {products.map((product)=>(
                <CatalogItem key={product.key} product={product}/>
            ))}
        </section>
      </div>
    </main>
  )
}
