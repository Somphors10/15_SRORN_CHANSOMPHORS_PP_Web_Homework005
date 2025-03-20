"use client";
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchBarComponent() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

        console.log("Search Query:", searchQuery);

        // Update the URL with the search query
        router.push(`/?query=${encodeURIComponent(searchQuery)}`);
    };

    return (
        <div className="mb-6">
            <div className="relative">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search anything you want to"
                        className="w-full pl-20 pr-4 py-2 border bg-white rounded-4xl shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-6 top-2.5 h-5 text-gray-400" />
                </form>
            </div>
        </div>
    );
}