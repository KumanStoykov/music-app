import { html } from '../library/lib.js';
import { submitHandler } from '../utility/submitHandler.js';
import * as userService from '../services/userService.js';


const loginTemplate = (onSubmit) => html`
<section id="loginPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Login</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <button type="submit" class="login">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;

export const loginView = (context) => {

    const onSubmit = (data, e) => {
        const [email, password] = data;

        try {
            if (!email || !password) {
                throw new Error('All fields are require!');
            }
            userService.login({ email, password })
            .then(() => {
                e.target.reset();
                context.page.redirect('/');
            })

        } catch (err) {
            alert(err.message);
        }
    }

    context.render(loginTemplate(submitHandler(onSubmit)));
}