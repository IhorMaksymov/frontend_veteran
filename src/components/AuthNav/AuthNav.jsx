import { NavRegister, NavLonIn } from "./AuthNavStyled";

const AuthNav = () => {
    return (
        <div>
            <NavRegister to='/signup'>Register</NavRegister>
            <NavLonIn to='/login'>Log In</NavLonIn>
        </div>
    )
}

export default AuthNav;