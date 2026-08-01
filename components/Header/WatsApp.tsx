import { Button } from "../ui/button"
import wtsp from "@/public/wtsp.png"
import Image from "next/image"
export default function WatsApp(){
    return <Button variant={"outline"} className="min-w-[200px] min-h-[50px] bg-[#fff] rounded-xl border-2xl border-emerald-600 flex justify-evenly">
        <p className="text-lg text-[#1b7913]">Напишите нам</p> 
        <Image src={wtsp} alt="WatsApp" className="max-h-[30px] w-auto"/>
    </Button>
}