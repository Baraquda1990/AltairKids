import { Button } from "../ui/button"
import wtsp from "@/public/wtsp.png"
import Image from "next/image"
type propsType={
    buttonText?:string
}
export default function WatsApp(props:propsType){
    return <Button variant={"outline"} className="min-h-[50px] bg-[#fff] rounded-xl border-2xl border-emerald-600 flex justify-evenly">
        <p className="text-lg text-[#1b7913]">{props.buttonText}</p> 
        <Image src={wtsp} alt="WatsApp" className="max-h-[30px] w-auto"/>
    </Button>
}