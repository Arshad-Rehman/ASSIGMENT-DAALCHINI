import { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import { CartContexts } from '../Cart';
const HeaderCartButton = props=>{
    const {totalItem,totalAmount} = useContext(CartContexts);
return <div>



<button className={classes.button} onClick={props.onClick}>


<h4>{totalItem} item(s)</h4>
<br/>
    <h3>
    <span>Total ${totalAmount}</span>
    </h3>
    
</button>


</div>
}

export default HeaderCartButton;