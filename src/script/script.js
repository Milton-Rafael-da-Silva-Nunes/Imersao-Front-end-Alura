const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `https://teste2-blond.vercel.app/artists?name_like=${searchTerm}`;

    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResultado(result));
}

function displayResultado(result) {
    hidePlayList();
    const artistaNome = document.getElementById('artist-name');
    const artistaImg = document.getElementById('artist-img');

    result.forEach(element => {
        artistaNome.innerText = element.name;
        artistaImg.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

function hidePlayList() {
    resultPlaylist.classList.add('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return;
    }

    requestApi(searchTerm);
});