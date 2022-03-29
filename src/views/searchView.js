import { html, nothing } from '../library/lib.js';
import { cardMusicTemplate } from './template/cardTemplate.js';
import * as musicServices from '../services/musicService.js';


const searchTemplate = (isLogged, songs, onClick, isClicked) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click=${onClick} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    <div class="search-result">
        
       ${isClicked 
        ? searchSongTemplate(isLogged, songs)
        : nothing
        }

    </div>
</section>`;

const searchSongTemplate = (isLogged, songs) => html `
    ${songs.length > 0
    ? songs.map(cardMusicTemplate.bind(null, isLogged))
    : html `<p class="no-result">No result.</p>`
    }`;

export const searchView = (context) => {
    const isLogged = Boolean(context.user);
    let isClicked = false;
    
    const onClick = async () => {
                
        const inputSearch = document.querySelector('#search-input');

        isClicked = true;

        const songs = await musicServices.searchMusic(inputSearch.value);
        
        context.render(searchTemplate(isLogged, songs, onClick, isClicked));
    }

    context.render(searchTemplate(isLogged, [], onClick, isClicked));
}