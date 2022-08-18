import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import scss from '../style/Navigation.module.scss';
import { useParams } from 'react-router-dom';

const Navigation = ({activePage, setActivePage}) => {
    // const [activePage, setActivePage] = React.useState(
    //     window.location.pathname,
    // );

    const pages = [
        { namePage: 'Home', addressPage: '/' },
        { namePage: 'Battle', addressPage: '/battle' },
        { namePage: 'Popular', addressPage: '/popular' },
    ];

    return (
        <div className={scss.abc}>
            <ul>
                {pages.map((value, index) => (
                    <li key={index}>
                        <Link
                            to={value.addressPage}
                            onClick={() => {
                                setActivePage(value.addressPage);
                            }}
                            className={
                                value.addressPage === activePage
                                    ? [scss.abc1, scss.abc1Active].join(' ')
                                    : scss.abc1
                            }
                        >
                            {value.namePage}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;
