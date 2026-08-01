import CatalogItem from '@/components/Catalog/CatalogItem'
import {Manrope} from 'next/font/google'
const manrope=Manrope({subsets:['cyrillic']})
import { products } from '@/components/Catalog/Products'

export default function Page(){
    return <main className="min-h-screen bg-white pb-[60px] lg:pb-0 relative z-10">
                <div className={`${manrope.className} max-w-[1260px] mx-auto px-[15px] lg:px-[30px] pt-[10px] lg:pt-[20px] pb-[10px] lg:pb-[20px]`}>
                    <section className="mt-1 grid grid-cols-1 lg:grid-cols-4 gap-3">
                        {products.filter((product)=>product.tags.includes("new")).map((product)=>(
                            <CatalogItem key={product.key} product={product}/>
                        ))}
                    </section>
                </div>
    </main>
}