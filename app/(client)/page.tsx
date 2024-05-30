"use client";
import HomeNavButton from "@/common/components/atom/HomeNavButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-[100vw] h-[100vh]">
      <div className=" flex items-end justify-end w-full h-full">
        <div className=" flex flex-col items-start gap-y-6 p-10">
          <div className=" flex flex-col gap-2 items-start ">
            <HomeNavButton href={'./projects'}>Projects</HomeNavButton>
            <HomeNavButton href={'./about'}>About Me</HomeNavButton>
            <HomeNavButton href={'./articles'}>Articles</HomeNavButton>
          </div>
          <div className=" flex gap-3 px-5 justify-end w-full">
          <p>{'-->'}</p><Link href={'./about'}>   Nicklas Båkind-Øverjordet</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
