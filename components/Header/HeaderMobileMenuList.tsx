import { Box } from "@mui/material";
import HeaderMobileMainList from "./HeaderMobailMainList";
import HeaderMobileSubmainList from "./HeaderMobileSubmainList";

const HeaderMobileMenuList = () => {

    return (
        <Box className="px-4 py-4 xl:w-[calc(100vw-400px)] md:w-[calc(100vw-250px)] w-[calc(100vw-100px)]">
            <HeaderMobileMainList/>
            <HeaderMobileSubmainList/>
        </Box>
    )

}
export default HeaderMobileMenuList;