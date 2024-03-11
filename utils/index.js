const doGet = async (url) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  if(!response.ok){
    throw new Error(`Problem fetching from ${url}`)
  }
  return await response.json();
}
export const fetchDrinkById = async (id) => {
  const url = `${process.env.drinklookupurl}${id}`;
  return (await doGet(url)).drinks[0];

}
export const fetchDrinksByAlpha = async (alpha) => {
  const url = `${process.env.drinksurl}${alpha}`;
  return (await doGet(url)).drinks;
}