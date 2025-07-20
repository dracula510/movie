import React, {useState, useEffect} from 'react';
import classes from './Sidenav.module.css';
import Home from '../Asset/Home.png';
import Short from '../Asset/Short.png';
import Sub from '../Asset/Sup.png';
import Acount from '../Asset/Account.png';
import Download from '../Asset/Download.png';
import Add from '../Asset/Plus.png'





const Sidenav = () => {
    return(
        <div className={classes.Body}>
            <nav className={classes.nav}>
                <div className={classes.Icons}>
                    <img src={Home} />
                    <p>Home</p>
                </div>

                <div className={classes.Icons}>
                    <img src={Short} />
                    <p>Short</p>
                </div>

                <div className={classes.Icon}>
                    <img src={Sub} />
                    <p>Subscriptions</p>
                </div>

                <div className={classes.Added}>
                    <img src={Add} />
                </div>

                <div className={classes.Icons}>
                    <img src={Acount} />
                    <p>You</p>
                </div>

                <div className={classes.Icons}>
                    <img src={Download} />
                    <p>Download</p>
                </div>
            </nav>

            <nav className={`${classes.nav} ${classes.Nav}`}>
                <div className={classes.Icons}>
                    <img src={Home} />
                    <p>Home</p>
                </div>

                <div className={classes.Icons}>
                    <img src={Short} />
                    <p>Short</p>
                </div>

                <div className={classes.Added}>
                    <img src={Add} />
                </div>

                <div className={classes.Icon}>
                    <img src={Sub} />
                    <p>Subscriptions</p>
                </div>

                <div className={classes.Icons}>
                    <img src={Acount} />
                    <p>You</p>
                </div>
            </nav>
        </div>
    );
}

export default Sidenav;