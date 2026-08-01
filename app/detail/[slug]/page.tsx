import Image from "next/image"
import { products } from "@/components/Catalog/Products"
import {Manrope} from 'next/font/google'
const manrope=Manrope({subsets:['cyrillic']})
import ButtonWatsApp from "@/components/Catalog/ButtonWatsApp"

export default async function detail({params}:{params:Promise<{slug:string}>}){
    const slug=(await params).slug
    let product=products.find(item=>item.linkHref===slug)
    if (!product) {
        return <div>Товар не найден</div>
        }
    return <main className="min-h-screen bg-white pb-[60px] lg:pb-0 relative z-10">
                <div className={`${manrope.className} max-w-[1260px] mx-auto px-[15px] lg:px-[30px] pt-[10px] lg:pt-[20px] pb-[10px] lg:pb-[20px]`}>

                <section className="mt-1 grid grid-cols-1 lg:grid-cols-2 gap-3">
                        <div className="space-y-3">
                            <Image src={product?.img} alt={product?.imgAlt} className="w-full h-auto rounded-2xl"/>
                        </div>
                        <div className="flex flex-col ms-5 mt-5">
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <h1 className={`font-semibold text-2xl xl:text-3xl text-gray-900 leading-tight tracking-tight`}>
                                    {product.name}
                                </h1>
                            </div>
                            <div className="flex items-center justify-between mt-[16px]">
                                <span className="font-jost font-semibold text-[32px] text-black leading-[36px]">
                                    {product.price}
                                </span>
                            </div>
                            <div className="min-w-[300px] my-5">
                                <ButtonWatsApp/>
                            </div>
                            <div className="mt-8 space-y-6">
                                <div className="bg-white rounded-xl overflow-hidden">
                                    <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                                        <div className="w-1 h-5 bg-[#aeca73] rounded-full"></div>
                                        <h3 className="font-semibold text-base text-gray-900">Описание</h3>
                                    </div>
                                    <div className="px-5 pb-5">
                                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line break-words">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        </main>
}