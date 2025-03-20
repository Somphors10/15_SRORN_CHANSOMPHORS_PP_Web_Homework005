import CardCartoons from '@/components/CardCartoons';
import SearchBarComponent from '@/components/SearchBarComponent';
import { getAllCartoonGenres, getAllCartoons } from '@/services/cartoonService';
import React from 'react';

export default async function Page() {
    let cartoonsList = [];
    let cartoonGenres = [];
    const response = await getAllCartoons();
    cartoonsList = response.payload;
    console.log("Cartoon List", cartoonsList);

    const responseCate = await getAllCartoonGenres();
    cartoonGenres = responseCate.payload;
    console.log("Cartoon genres", cartoonGenres);

    return (
        <div className='min-h-screen  bg-[var(--graybg)]'>

            {/* Main Content Container */}
            <div className="rounded-2xl p-10 bg-white shadow-lg">
                {/* Header */}
                <header className="mb-8 flex flex-col md:flex-row justify-between items-center">
                    {/* Title */}
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-[var(--steel)] p-3 bg-[var(--graybg)] rounded-2xl text-lg font-semibold text-center md:text-left">
                            All School Cartoons
                        </h1>
                    </div>

                    {/* Filter Dropdown */}
                    <div >
                        <form className='flex flex-col md:flex-row gap-3 '>
                            <select
                                id="pricingType"
                                name="pricingType"
                                className="scrollbar-hide overflow-y-scroll w-full h-10 border-2 border-gray-200 focus:border-gray-400 text-black rounded-lg px-3 py-1 hover:bg-[var(--graybg)] transition-colors"
                            >
                                <option value="" disabled defaultValue>Select a Category</option>
                                {cartoonGenres?.map((genre) => (
                                    <option key={genre?.id} value={genre.cartoon_genre}>
                                        {genre.cartoon_genre}
                                    </option>
                                ))}
                            </select>
                        </form>
                    </div>
                </header>

                {/* Divider */}
                <hr className="mt-2 mb-6 border-gray-200" />

                {/* Cartoon Grid */}
                <div className="grid grid-cols-3 gap-6">
                    {cartoonsList?.map((cartoon) => (
                        <div key={cartoon?.id}>
                            <CardCartoons cartoon={cartoon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}