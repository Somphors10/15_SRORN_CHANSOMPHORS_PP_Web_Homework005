import { Eye } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function CardCartoons({ cartoon }) {
    // Function to extract the year from the published_year string
    const extractYear = (dateString) => {
        if (!dateString) return 'Unknown';
        return dateString.split('-')[0];
    };

    return (
        <div>
            {/* Image Container */}
            <Link href={`/view-cartoon-detail/${cartoon?.id}`}>
                <div className="rounded-3xl border border-gray-200 overflow-hidden w-65 h-75 flex-shrink-0 mt-5">

                    <img
                        src={cartoon?.image}
                        alt={cartoon?.ct_title}
                        className="w-65 h-80 object-cover"
                    />
                </div>

            </Link>

            {/* Title */}
            <h1 className="text-xl font-bold text-gray-900 mb-2">
                {cartoon?.ct_title}
            </h1>

            {/* Year view-count */}
            <div className='flex gap-x-5'>
                <div className='text-[var(--steel)] flex gap-x-1 items-center'>
                    <Eye className='w-5 h-5 ' />
                    <p >{cartoon?.view_count}</p>
                </div>
                <div className='text-[var(--steel)]'>|</div>
                <p className=" text-[var(--steel)]">{extractYear(cartoon?.published_year)}</p>
            </div>
        </div>
    );
}