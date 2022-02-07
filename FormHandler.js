import SearchNasa from "./SearchNasa.js";

async function HandleSearch(event) {
    event.preventDefault();

    const searchForm = event.currentTarget;

    const formData = new FormData(searchForm);

    const searchTerm = formData.get('searchTerm');

    const response = await SearchNasa(searchTerm);

    document.getElementById("photo").src =response.collection.items[0].links[0].href;

    console.log(response);
    // console.log(response.collection.items[0]);
};

const searchForm = document.getElementById("searchForm");
const imageOutput = document.getElementById("photo");

searchForm.addEventListener("submit", HandleSearch);

export default HandleSearch;