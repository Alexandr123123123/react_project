import React from 'react';
import scss from '../style/Account1.module.scss';






const Account1 = (props) => {
    return (
        <div className={scss.account}>
            <div className={scss.image}>
                <img
                    src={props.user.user.avatar_url}
                    alt=""
                />
            </div>
            
            <button onClick={() => props.setUser(false)} className={scss.button}>reset</button>
        </div>
    );
};

export default Account1;
