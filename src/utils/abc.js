import axios from 'axios';

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const params = `?client_id=${id}?client_secret=${sec}`;

export const getProfile = (userName) => {
    return axios
        .get('https://api.github.com/users/' + userName + params)
        .then((user) => user.data)
};

export const getRepos = (userName) => {
    return axios
        .get('https://api.github.com/users/' + userName + '/repos' + params)
        .then((user) => user.data);
};

function getStarCount(repos) {
    return repos.reduce((a, b) => a + b.stargazers_count, 0);
}

export function getStarCount1(userName) {
    console.log(getStarCount(getRepos(userName)));
}

export function getUser(userName, setUser, setButton) {
    axios
        .all([getProfile(userName), getRepos(userName)])
        .then(([user, repos]) => {
            // console.log(user, 'abc');
            setUser({ user: user, star: getStarCount(repos) });
            setButton(false)
        })
        .catch(() => {setUser(null);
        setButton(false)});
}







export function getUser1(userName, setUser) {
    axios
        .all([getProfile(userName), getRepos(userName)])
        .then(([user, repos]) => {
            // console.log(user, 'abc');
            setUser({ user: user, star: getStarCount(repos) });
            // setButton(false)
        })
        .catch(() => {setUser(null);
        // setButton(false)
    }
        );
}
