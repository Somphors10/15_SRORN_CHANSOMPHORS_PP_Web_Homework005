import { getBookById } from '@/services/bookService';
import { BookOpenText, BookText, ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default async function ViewBookDetail({ params }) {
    const { bookId } = params; // Destructure bookId from params
    const response = await getBookById(bookId); // Fetch book data
    const book = response.payload; // Access the payload property

    console.log("Book : ", book);

    return (
        <div className='min-h-screen pt-10 p-10  bg-[var(--graybg)]'>
            {/* Breadcrumb Navigation */}
            <div className='flex gap-x-6 mb-8'>
                <div className='flex gap-x-2 items-center text-[var(--steel)]'>
                    <Home className='w-5 h-5' />
                    <Link href={'/'}>Home</Link>
                </div>
                <div className='w-5 h-5 text-[var(--steel)]'> <ChevronRight /> </div>
                <div className='flex gap-x-2 items-center text-[var(--steel)]'>
                    <BookText className='w-5 h-5' />
                    <Link href={'/allBook'}>Book categories</Link>
                </div>
                <div className='w-5 h-5 text-[var(--steel)]'> <ChevronRight /> </div>
                <div className='text-red-600 flex gap-x-2 items-center'>
                    <BookOpenText className='h-5 w-5' />
                    {book.book_title}
                </div>
            </div>

            {/* Book Details Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 relative mt-28">
                {/* Book Image */}
                <div className="absolute -top-30 left-230">
                    <img
                        src={book?.image}
                        alt={book?.book_title}
                        className="w-60 h-80 object-cover rounded-3xl shadow-lg"
                    />
                </div>

                {/* Book Content */}
                <div className="mt-32"> {/* Adjusted margin to account for the image */}
                    {/* Book Title */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {book?.book_title}
                    </h2>

                    {/* Book Author */}
                    <p className="text-lg text-gray-700 mb-4">
                        <span className="font-semibold">By:</span> <span className='text-[var(--steel)]'>{book?.book_author}</span>
                    </p>

                    {/* Book Description */}
                    <p className="text-gray-600 leading-relaxed">
                        {book?.description}
                    </p>
                </div>
            </div>
        </div>
    );
}