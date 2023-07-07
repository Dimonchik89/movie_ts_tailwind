import { Box, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import HeaderMobileMenuList from './HeaderMobileMenuList';

const HeaderMobileMenu = () => {
    const [showDrawer, setShowDrawer] = useState<boolean>(false)

    const toggleDrawer = (open: boolean) => {        
        setShowDrawer(open)
    }

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="primary"
                aria-label="menu"
                sx={{ mr: 2 }}
                className="block xl:hidden"
                onClick={() => toggleDrawer(!showDrawer)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor={"left"}
                open={showDrawer}
                onClose={() => toggleDrawer(false)}
            >
                <HeaderMobileMenuList/>
            </Drawer>
        </>
    )
}
export default HeaderMobileMenu