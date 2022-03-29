import { html } from '../library/lib.js';

const loggedIn = () => html`
<li><a href="/create">Create Album</a></li>
<li><a href="/logout">Logout</a></li>`;

const guest = () => html`
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>`;


const navigationTemplate = (isLogged) => html`
<nav>
    <img src="./images/headphones.png">
    <a href="/">Home</a>
    <ul>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/search">Search</a></li>

        ${isLogged
        ?loggedIn()
        :guest()
        }

    </ul>
</nav>`;

export const navigationView = (context) => {
    const isLogged = Boolean(context.user);
    
    return navigationTemplate(isLogged);
}