"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [menuIsOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="flex items-center h-16 px-4 border-b bg-background text-foreground">
        <nav className="flex items-center gap-6">
          <button onClick={() => setIsMenuOpen(!menuIsOpen)}>
            <MenuIcon className="block md:hidden w-6 h-6" />
          </button>
          <div className="flex items-center gap-4">
            <Link href="/" className="hidden md:block" prefetch={false}>
              Home
            </Link>
            <Link href="/chats" className="hidden md:block" prefetch={false}>
              Chats
            </Link>
            <Link
              href="https://www.github.com/abuj4m4l/"
              className="hidden md:block"
              prefetch={false}
            >
              Github
            </Link>
          </div>
        </nav>
        <div className="flex items-center ml-auto gap-4">
          <Link href={"/signup"}>
            <Button className="w-16 md:w-32">Signup</Button>
          </Link>
          <ThemeSwitcher>
            <SunIcon className="w-6 h-6" />
          </ThemeSwitcher>
        </div>
      </header>
      {menuIsOpen === true ? <Menu /> : <></>}
    </>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function Menu() {
  return (
    <aside className="bg-background border-r w-64 p-4 flex flex-col gap-4 fixed z-50 h-screen">
      <nav className="flex flex-col gap-2">
        <Link
          href="#"
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
          prefetch={false}
        >
          <HomeIcon className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
          prefetch={false}
        >
          <MessageSquareIcon className="w-5 h-5" />
          <span>Chats</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
          prefetch={false}
        >
          <GithubIcon className="w-5 h-5" />
          <span>Github</span>
        </Link>
      </nav>
    </aside>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MessageSquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}
