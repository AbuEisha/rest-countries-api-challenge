import data from "../../data/data.json";
export async function loader({ params }) {
  const countryName = params.name;

  const choosenCountry = data.find(
    (country) =>
      country.name.toLowerCase().replaceAll(" ", "-") === countryName,
  );

  const borders = choosenCountry.borders;

  let choosenBorders = [];

  if (borders) {
    data.map((country) => {
      if (borders.includes(country.alpha3Code))
        choosenBorders.push(country.name);
    });
  }

  let choosenCurr = "";

  choosenCountry.currencies.forEach((curr, index) => {
    if (index < choosenCountry.currencies.length - 1) {
      choosenCurr += curr.name + ", ";
    } else choosenCurr += curr.name;
  });

  let choosenLang = "";

  choosenCountry.languages.forEach((lang, index) => {
    if (index < choosenCountry.languages.length - 1) {
      choosenLang += `${lang.name}, `;
    } else choosenLang += lang.name;
  });

  return {
    country: choosenCountry,
    borders: choosenBorders,
    currencies: choosenCurr,
    languages: choosenLang,
  };
}
