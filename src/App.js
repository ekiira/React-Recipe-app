import React, {useEffect, useState} from 'react';
import './App.css';
import Recipes from './Recipes';
import dotenv from 'dotenv'
import style from './recipes.module.css'

import { Form, FormControl } from 'react-bootstrap'

const App = () => {
// const APP_ID = '4e319470';
// const APP_KEY = '04a1c6937b789e790a5be7fb03031da8';
dotenv.config()
// states

const APP_ID = process.env.REACT_APP_APP_ID
const APP_KEY = process.env.REACT_APP_APP_KEY
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken');

const updateSearch = e => {
  setSearch(e.target.value)
}
const getSearch = e => {
  e.preventDefault();
  setQuery(search)
  setSearch("")
}


  const getRecipes = async () => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const url1 = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  const response =  await fetch(proxyUrl + url1, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
    }
  })
  const data = await response.json()
  setRecipes(data.hits)
  console.log(data.hits)
};

// fetch the data from the api
useEffect ( () => {
  getRecipes();
}, [query]);



  return(
    <div className="App">
      <header>
    <h3 className='text-center py-4'>Resspice</h3>
  </header>
  <div className='d-flex justify-content-center'>
  <Form inline className={` mt-5 ${style.form_inline}`} onSubmit={getSearch}>
      <FormControl type="text" placeholder="" className={`px-5 ${style.search_bar}`} value={search} onChange={updateSearch}/>
      <i className={`fa fa-search ${style.fa_search}`} aria-hidden="true"></i>
      <i className={`fa fa-times-circle ${style.fa_times}`} aria-hidden="true"></i>
    </Form>
  </div>
  <div>
  <div className='container'>
      <div className='row'>
   {recipes.map(({recipe}, i) => (
          <div className='col-6 col-md-4 col-lg-3 pb-4' key={i}>
<img src={recipe.image} className='img-fluid' /> 
          </div>
   ))}  
       
      </div>
 </div>

  </div>
        {/* <Recipes 
        submit={getSearch}
        change={updateSearch}
        value={search}
        recipes={recipes}
        /> */}

      {/* <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes"> */}
      {/* {recipes.map(({recipe}, i) => (
         
   ))}  */}
      {/* </div> */}
    </div>
  )
}

export default App;
// key={i}
// title={recipe.label}
// calories={recipe.calories} 
// image={recipe.image}
// ingredients={recipe.ingredients}
// />