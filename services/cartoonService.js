// get all cartons
export const getAllCartoons = async (query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon${query ? `?search=${encodeURIComponent(query)}` : ""}`);
    const data = await response.json();
    return data; 
};

// get cartoon y ID
export const getCartoonById = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon/${id}`);
    const data = await response.json();
    return data;
}

// get all catoon genres
export const getAllCartoonGenres = async () => {
    const responsecate = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon_genre`);
    const data = await responsecate.json();
    return data;
}