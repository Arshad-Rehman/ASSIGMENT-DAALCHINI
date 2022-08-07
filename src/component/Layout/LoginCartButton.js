import classes from './LoginCartButton.module.css';
const LoginCartButton=(props)=>{
return(
    <div>
        <button className={classes.button} onClick={props.onClicks}>

<h1>Login</h1>
</button>

    </div>
)
}
export default LoginCartButton;