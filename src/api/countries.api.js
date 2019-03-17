async function getCountryByRegion(region) {
  try {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/region/${region}`
    );

    return await response.json();
  } catch (e) {
    console.error(e);
  }
}

export default { getCountryByRegion };
