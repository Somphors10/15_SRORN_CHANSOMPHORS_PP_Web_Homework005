"use client";
import { useRouter } from 'next/navigation';

export default function FilterCartoon({ generes, selectedGeneres }) {
  const router = useRouter();



  const handleGeneresChange = (e) => {
    const generesId = e.target.value;
    router.push(`?genere=${generesId}`);
  };

  return (
    <select
      id="pricingType"
      name="pricingType"
      className="scrollbar-hide overflow-y-scroll w-full h-10 border-2 focus:border-gray-400 text-black rounded-lg px-2 md:px-3 py-0 md:py-1 tracking-wider hover:bg-[var(--braybg)]"
      defaultValue={selectedGeneres || ""}
      onChange={handleGeneresChange}
    >
      <option value="" disabled>Select a Category</option>
      {generes?.map((genere) => (
        <option key={genere?.id} value={genere.id}>
          {genere.cartoon_genre}
        </option>
      ))}
    </select>
  );
}