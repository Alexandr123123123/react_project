import React from 'react';
import scss from '../style/Home.module.scss';
import { Link } from 'react-router-dom';

const Home = ({setActivePage}) => {
    return (
        <div className={scss.abc}>
            <Link to={'/battle'}>
                <button onClick={() => setActivePage('/battle')} className={scss.button}>go to game</button>
            </Link>
        </div>
    );
};

export default Home;
