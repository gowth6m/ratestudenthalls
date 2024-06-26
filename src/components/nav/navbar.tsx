import React from "react";
import NavLinks from "./nav-links";
import UserMenu from "./user-menu";
import SearchButton from "./search-button";
import { AppBar, Box, Container, Toolbar } from "@mui/material";

// -----------------------------------------------------------

interface Props {}

const Navbar: React.FC<Props> = () => {
    return (
        <AppBar
            elevation={0}
            sx={{
                backgroundColor: "secondary.main",
                boxShadow: "none",
                backdropFilter: "blur(10px)",
            }}
        >
            <Container maxWidth={"xl"}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                    }}
                >
                    <div>LOGO</div>

                    <NavLinks />

                    <Box display={"flex"} flexDirection={"row"} gap={0.5}>
                        <SearchButton />
                        <UserMenu />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
