import { create } from "apisauce";

const  api = create({
    baseURL: 'https://newsapi.org/v2',
})
const apiKey = "?country=us&apiKey=b4babf3ea78a4c21853ebee4cfe5dff3"

const getTopHeadline = api.get("/top-headlines"+apiKey)
const getNewsByCategory = (category) =>
  api.get(
    "/everything?q=" + category + "&apiKey=b4babf3ea78a4c21853ebee4cfe5dff3"
  );

export default  {
    getTopHeadline,
    getNewsByCategory,
}