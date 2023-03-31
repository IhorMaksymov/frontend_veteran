import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Box from '../Box/Box';
import AppBar from "../AppBar/AppBar";

const Layout = () => {
    return (
        <Box
            pt={5}
            pb={5}
            pl={5}
            pr={5}
            as='main'
            height='100vh'
            width='1200px'
            margin='auto'
        >
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </Box>
    )
}

export default Layout;