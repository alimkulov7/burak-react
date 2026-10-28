import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
    const authMember = true;
  return (
    <div className="home-navbar">
      <Container sx={{ mt: "55px", height: "642px" }}>
        <Stack
          
          sx={{
            height: "50px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box className={"hover-line"}>
            <NavLink to="/">
              <img src="/icons/burak.svg"
              style={{ width: "125px", height: "30px" }} />
            </NavLink>
          </Box>

          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              minWidth: "700px",
              alignItems: "center",
            }}
          >
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
                    style={{background: "#3776CC", color: "#f8f8ff"}}
                    >Login</Button>
                </Box>
            ) : (
                <img />
            )}

          </Stack>
        </Stack>

        <Stack>DETAIL</Stack>
      </Container>
    </div>
  );
}