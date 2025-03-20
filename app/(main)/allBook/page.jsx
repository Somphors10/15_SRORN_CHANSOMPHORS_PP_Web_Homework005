// app/page.js
import CardComponent from '@/components/CardComponent';
import { getAllBookCatagories, getAllBooks } from '@/services/bookService';
import CategoryFilter from '@/components/CategoryFilter'; // Import the Client Component

export default async function Page({ searchParams }) {
    const { query, category } = searchParams;

    // Fetch all books
    const bookList = await getAllBooks(query);
    // console.log("Book List", bookList);


    // Fetch all book categories
    const responses = await getAllBookCatagories();
    const bookCategory = responses.payload;

    //filter book
    const filteredBooks = category
        ? bookList.payload.filter((book) => book.book_cate_id === parseInt(category))
        : bookList.payload;

    return (
        <div>
            <div className="flex flex-col justify-center bg-white rounded-2xl p-10">
                {/* Header */}
                <div>
                    <header className="mb-3 flex justify-between">
                        <div>
                            <h1 className="text-[var(--steel)] p-3 bg-[var(--graybg)] rounded-2xl text-lg font-semibold text-center md:text-left">
                                All Books
                            </h1>
                        </div>
                        {/* Filter */}
                        <div>
                            <form className="flex flex-col md:flex-row gap-3 scrollbar-hide overflow-y-scroll">
                                <CategoryFilter
                                    categories={bookCategory}
                                    selectedCategory={category}
                                />
                            </form>
                        </div>
                    </header>
                    <hr className="mt-2 mb-6" />
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-2">
                    {filteredBooks.map((book) => (
                        <div key={book?.id} className="mt-2">
                            <CardComponent book={book} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}