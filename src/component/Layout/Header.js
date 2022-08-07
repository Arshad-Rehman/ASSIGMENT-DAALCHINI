import { Fragment } from "react";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import LoginCartButton from "./LoginCartButton";
const Header = props =>{
    return <Fragment>
        <header className={classes.header}>
           
           <HeaderCartButton onClick={props.onShowCart}/>
           <LoginCartButton onClicks={props.onShowsCart}/>
        </header>
        {/* <div>
        <i class="fa-solid fa-arrow-up"></i>
        </div> */}
    </Fragment>
}
export default Header;