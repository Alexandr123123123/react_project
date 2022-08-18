import axios from 'axios';

export function myFetch(activePage, bodyFetch, catchFetch) {
    const URL =
        'https://api.github.com/search/repositories?q=stars:>1+language:' +
        activePage +
        '&sort=stars&order=desc&type=Repositories';

    axios.get(window.encodeURI(URL)).then(bodyFetch).catch(catchFetch);
}
