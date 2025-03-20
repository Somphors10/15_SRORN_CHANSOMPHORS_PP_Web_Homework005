"use client";
import { useRouter } from 'next/navigation';

export default function CategoryFilter({ categories, selectedCategory }) {
    const router = useRouter();

    const handleCategoryChange = (e) => {
        const categoryId = e.target.value;
        console.log("Selected Category ID:", categoryId);
        router.push(`?category=${categoryId}`);
    };

    return (
        <select
            id="pricingType"
            name="pricingType"
            className="scrollbar-hide overflow-y-scroll w-full h-10 border-2 focus:border-gray-400 text-black rounded-lg px-2 md:px-3 py-0 md:py-1 tracking-wider hover:bg-[var(--braybg)]"
            defaultValue={selectedCategory || ""}
            onChange={handleCategoryChange}
        >
            <option value="" disabled>Select a Category</option>
            {categories?.map((category) => (
                <option key={category?.id} value={category.id}>
                    {category.book_cate_name}
                </option>
            ))}
        </select>
    );
}