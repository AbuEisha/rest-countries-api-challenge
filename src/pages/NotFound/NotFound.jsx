import { Box, Typography, Link, useTheme } from "@mui/material";
import { Link as RouteLink } from "react-router";

import ArrowIcon from "../../assets/icons/arrow-icon.svg?react";
export default function NotFound() {
  const theme = useTheme();
  return (
    <Box component="section" sx={{ padding: "5rem 2rem", textAlign: "center" }}>
      <Typography
        variant="h2"
        sx={{
          mb: 2,
          color: "text.primary",
          fontSize: { xs: "3rem", sm: "4rem" },
          fontWeight: 800,
        }}
      >
        404 - Error
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 2,
          mb: 4,
          fontSize: { xs: "0.9375rem", sm: "1rem" },
          color: "text.secondary",
          opacity: 0.8,
        }}
      >
        The Country you are looking for does not exist.
      </Typography>
      <Link
        component={RouteLink}
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "15rem",
          maxWidth: "100%",
          height: { xs: "4rem", md: "2.5rem" },
          borderRadius: ".25rem",
          marginInline: "auto",
          gap: ".75rem",
          textDecoration: "none",
          backgroundColor: "background.paper",
          color: "text.primary",
          boxShadow: "0px 1px 8px 0px hsl(0deg 0% 0% / 15%)",
          "&:hover": {
            "& svg": {
              animation: "bounceLeft 0.5s ease-in-out infinite alternate",
            },
          },
          "&.Mui-focusVisible": {
            outline: "none",
            "& svg": {
              animation: "bounceLeft 0.5s ease-in-out infinite alternate",
            },
          },
        }}
      >
        <Box
          component={ArrowIcon}
          sx={{
            width: { xs: "2rem", md: "1.125rem" },
            fill: theme.palette.text.primary,
          }}
        ></Box>
        <Typography
          variant="button"
          sx={{ textTransform: "none", fontWeight: 300 }}
        >
          Back To Home
        </Typography>
      </Link>
    </Box>
  );
}
