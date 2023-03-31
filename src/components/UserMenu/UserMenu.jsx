import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../redux/auth/authOperation";

import { selectUser } from '../../redux/auth/authSelectors';

const UserMenu = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Welcom, {user.email}</p>
            <button type="button" onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default UserMenu;