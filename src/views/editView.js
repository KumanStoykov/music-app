import { html } from '../library/lib.js';
import { submitHandler } from '../utility/submitHandler.js';
import * as musicServices from '../services/musicService.js';



const editTemplate = (onSubmit, song) => html`
<section class="editPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Edit Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" .value=${song.name}>

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" .value=${song.imgUrl}>

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" .value=${song.price}>

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" .value=${song.releaseDate}>

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" .value=${song.artist}>

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" .value=${song.genre}>

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" rows="10" cols="10"
                    .value=${song.description}></textarea>

                <button class="edit-album" type="submit">Edit Album</button>
            </div>
        </fieldset>
    </form>
</section>`;

export const editView = async (context) => {

    const id = context.params.id;
    const currentSong = await musicServices.getOneSong(id);

    const onSubmit = async (data, e) => {
        const [name, imgUrl, price, releaseDate, artist, genre, description] = data;

        try {
            if (data.some(x => x == '')) {
                throw new Error('All fields are require!');
            }
            await musicServices.editMusic(id, { name, imgUrl, price, releaseDate, artist, genre, description })

            e.target.reset();
            context.page.redirect(`/details/${id}`);

        } catch (err) {
            alert(err.message);
        }
    }

    context.render(editTemplate(submitHandler(onSubmit), currentSong));
}