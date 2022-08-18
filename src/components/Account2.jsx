import React from 'react';
import scss from '../style/Account2.module.scss';

const Account2 = ({ value }) => {
    return (
        <div className={scss.abc}>
            <div className={scss.title}>{value.abc}</div>
            <img src={value.user.avatar_url} alt="" />
            <div className={scss.name}>{value.user.name}</div>
            <div className={scss.star}>start: {value.star}</div>
        </div>
    );
};

export default Account2;
