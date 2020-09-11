import React from 'react'
import style from './recipes.module.css'

import { Form, FormControl } from 'react-bootstrap'

const Recipes = ({search, change, value, recipes}) => {
    return(
       
       
<>
  <header>
    <h3 className='text-center py-4'>Resspice</h3>
  </header>
  <div className='d-flex justify-content-center'>
  <Form inline className={` mt-5 ${style.form_inline}`} onSubmit={search}>
      <FormControl type="text" placeholder="" className={`px-5 ${style.search_bar}`} value={value} onChange={change}/>
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

</>
    )
}

export default Recipes;


