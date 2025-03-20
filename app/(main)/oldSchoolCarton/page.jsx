import CardCartoons from '@/components/CardCartoons';
import FilterCartoon from '@/components/FilterCartoon';
import { getAllCartoonGenres, getAllCartoons } from '@/services/cartoonService';

export default async function Page({ searchParams }) {
    const { query, genere } = searchParams;

    // Fetch all cartoons
    const cartoonList = await getAllCartoons(query);
    // console.log("cartoon list: ", cartoonList);


    // Fetch all cartoon genres
    const responses = await getAllCartoonGenres();
    const cartoonGenres = responses.payload;

    // Filter cartoons on the selected genre
    const filteredCartoons = genere
        ? cartoonList.payload.filter((cartoon) => cartoon.ct_genre_id === parseInt(genere))
        : cartoonList.payload;

    return (
        <div className='bg-[var(--graybg)]'>
            {/* Main Content Container */}
            <div className="rounded-2xl p-10 bg-white shadow-lg">
                {/* Header */}
                <header className="mb-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-[var(--steel)] p-3 bg-[var(--graybg)] rounded-2xl text-lg font-semibold text-center md:text-left">
                            All School Cartoons
                        </h1>
                    </div>

                    {/* Filter Dropdown */}
                    <div>
                        <form className="flex flex-col md:flex-row gap-3 scrollbar-hide overflow-y-scroll">
                            <FilterCartoon
                                generes={cartoonGenres}
                                selectedGeneres={genere}
                            />
                        </form>
                    </div>
                </header>

                {/* Divider */}
                <hr className="mt-2 mb-6 border-gray-200" />

                {/* Cartoon Grid */}
                <div className="grid grid-cols-3 gap-6">
                    {filteredCartoons?.map((cartoon) => (
                        <div key={cartoon?.id}>
                            <CardCartoons cartoon={cartoon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}