import { render } from '../library/lib.js';

const root = document.querySelector('#main-content');

export const renderMiddleware = (context, next) => {

    context.render = (content) =>  render(content, root);
    next();
}