import { html } from '../library/lib.js';
import { submitHandler } from '../utility/submitHandler.js';
import * as userService from '../services/userService.js';


const registerTemplate = (onSubmit) => html`
<section id="registerPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Register</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

            <button type="submit" class="register">Register</button>

            <p class="field">
                <span>If you already have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;

export const registerView = (context) => {
    const onSubmit = (data, e) => {
        const [email, password,] = data;

        try {
            if (!email || !password) {
                throw new Error('All fields are require!');
            }

            userService.register({ email, password });
            e.target.reset();
            context.page.redirect('/');

        } catch (err) {
            alert(err.message);
        }
    }

    context.render(registerTemplate(submitHandler(onSubmit)));
}