import React, {useState, useEffect} from 'react'
import classes from './Menu.module.css'
import Logo from '../Asset/Logo.png';
import Mic from '../Asset/Mic.png';
import Menus from '../Asset/Menu.png';
import Search from '../Asset/Search.png';
import Plus from '../Asset/Plus.png';
import Noti from '../Asset/Noti.png';
import Acount from '../Asset/Account.png';
import Back from '../Asset/Back.png'



const Menu = () => {
    const [open, setOpen] = useState(true);
    const [note, setNote] = useState(false);
    const [title, setTitle] = useState(true);
    const [btnFun, setBtnFun] = useState(true);





    const openMe = () => {
        setNote(true);
        setTitle(false);
        setBtnFun(false);
    }

    const closeMe = () => {
        setNote(false);
        setTitle(true);
        setBtnFun(true);
    }


    return(
        <div className={classes.Body}>
            <div className={classes.Container}>

                <nav className={classes.nav}>
                    <div className={classes.Logo}>
                        <div className={classes.Menu}>
                         <img src={Menus} />
                        </div>

                        <span className={classes.Span}><img src={Logo}/> <h2>YouTube</h2></span>

                        {title === true && (
                         <span className={classes.span}><img src={Logo}/> <h2>YouTube</h2></span>
                        )}
                    </div>

                    <div className={classes.FunBtn}>
                        <div className={classes.Search}>
                            <input type='search' placeholder='Search'/>
                            <button><img src={Search} /></button>
                        </div>

                        <div className={classes.Mic}>
                            <img src={Mic} />
                        </div>
                    </div>

                    {note === true && (
                    <div className={`${classes.FunBtns} ${classes.SecFunBtn}`}>
                        <div className={classes.Back} onClick={closeMe}>
                            <img src={Back} />
                        </div>

                        <div className={classes.Funbtn}>
                        <div className={classes.Search}>
                            <input type='search' placeholder='Search'/>
                           <button><img src={Search}/></button>
                        </div>

                        <div className={classes.Mic}>
                            <img src={Mic} />
                        </div>
                        </div>

                    </div>
                    )}

                    <div className={classes.Profile}>
                        <div className={classes.Create}>
                            <img src={Plus} />
                            <p>Creat</p>
                        </div>

                        <div className={classes.Noti}>
                            <img src={Noti}/>
                        </div>

                        <div className={classes.User}>
                            <img src={Acount} />
                        </div>
                    </div>
                    
                    {btnFun === true && (
                    <div className={`${classes.Profile} ${classes.Second}`}>
                        <div className={classes.Create}>
                            <img src={Menus} />
                        </div>

                        <div className={classes.Noti}>
                            <img src={Noti}/>
                        </div>

                        
                        <div className={classes.User} onClick={openMe}>
                            <img src={Search} />
                        </div>
                    </div>
                    )}
                </nav>
            </div>
        </div>
    );
}

export default Menu
