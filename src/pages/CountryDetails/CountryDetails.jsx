import {
  Box,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useLoaderData, Link as RouteLink } from "react-router";

import ArrowIcon from "../../assets/icons/arrow-icon.svg?react";

export default function CountryDetails() {
  const theme = useTheme();
  const { country, borders, currencies, languages } = useLoaderData();
  return (
    <Box
      component="section"
      sx={{
        paddingBlock: "5rem",
      }}
    >
      <Container
        sx={{
          "@media (min-width: 81.25rem)": {
            maxWidth: "80rem",
          },
          paddingInline: { xs: "3.5rem", lg: 0 },
        }}
      >
        <Link
          component={RouteLink}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "13rem", md: "8.5rem" },
            height: { xs: "4rem", md: "2.5rem" },
            borderRadius: ".25rem",
            gap: ".75rem",
            textDecoration: "none",
            backgroundColor: "background.paper",
            color: "text.primary",
            boxShadow: "0px 1px 16px 2px hsl(0deg 0% 0% / 20%)",
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
            Back
          </Typography>
        </Link>

        <Grid
          container
          spacing={{ xs: "6rem", md: 0 }}
          sx={{
            paddingBlockStart: { xs: "8rem", md: "5rem" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid size={{ xs: 12, md: 5, lg: 5.25 }}>
            <Box
              component="img"
              src={country.flag}
              alt={`${country.name} Flag`}
              sx={{
                display: "block",
                width: "100%",
                maxHeight: "25rem",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6.5, lg: 5.4 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: "2rem",
                fontWeight: 800,
                color: "text.primary",
                marginBlockEnd: { xs: "3.5rem", md: "2rem" },
              }}
            >
              {country.name}
            </Typography>
            <Stack
              sx={{
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                gap: { xs: "4rem", md: "1.5rem" },
              }}
            >
              <Box>
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: ".25rem",
                    marginBlockEnd: { xs: "2rem", md: ".75rem" },
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
                    {"Native Name:"}
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
                    {country.nativeName}
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: ".25rem",
                    marginBlockEnd: { xs: "2rem", md: ".75rem" },
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
                    {country.population.toLocaleString()}
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: ".25rem",
                    marginBlockEnd: { xs: "2rem", md: ".75rem" },
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
                    {country.region}
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: ".25rem",
                    marginBlockEnd: { xs: "2rem", md: ".75rem" },
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
                    {"Sub Region:"}
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
                    {country.subregion}
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: ".25rem",
                    marginBlockEnd: { xs: "2rem", md: ".75rem" },
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
                    {country.capital}
                  </Typography>
                </Stack>
              </Box>
              <Box>
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: ".25rem",
                    marginBlockEnd: { xs: "2rem", md: ".75rem" },
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
                    {"Top Level Domain:"}
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
                    {country.topLevelDomain}
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: ".25rem",
                    marginBlockEnd: { xs: "2rem", md: ".75rem" },
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
                    {"Currencies:"}
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
                    {currencies}
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: ".25rem",
                    marginBlockEnd: { xs: "2rem", md: ".75rem" },
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
                    {"Languages:"}
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
                    {languages}
                  </Typography>
                </Stack>
              </Box>
            </Stack>

            {borders.length > 0 && (
              <Stack
                sx={{
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: "2.5rem", md: "1rem" },
                  alignItems: { xs: "flex-start", md: "center" },
                  marginBlockStart: { xs: "3.5rem", md: "3.75rem" },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    width: "7rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "text.primary",
                  }}
                >
                  {"Border Countries:"}
                </Typography>
                <Stack
                  sx={{
                    flex: 1,
                    flexDirection: "row",
                    gap: { xs: "1.25rem", md: "0.625rem" },
                    flexWrap: "wrap",
                  }}
                >
                  {borders.map((border) => (
                    <Link
                      key={border}
                      component={RouteLink}
                      to={`/country/${border.toLowerCase().replaceAll(" ", "-")}`}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: { xs: "12rem", md: "6rem" },
                        height: { xs: "3.5rem", md: "1.75rem" },
                        paddingInline: "0.375rem",
                        borderRadius: ".25rem",
                        backgroundColor: "background.paper",
                        color: "text.primary",
                        textDecoration: "none",
                        boxShadow: "0px 1px 5px 0px hsl(0deg 0% 0% / 20%)",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                        "&.Mui-focusVisible": {
                          outline: "none",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          textTransform: "none",
                          opacity: 0.6,
                        }}
                      >
                        {border}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
