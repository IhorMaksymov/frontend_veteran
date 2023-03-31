import { useSelector } from 'react-redux';

import { Header } from './AppBarStyled';

import UserMenu from "../UserMenu";
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation';

import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <Header>
            <h2>gks veteran</h2>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    )
}

export default AppBar;