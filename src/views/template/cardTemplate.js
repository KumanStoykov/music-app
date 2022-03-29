import { html, nothing } from '../../library/lib.js';


export const cardMusicTemplate = (isLogged, song) => html`
<div class="card-box">
    <img src=${song.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${song.name}</p>
            <p class="artist">Artist: ${song.artist}</p>
            <p class="genre">Genre: ${song.genre}</p>
            <p class="price">Price: ${song.price}</p>
            <p class="date">Release Date: ${song.releaseDate}</p>
        </div>
        <div class="btn-group">
        ${isLogged
        ? html`<a href="/details/${song._id}" id="details">Details</a>`
        : nothing
        }
        </div>
    </div>
</div>`;