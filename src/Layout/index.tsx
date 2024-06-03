import { ReactNode } from "react";
import { Box } from "@mui/material";
import SideBar from "../components/sidebar";


interface LayoutProps {
    children: ReactNode
}


const Layout = ({ children }: LayoutProps) => {
    return (
        <Box sx={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: {
                xs: "column",
                lg: "row"
            },
            color: "white",
            // padding: 0,
            gap: 0.5,
            overflow: "hidden",
            height: "100vh"
        }}
        >
    <SideBar/>
    <Box sx={{ width: "100%", overflowY: "scroll" }}>{children}</Box>
        </Box>
    );
}

export default Layout;