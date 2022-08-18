import React from 'react';
import scss from '../style/Content.module.scss';
import MyLoader from './MyLoader';

const Content = (props) => {
    const myLoader = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

    return (
        <div>
            {props.activeFetch ? (
                myLoader.map((value, index) => <MyLoader key={index} />)
            ) : (
                <div className={scss.content}>
                    {props.resource.map((value, index) => (
                        <div key={index} className={scss.resource}>
                            <div>#{index + 1}</div>
                            <div className={scss.image}>
                                <img
                                    className={scss.abcabc}
                                    src={value.owner.avatar_url}
                                    alt=""
                                />
                            </div>
                            <a href={value.html_url}>{value.owner.login}</a>
                            <div>{value.stargazers_count}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Content;
