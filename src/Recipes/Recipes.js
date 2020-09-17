import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Form, FormControl } from 'react-bootstrap'
import dotenv from 'dotenv'

import style from './recipes.module.css'

import Header from '../Header/Header'
  
import { getRecipes } from '../redux/action'

const Recipes = () => {
  dotenv.config()
  const dispatch = useDispatch();
  const recipess = useSelector((state) => state.recipes.allRecipes)
  const APP_ID = process.env.REACT_APP_APP_ID
  const APP_KEY = process.env.REACT_APP_APP_KEY
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const updateSearch = e => {
    setSearch(e.target.value)
  }
  const getSearch = e => {
    e.preventDefault();
    dispatch(getRecipes(search))
    setSearch("")
  }

  const onLinkClick = (index) => {
    console.log('ddd', index)
  }

  return(
    <div className="App">
      <Header /> 

      <div className='d-flex justify-content-center'>
        <Form inline className={` mt-5 ${style.form_inline}`} onSubmit={getSearch}>
          <FormControl type="text" placeholder="" className={`px-5 ${style.search_bar}`} value={search} onChange={updateSearch}/>
          <i className={`fa fa-search ${style.fa_search}`} aria-hidden="true"></i>
          <i className={`fa fa-times-circle ${style.fa_times}`} aria-hidden="true"></i>
        </Form>
      </div>

      <div className='py-5'>
        <div className='container'>
          <div className='row'>
            {recipess.map(({recipe}, i) => (
              <div className='col-6 col-md-4 col-lg-3 pb-4' key={i}>
                <Link to='/recipe' onClick={() => onLinkClick(i)}>
                  <img src={recipe.image} className='img-fluid' /> 
                </Link>
              </div>
            ))}  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipes;
