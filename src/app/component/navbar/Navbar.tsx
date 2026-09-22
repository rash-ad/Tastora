"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ImSpoonKnife } from "react-icons/im";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <main>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950 text-white shadow-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-2xl shadow-lg shadow-orange-500/30">
              <ImSpoonKnife />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight">
                Flavor<span className="text-orange-400">Haven</span>
              </h1>
              <p className="text-xs text-slate-400">
                Good Food • Better Mood
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="relative font-semibold text-orange-400 transition hover:text-orange-300"
            >
              Home
              <span className="absolute -bottom-7 left-0 h-1 w-full rounded-full bg-orange-400" />
            </Link>

            <Link
              href="/menu"
              className="font-semibold text-slate-300 transition hover:text-orange-400"
            >
              Menu
            </Link>

            <Link
              href="/about"
              className="font-semibold text-slate-300 transition hover:text-orange-400"
            >
              About
            </Link>

            <Link
              href="/gallery"
              className="font-semibold text-slate-300 transition hover:text-orange-400"
            >
              Gallery
            </Link>

            <Link
              href="/reviews"
              className="font-semibold text-slate-300 transition hover:text-orange-400"
            >
              Reviews
            </Link>

            <Link
              href="/contact"
              className="font-semibold text-slate-300 transition hover:text-orange-400"
            >
              Contact
            </Link>
          </div>


          <div className="hidden items-center gap-5 md:flex">


            <button

              className="text-slate-300 transition hover:text-orange-400"
            >
              <CiSearch size={24} />

            </button>

            {/* Cart */}
            <button
              aria-label="Shopping cart"
              className="relative text-slate-300 transition hover:text-orange-400"
            >
              <IoCartOutline />
              <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">
                5
              </span>
            </button>

            {/* Reservation */}
            <Link
              href="/reservation"
              className="rounded-full bg-linear-to-r from-orange-400 to-amber-500 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:from-orange-300 hover:to-amber-400"
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border cursor-pointer border-white/10 p-2 text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <RxCross2 /> : <IoMdMenu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">

              <Link href="/" className="text-orange-400">
                Home
              </Link>

              <Link
                href="/menu"
                className="text-slate-300 hover:text-orange-400"
              >
                Menu
              </Link>

              <Link
                href="/about"
                className="text-slate-300 hover:text-orange-400"
              >
                About
              </Link>

              <Link
                href="/gallery"
                className="text-slate-300 hover:text-orange-400"
              >
                Gallery
              </Link>

              <Link
                href="/reviews"
                className="text-slate-300 hover:text-orange-400"
              >
                Reviews
              </Link>

              <Link
                href="/contact"
                className="text-slate-300 hover:text-orange-400"
              >
                Contact
              </Link>

              <Link
                href="/reservation"
                className="mt-2 rounded-full bg-orange-500 px-5 py-3 text-center font-bold text-slate-950"
              >
                Book a Table
              </Link>

            </div>
          </div>
        )}

      </nav>
      <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"></img>
        </div>                
    </div>
</section>

    </main>
  );
}