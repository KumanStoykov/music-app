import { page } from './library/lib.js';

import { userMiddleware } from './middlewares/userMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { createView } from './views/createView.js';
import { catalogView } from './views/catalogView.js';
import { editView } from './views/editView.js';
import { detailView } from './views/detailsView.js';
import { searchView } from './views/searchView.js';
import { logoutView } from './views/logoutView.js';


page(userMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/catalog', catalogView);
page('/edit/:id', editView);
page('/details/:id', detailView);
page('/search', searchView);
page('/logout', logoutView);

page.start();