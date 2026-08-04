import {Manrope} from 'next/font/google'
const manrope=Manrope({subsets:['cyrillic']})
import Image from 'next/image'
import children from "@/public/children.jpg"
import l5 from "@/public/l5.jpg"
import l6 from "@/public/l6.jpg"
import l3 from "@/public/l3.jpg"
import l4 from "@/public/l4.jpg"
export default function Page(){
    return <main className="min-h-screen bg-white pb-[60px] lg:pb-0 relative z-10">
                <div className={`${manrope.className} max-w-[1260px] mx-auto px-[15px] lg:px-[30px] pt-[10px] lg:pt-[20px] pb-[10px] lg:pb-[20px]`}>
                    <section className="mt-1 grid grid-cols-1 md:grid-cols-2 items-center gap-3">
                        <div className='z-10 space-y-8 ms-5 lg:ms-0'>
                            <h1 className='font-semibold text-2xl'>О нас</h1>
                            <p className='text-[#4d5355]'>
                                AltairKids -  это магазин стильной и качественной одежды для детей от 0 до 14 лет. 
                                Мы выбираем только лучшие материалы, чтобы вашим детям было комфортно каждый день. 
                            </p>

                            <section className="mt-5 grid grid-cols-1 lg:grid-cols-4 rounded-2xl shadow-sm px-5 py-5 bg-white">
                            <div className="flex lg:flex-col space-y-3 px-3">
                                <Image className="mx-5" height={30} src={l3} alt="Качество"/>
                                <div>
                                <h4 className="text-sm font-semibold">Качество</h4>
                                <p className="text-xs text-[#949798] mt-1 leading-[20px]">Мы тщательно выбираем ткани и контролируем качество каждого изделия</p>
                                </div>
                            </div>

                            <div className="bg-gray-200 lg:hidden w-full h-[2px] my-3"></div>

                            <div className="flex lg:flex-col lg:border-l-2 border-gray-200 space-y-3 px-3">
                                <Image className="mx-5" height={30} src={l5} alt="Стиль"/>
                                <div>
                                <h4 className="text-sm font-semibold">Стиль</h4>
                                <p className="text-xs text-[#949798] mt-1 leading-[20px]">Современные модели для детей, которые хотят выглядить стильно</p>
                                </div>
                            </div>

                            <div className="bg-gray-200 lg:hidden w-full h-[2px] my-3"></div>

                            <div className="flex lg:flex-col lg:border-l-2 border-gray-200 space-y-3 px-3">
                                <Image className="mx-5" height={30} src={l4} alt="Забота"/>
                                <div>
                                <h4 className="text-sm font-semibold">Забота</h4>
                                <p className="text-xs text-[#949798] mt-1 leading-[20px]">Мы создаем одежду с любовью и заботой о ваших детях</p>
                                </div>
                            </div>

                            <div className="bg-gray-200 lg:hidden w-full h-[2px] my-3"></div>

                            <div className="flex lg:flex-col lg:border-l-2 border-gray-200 space-y-3 px-3">
                                <Image className="mx-5" height={30} src={l6} alt="Доступность"/>
                                <div>
                                <h4 className="text-sm font-semibold">Доступность</h4>
                                <p className="text-xs text-[#949798] mt-1 leading-[20px]">Качественная одежда по честным и приятным ценам</p>
                                </div>
                            </div>
                            </section>
                        </div>
                        <div>
                            <Image src={children} alt="" className='md:relative md:-left-35  md:min-w-2xl lg:min-w-4xl z-0'/>
                        </div>
                    </section>
                </div>
    </main>
}