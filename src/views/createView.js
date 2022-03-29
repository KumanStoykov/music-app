import { html } from '../library/lib.js';
import { submitHandler } from '../utility/submitHandler.js';
import * as musicService from '../services/musicService.js';



const createTemplate = (onSubmit) => html`
<section class="createPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Add Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" placeholder="Album name">

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url">

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" placeholder="Price">

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date">

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" placeholder="Artist">

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" placeholder="Genre">

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" placeholder="Description"></textarea>

                <button class="add-album" type="submit">Add New Album</button>
            </div>
        </fieldset>
    </form>
</section>`;

export const createView = (context) => {


    const onSubmit = (data, e) => {
        const [name, imgUrl, price, releaseDate, artist, genre, description] = data;

        try {
            if (data.some(x => x == '')) {
                throw new Error('All fields are require!');
            }
            musicService.createMusic({ name, imgUrl, price, releaseDate, artist, genre, description })
            .then(() => {
                e.target.reset();
                context.page.redirect('/catalog');
            })

        } catch (err) {
            alert(err.message);
        }
    }
    context.render(createTemplate(submitHandler(onSubmit)));
}