import Link from 'next/link';
import React from 'react';

export default function CardComponent({ book }) {

    return (
        <div className="flex bg-[var(--graybg)] rounded-3xl p-8 max-w-lg shadow-md m-3 relative mt-20 h-50"> {/* Fixed height for the card */}
            {/* Book Image and Button Container */}
            <div className="absolute -top-20 left-8 flex flex-col items-center">
                {/* Book Image Container (Rounded with Border) */}
                <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-xl  w-40 h-50 flex-shrink-0"> {/* Fixed width and height for the image */}
                    <img
                        src={book?.image}
                        alt={book?.book_title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Read Full Article Button (Light Blue with Rounded Corners) */}
                <Link href={`/view-book-detail/${book?.id}`}>
                    <button className="bg-blue-100 text-blue-800 mt-4 text-sm font-semibold px-5 py-2 rounded-full shadow-sm hover:bg-blue-200">
                        READ FULL ARTICLE
                    </button>
                </Link>
            </div>

            {/* Content Section */}
            <div className="ml-48 flex-1"> {/* Adjusted margin to account for the image */}
                {/* Title */}
                <h1 className="text-xl font-bold text-gray-900 mb-2">
                    {book?.book_title}
                </h1>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                    {book?.description}
                </p>
            </div>
        </div>
    );
}