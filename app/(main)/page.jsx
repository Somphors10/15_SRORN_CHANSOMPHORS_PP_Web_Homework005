import React from 'react';
import SearchBarComponent from "@/components/SearchBarComponent";
import Link from "next/link"; // Import Next.js Link for navigation
import { Tag } from 'lucide-react';

export default function Page() {
  return (
    <div className="h-120 bg-[var(--graybg)] overflow-hidden"> {/* Full height, no scrolling */}
      <div className="flex flex-col justify-center rounded-2xl bg-white p-8 mx-auto w-full max-w-screen-2xl h-full"> {/* Full height */}
        {/* Header */}
        <header className="w-full">
          <h1 className="w-30 text-[var(--steel)] p-3 bg-[var(--graybg)] rounded-2xl text-lg font-semibold text-center md:text-left">
            Homepages
          </h1>
          <hr className="mt-2" />
        </header>

        {/* Main Content */}
        <main className="flex flex-col md:flex-row gap-25 p-8 w-full h-full justify-center items-center">
          {/* Left Column - Book */}
          <div className="relative flex flex-col items-center space-y-4 w-full md:w-1/4 h-full">
            <Link href="/allBook" passHref>
              <div className="relative group w-full h-full">
                {/* Image */}
                <img
                  src="/book.png"
                  alt="Book"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl transition-opacity group-hover:opacity-75"
                />
                {/* Black Overlay on Hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 rounded-3xl transition-opacity"></div>
                {/* Text on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-3xl font-bold text-center">
                    View all <br /> Variable <br /> Books
                  </span>
                </div>
                {/* Absolute Label for Book */}
                <span className="absolute top-2 left-2 text-[var(--steel)] bg-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  Book
                </span>
              </div>
            </Link>
          </div>

          {/* Right Column - Carton */}
          <div className="relative flex flex-col items-center space-y-4 w-full md:w-1/4 h-full"> {/* Full height */}
            <Link href="/oldSchoolCarton" passHref>
              <div className="relative group w-full h-full">
                {/* Image */}
                <img
                  src="/carton.png"
                  alt="Carton"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl transition-opacity group-hover:opacity-75"
                />
                {/* Black Overlay on Hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 rounded-3xl transition-opacity"></div>
                {/* Text on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-3xl font-bold text-center">
                    View all <br /> Variable <br /> Cartons
                  </span>
                </div>
                {/* Absolute Label for Carton */}
                <span className="absolute top-2 left-2 text-[var(--steel)] bg-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  Carton
                </span>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}