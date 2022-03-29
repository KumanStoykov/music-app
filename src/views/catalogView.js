import { html } from '../library/lib.js';
import * as musicServices from '../services/musicService.js';
import { cardMusicTemplate } from './template/cardTemplate.js';


const catalogTemplate = (musics, isLogged) => html`
<section id="catalogPage">
    <h1>All Albums</h1>

    ${musics.length > 0
        ? musics.map(cardMusicTemplate.bind(null, isLogged))
        : html`<p>No Albums in Catalog!</p>`
    }
</section>`;



export const catalogView = (context) => {

    musicServices.getCatalogMusic()
        .then(musics => {

            context.render(catalogTemplate(musics, Boolean(context.user)));
        })
}