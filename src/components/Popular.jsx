import React from 'react';
import scss from '../style/Popular.module.scss';
import { useSearchParams } from 'react-router-dom';
import Content from './Content';
import { myFetch } from '../utils/fetch';
import { style } from '../utils/style';
import { useNavigate } from 'react-router-dom';

const Popular = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activePage, setActivePage] = React.useState('all');
    const [resource, setResource] = React.useState([]);
    const [activeFetch, setActiveFetch] = React.useState(true);
    const [message, setMessage] = React.useState(false);
    const [positionMessage, setPositionMessage] = React.useState('');
    const [activeButton, setActiveButton] = React.useState('');
    let navigation = useNavigate();

    const language = 'language';
    const pages = ['all', 'javascript', 'ruby', 'java', 'css', 'python'];

    React.useEffect(() => {
        const abc = searchParams.get(language);

        if (pages.includes(abc)) {
            setActivePage(abc);
        } else {
            setSearchParams(language + '=all');
        }
    }, []);

    React.useEffect(() => {
        myFetch(activePage, bodyFetch, catchFetch);
    }, [activePage]);

    function bodyFetch(res) {
        setTimeout(() => {
            setResource(res.data.items);
            setActiveFetch(false);
            setMessage(false);
            setPositionMessage('');
        }, 5000);
    }

    function catchFetch() {
        navigation('/notfound');
    }
    function onClickButtonMenu(value) {
        return function onClickButtonMenu() {
            if (!activeFetch) {
                setActivePage(value);
                setSearchParams(language + '=' + value);
                setActiveFetch(true);
            } else {
                if (positionMessage === '') {
                    setPositionMessage(value);
                }
                setMessage(true);
            }
        };
    }

    const styleButton = style(scss, activePage, activeButton, activeFetch);

    return (
        <div className={scss.popular}>
            <div className={scss.menu}>
                <ul>
                    {pages.map((value, index) => (
                        <li
                            key={index}
                            onClick={onClickButtonMenu(value)}
                            onMouseOver={() => setActiveButton(value)}
                            onMouseOut={() => setActiveButton(null)}
                            className={styleButton(value)}
                        >
                            {value}
                            {!(message && value === positionMessage) || (
                                <div className={scss.message}>Wait</div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <Content activeFetch={activeFetch} resource={resource} />
        </div>
    );
};

export default Popular;
