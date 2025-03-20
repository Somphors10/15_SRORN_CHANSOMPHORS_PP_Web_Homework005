// 'use server'
// get all books
export const getAllBooks = async (query) => {
    console.log("queryGetAll",query)
    const response = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/book${query ? `?search=${encodeURIComponent(query)}` : ""}`);
    const data = await response.json();
    console.log("responseAll", data)
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
// export const searchBook = async (query) => {
//     const searchBook = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book`);
//     const response = searchBook.json();
//     return response;
// }
