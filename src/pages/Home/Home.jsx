import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Typography,
  useTheme,
  Grid,
} from "@mui/material";

import CountryCard from "../../components/CountryCard";

import SearchIcon from "../../assets/icons/search-icon.svg?react";

import data from "../../data/data.json";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const theme = useTheme();
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const filteredCountries = data.filter((country) => {
    const searchCountry = country.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const filtered =
      filter === "" || country.region.toLowerCase() === filter.toLowerCase();

    return searchCountry && filtered;
  });
  return (
    <Box component="section" sx={{ paddingBlock: "3rem" }}>
      <Container
        sx={{
          "@media (min-width: 81.25rem)": {
            maxWidth: "80rem",
          },
          paddingInline: { xs: "2rem", lg: 0 },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            paddingBlockEnd: { xs: "4rem", md: "3rem" },
            justifyContent: "space-between",
            gap: { xs: "5rem", md: "2.5rem" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: ".25rem",
              boxShadow: "0px 1px 30px 0px hsl(0deg 0% 0% / 20%)",
              overflow: "hidden",
            }}
          >
            <Box
              component={SearchIcon}
              sx={{
                position: "absolute",
                width: "1.75rem",
                top: "50%",
                left: "1.75rem",
                transform: "translateY(-50%)",
                fill: theme.palette.text.secondary,
                zIndex: 4,
              }}
            ></Box>
            <TextField
              fullWidth
              id="filled-basic"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              variant="filled"
              placeholder="Search for a country..."
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "background.paper",
                  fontWeight: 600,
                  color: "text.primary",
                  borderRadius: "0.25rem",

                  "&::before": {
                    border: "none",
                  },
                  "&::after": {
                    borderBottomColor: "text.secondary",
                  },

                  "&:hover": {
                    backgroundColor: "background.paper",
                    "&::before": {
                      borderBottomColor: "text.secondary",
                    },
                  },

                  "&.Mui-focused": {
                    backgroundColor: "background.paper",
                  },
                },
                "& .MuiInputBase-input": {
                  width: { xs: "100%", md: "30rem" },
                  height: { xs: "6rem", md: "3.5rem" },
                  boxSizing: "border-box",
                  padding: "1rem 1rem 1rem 4.5rem",
                  "&::placeholder": {
                    color: "text.secondary",
                    fontSize: "0.8125rem",
                    opacity: 0.85,
                  },
                },
              }}
            />
          </Box>

          <Box
            sx={{
              minWidth: "12.5rem",
              maxWidth: "25rem",
              height: { xs: "6rem", md: "3.5rem" },
              boxShadow: "0px 1px 30px 0px hsl(0deg 0% 0% / 20%)",
              borderRadius: ".25rem",
            }}
          >
            <FormControl fullWidth sx={{ height: "100%" }}>
              <Select
                id="continents-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                displayEmpty
                renderValue={(selected) => {
                  if (selected === "") {
                    return (
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "0.875rem" }}
                      >
                        Filter by Region
                      </Typography>
                    );
                  }
                  return selected;
                }}
                inputProps={{ "aria-label": "Without label" }}
                MenuProps={{
                  slotProps: {
                    paper: {
                      sx: {
                        backgroundImage: "none",
                        backgroundColor: "background.paper",
                        color: "text.primary",
                        marginBlockStart: { xs: ".5rem", md: ".25rem" },
                        boxShadow: "0px 1px 30px 0px hsl(0deg 0% 0% / 20%)",
                        "& .MuiList-root": {
                          paddingBlock: { xs: "1.5rem", md: "0.875rem" },
                        },
                      },
                    },
                  },
                }}
                sx={{
                  height: "100%",
                  backgroundColor: "background.paper",
                  color: "text.primary",
                  "&&": {
                    "& .MuiSelect-select": {
                      display: "flex",
                      alignItems: "center",
                      padding: {
                        xs: "1rem 3rem 1rem 3rem",
                        md: "1rem 2.5rem 1rem 1.5rem",
                      },
                      boxSizing: "border-box",
                      height: "100%",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "text.primary",
                    },
                  },
                  "& .MuiSvgIcon-root": {
                    right: { xs: "1.75rem", md: ".75rem" },
                  },
                }}
              >
                {continents.map((cont) => (
                  <MenuItem
                    key={cont}
                    value={cont}
                    sx={{
                      fontSize: "0.875rem",
                      minHeight: "auto",
                      paddingBlock: { xs: ".75rem", md: "0.375rem" },
                      paddingInline: { xs: "3rem", md: "1.5rem" },
                    }}
                  >
                    {cont}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Stack>

        <Grid container spacing={{ xs: "5rem", md: "4.6875rem" }}>
          {filteredCountries.map((country) => (
            <Grid key={country.name} size={{ xs: 12, md: 4, lg: 3 }}>
              <CountryCard
                name={country.name}
                img={country.flag}
                region={country.region}
                population={country.population}
                capital={country.capital}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
