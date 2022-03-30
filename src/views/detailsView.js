import { html, nothing } from '../library/lib.js';
import * as musicServices from '../services/musicService.js';


const detailTemplate = (song, isOwner, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${song.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${song.name}</h1>
                <h3>Artist: ${song.artist}</h3>
                <h4>Genre: ${song.genre}</h4>
                <h4>Price: ${song.price}</h4>
                <h4>Date: ${song.releaseDate}</h4>
                <p>Description: ${song.description}</p>
            </div>

            ${isOwner
        ? html`<div class="actionBtn">
                <a href="/edit/${song._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
            </div>`
        : nothing
    }

        </div>
    </div>
</section>`;

export const detailView = async (context) => {
    const id = context.params.id;

    const song = await musicServices.getOneSong(id);

    const isOwner = context.user.id == song._ownerId;

    const onDelete = async () => {
        const con = confirm(`Are you sure you want to delete ${song.name}!`);

        if (con) {
            await musicServices.deletesMusic(id);
            context.page.redirect('/catalog');
        }
    }

    context.render(detailTemplate(song, isOwner, onDelete));
}