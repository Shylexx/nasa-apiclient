

const SEARCH_ENDPOINT = "https://images-api.nasa.gov/search"


async function SearchNasa (searchTerm, error) {
    const url = SEARCH_ENDPOINT + `?q=${encodeURIComponent(searchTerm)}` + "&media_type=image";
    const response = await
    fetch(url)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return(error);
    });

    return response.json();
}

export default SearchNasa