
// get all books
export const getAllBooks = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book`);
    const data = await response.json();
    return data; 
};



// get book by ID
export const getBookById = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book/${id}`);
    const data = await response.json();
    return data;
}



// get all book categories
export const getAllBookCatagories = async () => {
    const responses =await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book_category`);
    const data = await responses.json();
    return data;
}



// Search books by name
export const searchBookByName = async (query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book?search=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data;
};
