import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../redux/auth/authOperation";

import { selectUser } from '../../redux/auth/authSelectors';

import { UserWrapp, P, Btn } from "./UserMenuStyled";

const UserMenu = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <UserWrapp>
            <P>Welcom, {user.email}</P>
            <Btn type="button" onClick={() => dispatch(logout())}>Logout</Btn>
        </UserWrapp>
    )
}

export default UserMenu;