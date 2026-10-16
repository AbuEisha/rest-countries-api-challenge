import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Link,
  useColorScheme,
} from "@mui/material";
import { Link as RouteLink, Outlet } from "react-router";

import MoonIcon from "../assets/icons/moon-icon.svg?react";

export default function Layout() {
  const { mode, setMode } = useColorScheme();
  const handleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <>
      <Box
        component="header"
        sx={{
          position: "sticky",
          width: "100%",
          height: "5rem",
          backgroundColor: "background.paper",
          boxShadow: "0px 4px 12px 0px hsl(0deg 0% 0% / 10%)",
        }}
      >
        <Stack
          component={Container}
          sx={{
            height: "100%",
            "@media (min-width: 81.25rem)": {
              maxWidth: "80rem",
            },
            paddingInline: { xs: "2rem", lg: 0 },
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            component={RouteLink}
            to={"/"}
            sx={{
              textDecoration: "none",
              color: "text.primary",
              "&:hover": { textDecoration: "underline" },
              "&.Mui-focusVisible": {
                textDecoration: "underline",
                outline: "none",
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                fontWeight: 800,
                color: "text.primary",
              }}
            >
              {"Where in the world?"}
            </Typography>
          </Link>
          <Button
            disableRipple
            aria-pressed={mode === "dark"}
            sx={{
              gap: ".75rem",
              padding: 0,
              fontWeight: 600,
              textTransform: "none",
              color: "text.primary",
              "&:hover": {
                textDecoration: "underline",
                backgroundColor: "transparent",
              },
              "&.Mui-focusVisible": {
                textDecoration: "underline",
                backgroundColor: "transparent",
              },
            }}
            onClick={handleMode}
          >
            <Box
              component={MoonIcon}
              sx={{
                width: "1rem",
                "& path": { fill: "white", strokeWidth: "2.5rem" },
              }}
            ></Box>
            Dark Mode
          </Button>
        </Stack>
      </Box>
      <Box
        component="main"
        sx={{
          minHeight: "calc(100vh - 5rem)",
          backgroundColor: "background.default",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}
