import React from 'react'
import { useSelector } from 'react-redux'

import style from './recipe.module.css';

import { Card , Breadcrumb, ListGroup } from 'react-bootstrap'

import Header from '../Header/Header'

const Recipe = () => {
  const recipess = useSelector((state) => state.recipes.allRecipes)

  // const onInternProfileView = (id) => {
  //   setIntern(interns.filter(intern => intern._id === id))
  // }

  return(
    <>
      <Header/>
      <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Chicken</Breadcrumb.Item>
        </Breadcrumb>
      <div className={`${style.card_wrapper} mx-auto py-5`}>
       
    
        <Card>
          {/* {recipess.map(({recipe}, i) => ( */}
            <>
              <Card.Img src="https://www.edamam.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2.jpg"  className='img-fluid'/>
              <Card.Body>
                <Card.Title className='text-center'>Claic Waffles</Card.Title>
                <Card.Text className='font-weight-bold text-center'>
                  Ingredients
                </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
    
              </Card.Body>
            </>
          {/* ))}   */}
          
        </Card>
      </div>
   </>
    )
}

export default Recipe;

