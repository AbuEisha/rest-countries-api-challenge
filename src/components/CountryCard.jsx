import { Link, Box, Stack, Typography } from "@mui/material";
import { Link as RouteLink } from "react-router";

export default function CountryCard({
  img,
  name,
  population,
  region,
  capital,
}) {
  return (
    <Link
      component={RouteLink}
      to={`country/${name.toLowerCase().replaceAll(" ", "-")}`}
      sx={{
        display: "block",
        maxWidth: "33rem",
        marginInline: "auto",
        backgroundColor: "background.paper",
        borderRadius: ".25rem",
        overflow: "hidden",
        textDecoration: "none",
        boxShadow: "0px 1px 30px 0px hsl(0deg 0% 0% / 20%)",
        transition: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        "&:hover": {
          transform: "translateY(-1.25rem)",
        },
        "&.Mui-focusVisible": {
          outline: "none",
          transform: "translateY(-1.25rem)",
        },
      }}
    >
      <Box
        component="img"
        src={img}
        alt={`${name} Flag`}
        sx={{
          display: "block",
          height: { xs: "20rem", md: "10rem" },
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Box
        sx={{
          padding: {
            xs: "5rem 3.125rem 5.8125rem 3.125rem",
            md: "1.75rem 1.5rem 2.75rem 1.5rem",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "1rem",
            fontWeight: 800,
            color: "text.primary",
            marginBlockEnd: { xs: "2.5rem", md: "1rem" },
          }}
        >
          {name}
        </Typography>
        <Stack sx={{ flexDirection: "row", gap: ".25rem" }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            {"Population:"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "text.primary",
              opacity: 0.65,
            }}
          >
            {population.toLocaleString()}
          </Typography>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            gap: ".25rem",
            marginBlock: { xs: "1rem", md: ".25rem" },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            {"Region:"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "text.primary",
              opacity: 0.65,
            }}
          >
            {region}
          </Typography>
        </Stack>
        <Stack sx={{ flexDirection: "row", gap: ".25rem" }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            {"Capital:"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "text.primary",
              opacity: 0.65,
            }}
          >
            {capital}
          </Typography>
        </Stack>
      </Box>
    </Link>
  );
}
