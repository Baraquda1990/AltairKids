"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import icon_menu from "@/public/icon_menu.png"
import Image from "next/image";
export default function MenuDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline" className="min-h-[50px] rounded-xl border-amber-300 hover:bg-amber-200">
          <Image src={icon_menu} alt="Открыть меню" width={25}/>
        </Button>
      </DrawerTrigger>

      <DrawerContent className="w-[320px] h-full left-0 top-0 rounded-none">
        <DrawerHeader>
          <DrawerTitle>Меню</DrawerTitle>
          <DrawerDescription>
            Выберите нужный раздел
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 p-4 [&>*]:justefy-items-center 
                        [&>*]:py-5 [&>*]:px-3 [&>*]:border-1 [&>*]:border-amber-300 
                        [&>*]:rounded-xl [&>*:hover]:bg-amber-200 
                        [&>*]:text-lg [&>*]:text-center [&>*]:text-amber-900">
          <a href="/">Главная</a>
          <a href="/catalog">Каталог</a>
          <a href="/boys">Мальчикам</a>
          <a href="/girls">Девочкам</a>
          <a href="/new">Новинки</a>
          <a href="/about">О нас</a>
          <a href="/contacts">Контакты</a>
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">
              Закрыть
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}