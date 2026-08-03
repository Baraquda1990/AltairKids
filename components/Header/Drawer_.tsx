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
        <Button variant="outline">
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

        <div className="flex flex-col gap-4 p-4">
          <a href="/">Главная</a>
          <a href="/catalog">Каталог</a>
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