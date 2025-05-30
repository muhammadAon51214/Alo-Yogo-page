const searchArea = document.querySelector('.search-container-wrapper');
const searchIcon = document.querySelector('.search___icon___menu');
const closeIcon = document.querySelector('.close____icon');

searchIcon.addEventListener("click", () => {
    searchArea.classList.toggle('active');
});

closeIcon.addEventListener("click", () => {
    searchArea.classList.remove('active');
});
