import React from 'react';
import scss from '../style/Battle.module.scss';
import Account from './Account';
import axios from 'axios';
import Account1 from './Account1';
import Account2 from './Account2';
import { useSearchParams } from 'react-router-dom';
import { getUser1 } from '../utils/abc';






const Battle = () => {
    const firstplayer = 'firstplayer';
    const secondplayer = 'secondplayer';
    const [user1, setUser1] = React.useState(false);
    const [user2, setUser2] = React.useState(false);
    const [button, setButton] = React.useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const buttonA = ['battle', 'play again']

    function player() {
        if (user1 || user2) {
            if (user1 && user2) {
                return `${firstplayer}=${user1.user.login}&${secondplayer}=${user2.user.login}`;
            } else {
                if (user1) {
                    return `${firstplayer}=${user1.user.login}`;
                }
                return `${secondplayer}=${user2.user.login}`;
            }
        } else {
            return ``;
        }
    }




    React.useEffect(() => {

        const abc1 =  searchParams.get(firstplayer)
        const abc2 =  searchParams.get(secondplayer)

        if (abc1 !== null) {
            getUser1(abc1, setUser1)
        }
        
        if (abc2 !== null) {
            getUser1(abc2, setUser2)
        }
        
        
    }, [])

    React.useEffect(() => {
        setSearchParams(player());
    }, [user1, user2]);

    function userAbc() {
        if (user1.star > user2.star) {
            return [
                { ...user1, abc: 'abc1' },
                { ...user2, abc: 'abc2' },
            ];
        }
        return [
            { ...user2, abc: 'abc1' },
            { ...user1, abc: 'abc2' },
        ];
    }




    
    
    
    function button1() {
        setButton(!button)
        if (button) {
            setUser1(false)
            setUser2(false)
        } 
    }
    
    console.log(user1);
    return (
        <div>
            <div className={scss.battle}>
                <Account
                    numberPlayer={'first player'}
                    user={user1}
                    setUser={setUser1}
                >
                    {button || <Account1 user={user1} setUser={setUser1} />}
                </Account>
                <Account
                    numberPlayer={'second player'}
                    user={user2}
                    setUser={setUser2}
                >
                    {button || <Account1 user={user2} setUser={setUser2} />}
                </Account>
            </div>
            {!button || (
                <div className={scss.abc}>
                    {userAbc().map((value, index) => (
                        <Account2 key={index} value={value} />
                    ))}
                </div>
            )}
            {!(user1 && user2) || (
                <div className={scss.button1}>
                    <button
                        onClick={() => button1()}
                        className={scss.button}
                    >
                        {!button ? buttonA[0] : buttonA[1]}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Battle;
