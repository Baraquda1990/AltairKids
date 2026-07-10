import {Fredoka,Nunito} from 'next/font/google'
const fredoka=Fredoka({subsets:['latin']})
const nunito=Nunito({subsets:['cyrillic']})
export default function Logo(){
    return <div className='flex flex-col items-center'>
            <h1 className={`${fredoka.className} text-4xl font-semibold`}>
                <span className='text-[#fcc160]'>Altair</span>
                <span className='text-[#8ac4d8]'>Kids</span>
            </h1>
            <p className={`${nunito.className} text-[#5f6162] text-sm`}>
                Стильная одежда для детей
            </p>
        </div>
}