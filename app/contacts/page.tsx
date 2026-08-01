import CatalogItem from '@/components/Catalog/CatalogItem'
import {Manrope} from 'next/font/google'
const manrope=Manrope({subsets:['cyrillic']})
import { products } from '@/components/Catalog/Products'
import c1 from "@/public/c1.jpg"
import c2 from "@/public/c2.jpg"
import c4 from "@/public/c4.jpg"
import insta from "@/public/insta.png"
import wtsp from "@/public/wtsp.png"
import Image from 'next/image'
import Link from 'next/link'

export default function Page(){
    return <main className="min-h-screen bg-white pb-[60px] lg:pb-0 relative z-10">
                <div className={`${manrope.className} max-w-[1260px] mx-auto px-[15px] lg:px-[30px] pt-[10px] lg:pt-[20px] pb-[10px] lg:pb-[20px]`}>
                    <section className="mt-1 grid grid-cols-[auto_auto] gap-1">
                        <div className='space-y-3'>
                            <h1 className='font-semibold text-2xl'>
                                Контакты
                            </h1>
                            <p className='text-[#4d5355]'>Мы всегда рады помочь!</p>
                            <div className='grid grid-cols-[auto_1fr] mt-8 gap-y-8'>
                                <Image src={c1} alt="Местоположение" width={30} height={30} className='mr-3'/>
                                <div className='flex flex-col'>
                                    <h3 className='font-semibold'>Адрес</h3>
                                    <p className='text-[#4d5355]'>г.Актобе, ТД Жанар, 43 бутик</p>
                                </div>
                                <Image src={c2} alt="Телефон" width={30} height={30} className='mr-3'/>
                                <div className='flex flex-col'>
                                    <h3 className='font-semibold'>Телефон</h3>
                                    <p className='text-[#4d5355]'>+7 702 972 29 69</p>
                                </div>
                                <Image src={c4} alt="Социальные сети" width={30} height={30} className='mr-3'/>
                                <div className='flex flex-col'>
                                    <h3 className='font-semibold'>Социальные сети</h3>
                                    <div className='flex mt-3 space-x-3'>
                                        <Link href="" className='px-3 py-2 rounded-xl bg-[#fcd4e3] hover:bg-[#f799bc] transition duration-200 transform hover:-scale-x-100'><Image width={25} src={insta} alt="Инстаграмм"/></Link>
                                        <Link href="" className='px-3 py-2 rounded-xl bg-[#d8f5d2] hover:bg-[#b4f2a7] transition duration-200 transform hover:-scale-x-100'><Image width={25} src={wtsp} alt="WatsApp"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <iframe className='rounded-2xl' src="https://yandex.ru/map-widget/v1/?um=constructor%3A7d03a32884d6676b2b348211809fbe38be2172e76c50ef4c68ec42b5f3a3e610&amp;source=constructor" width="800" height="500" frameBorder="0"></iframe>
                        </div>
                    </section>
                </div>
    </main>
}