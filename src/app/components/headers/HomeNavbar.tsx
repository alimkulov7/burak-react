import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
<<<<<<< HEAD
<<<<<<< HEAD
    const authMember = true;
=======
    const authMember = null;
>>>>>>> b8f827a (feat develop header and footers part one)
=======
    const authMember = true;
>>>>>>> 94f51aa (fix: homeNavbar menu part refactoring)
  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box className={"hover-line"}>
            <NavLink to="/">
              <img className="brand-logo" src="/icons/burak.svg"
              style={{ width: "125px", height: "30px" }} />
            </NavLink>
          </Box>

          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underline"}>Home</NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink activeClassName={"underline"} to="/products">Products</NavLink>
            </Box>
            {authMember ? (
                <Box className={"hover-line"}>
                    <NavLink activeClassName={"underline"} to="/orders">Orders</NavLink>
                </Box>
            ) : null}
            {authMember ? (
                <Box className={"hover-line"}>
                    <NavLink activeClassName={"underline"} to="/member-page">My Page</NavLink>
                </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink activeClassName={"underline"} to="/help">HelpPage</NavLink>
            </Box>
            {/* BASKET */}
            {!authMember ? (
                <Box>
                    <Button
                    variant="contained"
                    className="login-button"
                    >Login</Button>
                </Box>
            ) : (
                <img className="user-avatar"
                src="/icons/default-user.svg"
                aria-haspopup={"true"}/>
            )}

          </Stack>
        </Stack>

        <Stack>DETAIL</Stack>
      </Container>
    </div>
  );
}