import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const authMember = true;
=======
    const authMember = null;
>>>>>>> b8f827a (feat develop header and footers part one)
=======
    const authMember = true;
>>>>>>> 94f51aa (fix: homeNavbar menu part refactoring)
=======
    const authMember = null;
>>>>>>> ae31cf2 (fix: modify homeNavbar header component)
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

        <Stack className="header-frame">
          <Stack className="detail">
            <Box className ="head-main-txt">
              World's Most Delicious Cousine
            </Box>
            <Box className= "wel-txt">The Choice, not just a choice</Box>
            <Box className= "service-txt">24 hours service</Box>
            <Box className = "signup">
              {!authMember ? (
                <Button
                variant="contained"
                className="signup-button"
                >SIGN UP</Button>
              ) : null}
            </Box>

          </Stack>
          <Stack className="logo-frame">
              <Box className="logo-frame">
                <div className="logo-img"></div>
              </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}