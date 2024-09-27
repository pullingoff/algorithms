import { useState } from "react";
import Link from "next/link";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center fixed w-full h-[52px] top-0 shadow-sm bg-white">
      <Link
        href="/"
        className="text-blue-700 text-lg font-semibold cursor-pointer px-[18px] py-0"
      >
        eatmap
      </Link>
      <div className="hidden sm:flex gap-3 items-center px-[18px] hover:text-blue-300">
        <Link href="/stores">맛집 목록</Link>
        <Link href="/stores/new">맛집 등록</Link>
        <Link href="/users/likes">찜한 가게</Link>
        <Link href="/users/login">로그인</Link>
      </div>
      {/* mobile button*/}
      <div
        role="presentation"
        className="sm:hidden cursor-pointer text-2xl mr-4"
        onClick={() => setIsOpen((val) => !val)}
      >
        {isOpen ? <AiOutlineClose /> : <BiMenu />}
      </div>
      {/*    mobile navbar */}
      {isOpen ? (
        <div className="fixed w-full text-white h-screen top-[52px] bg-blue-800">
          <Link href="/stores">맛집 목록</Link>
          <Link href="/stores/new">맛집 등록</Link>
          <Link href="/users/likes">찜한 가게</Link>
          <Link href="/users/login">로그인</Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
