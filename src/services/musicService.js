import * as requester from './requester.js';


const endpoints = {
    catalog: '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    create: '/data/albums',
    geOneSong: '/data/albums/',
    delete: '/data/albums/',
    edit: '/data/albums/',
    search: (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`
   
}

export const getCatalogMusic = () => requester.get(endpoints.catalog);

export const createMusic = (data) => requester.post(endpoints.create, data);

export const getOneSong = (id) => requester.get(endpoints.geOneSong + id);

export const deletesMusic = (id) => requester.del(endpoints.delete + id);

export const editMusic = (id, data) => requester.put(endpoints.edit + id, data);

 export const searchMusic = (query) => requester.get(endpoints.search(query));
// export const searchMusic = (search) => {
//     const query = encodeURIComponent(`name LIKE "${search}"`);
    

//     return requester.get(`/data/albums/?where${query}`);
// };
