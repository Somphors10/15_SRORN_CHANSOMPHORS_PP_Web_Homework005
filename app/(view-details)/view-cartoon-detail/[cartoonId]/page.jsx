import { getCartoonById } from '@/services/cartoonService';
import { BookOpenText, BookText, ChevronRight, Eye, Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default async function ViewCartoonDetail({ params }) {
    const { cartoonId } = params; // Destructure cartoonId from params
    const response = await getCartoonById(cartoonId); // Fetch cartoon data
    const cartoon = response.payload; // Access the payload property

    console.log("Cartoon : ", cartoon);

    // Function to extract the year from the published_year string
    const extractYear = (dateString) => {
        if (!dateString) return 'Unknown';
        return dateString.split('-')[0];
    };

    return (
        <div className='min-h-screen p-8 bg-[var(--graybg)]'>
            <div className='flex gap-x-6 mb-8'>
                <div className='flex gap-x-2 items-center text-[var(--steel)]'>
                    <Home className='w-5 h-5' />
                    <Link href={'/'}>Home</Link>
                </div>
                <div className='w-5 h-5 text-[var(--steel)]'> <ChevronRight /> </div>
                <div className='flex gap-x-2 items-center text-[var(--steel)]'>
                    <BookText className='w-5 h-5' />
                    <Link href={'/oldSchoolCarton'}>Old School Cartoon</Link>
                </div>
                <div className='w-5 h-5 text-[var(--steel)]'> <ChevronRight /> </div>
                <div className='text-red-600 flex gap-x-2 items-center'>
                    <BookOpenText className='h-5 w-5' />
                    {cartoon.ct_title}
                </div>
            </div>

            {/* Cartoon Details Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 relative mt-20">
                {/* Cartoon Image */}
                <div className="absolute -top-25 left-230">
                    <img
                        src={cartoon?.image}
                        alt={cartoon?.ct_title}
                        className="w-60 h-80 object-cover  rounded-3xl shadow-lg"
                    />
                </div>

                {/* Cartoon Content */}
                <div className="mt-30">
                    {/* Cartoon Title */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {cartoon?.ct_title}
                    </h2>

                    {/* Cartoon Creator */}
                    <p className="text-lg text-gray-700 mb-4">
                        <span className="font-semibold">By:</span> <span className='text-[var(--steel)]'>{cartoon?.ct_creator}</span>
                    </p>

                    {/* View Count and Year */}
                    <div className="flex gap-x-5 items-center mb-4">
                        <div className="text-[var(--steel)] flex gap-x-1 items-center">
                            <Eye className="w-5 h-5" />
                            <p>{cartoon?.view_count}</p>
                        </div>
                        <div className="text-[var(--steel)]">|</div>
                        <p className="text-[var(--steel)]">{extractYear(cartoon?.published_year)}</p>
                    </div>

                    {/* Cartoon Description */}
                    <p className="text-gray-600 leading-relaxed">
                        {cartoon?.ct_description}
                    </p>
                </div>
            </div>
        </div>
    );
}