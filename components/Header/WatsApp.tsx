import { Button } from "../ui/button"
import wtsp from "@/public/wtsp.png"
import Image from "next/image"
type propsType={
    buttonText?:string
}
export default function WatsApp(props:propsType){

    return <Button asChild variant={"outline"} className="min-h-[50px] bg-[#fff] rounded-xl border-2 border-emerald-300 flex justify-evenly hover:bg-emerald-200">
        <a href="https://wa.me/77029722969?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%B5." target="_blank">
        {props.buttonText && (<p className="text-lg text-[#1b7913]">{props.buttonText}</p>)}
        <Image src={wtsp} alt="WatsApp" className="max-h-[30px] w-auto"/>
        </a>
    </Button>
}