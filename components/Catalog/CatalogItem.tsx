import Image from "next/image"
import Link from "next/link"
import { productType } from "./Products"
type props={
    product:productType
}
export default function CatalogItem({product}:props){
    return <Link href={`/detail/${product.linkHref}`}>
        <article className="bg-[#faf7f5] p-5 flex flex-col transition transform hover:scale-105 hover:cursor-pointer rounded-2xl">
        <Image src={product.img} alt={product.imgAlt} className="w-full"/>
        <h5 className="text-lg mt-5 hover:text-orange-500">{product.name}</h5>
        <p className="text-base font-bold mt-1">{product.price}</p>
        </article>
    </Link>

}