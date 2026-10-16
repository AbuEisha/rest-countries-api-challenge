import data from "../../data/data.json";
export async function loader({ params }) {
  const countryName = params.name;

  const choosenCountry = data.find(
    (country) =>
      country.name.toLowerCase().replaceAll(" ", "-") === countryName,
  );
  if (!choosenCountry) throw new Response("Not Found", { status: 404 });

  const borders = choosenCountry.borders;

  const choosenBorders = [];

  if (borders) {
    data.map((country) => {
      if (borders.includes(country.alpha3Code))
        choosenBorders.push(country.name);
    });
  }

  const currencies =
    choosenCountry.currencies?.map((c) => c.name).join(", ") ?? "";
  const languages =
    choosenCountry.languages?.map((l) => l.name).join(", ") ?? "";

  return {
    country: choosenCountry,
    borders: choosenBorders,
    currencies,
    languages,
  };
}
