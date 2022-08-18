import React from 'react';
import scss from '../style/Account.module.scss';
import axios from 'axios';
import { getUser } from '../utils/abc';
import { useSearchParams } from 'react-router-dom';

const Account = ({ numberPlayer, user, setUser, children }) => {
    const [userName, setUserName] = React.useState('');
    const [button, setButton] = React.useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    // console.log(setUser, 'abcsetUser');

    // React.useEffect(() => {

    //         getUser(userName, setUser);
    //         setButton(false);

    // }, [button]);
    // `&${numberPlayer}=${userName}`

    console.log(searchParams.get('players'));
    function players() {
        if (
            searchParams.get('fitst') === '' &&
            searchParams.get('players') === ''
        ) {
            setSearchParams(`?firstplayer`);
        }
    }
    const abc = user === null;
    return (
        <>
            {!!user || (
                <div className={scss.myInput}>
                    <div className={scss.numberPlayer}>{numberPlayer}</div>
                    <div className={scss.input}>
                        <input
                            value={userName}
                            onChange={(event) =>
                                setUserName(event.target.value)
                            }
                            placeholder="user"
                        ></input>
                        {button ? (
                            <div className={scss.message1}></div>
                        ) : (
                            <div className={scss.message1}>
                                {!abc || (
                                    <div className={scss.message}>
                                        user is not found
                                    </div>
                                )}
                            </div>
                        )}

                        <button
                            onClick={() => {
                                getUser(userName, setUser, setButton);
                                setButton(true);
                            }}
                        >
                            submit
                        </button>
                    </div>
                </div>
            )}
            {!user || <div className={scss.myInput}>{children}</div>}
        </>
    );
};

export default Account;
