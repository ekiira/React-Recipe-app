import axios from 'axios';
import dotenv from 'dotenv'


export const GET_RECIPES = 'GET_RECIPES';
export const SELECTED_RECIPE = 'SELECTED_RECIPE'
dotenv.config()

const APP_ID = process.env.REACT_APP_APP_ID
const APP_KEY = process.env.REACT_APP_APP_KEY

// get all recipes
export const getRecipes = (query) => (dispatch) => {
  let baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  axios.get(baseUrl)
  .then((res) => {
    const { data } = res;
    dispatch({
      type: GET_RECIPES,
      payload: data.hits
    })
  })
  .catch((err) => {
    console.log('err', err)
  })
}

export const selectedRecipe = (nr) => {
  return {
    type: SELECTED_RECIPE,
    payload: nr
  } 
}