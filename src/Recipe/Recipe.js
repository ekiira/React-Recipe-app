import React from 'react'
import { useSelector } from 'react-redux'

import style from './recipe.module.css';

import { Card , Breadcrumb, ListGroup } from 'react-bootstrap'

import Header from '../Header/Header'

const Recipe = () => {
  const recipe = useSelector(({recipe}) => recipe)
  
  return(
    <>
      <Header/>
    {recipe ? (
      <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{recipe.label}</Breadcrumb.Item>
      </Breadcrumb>
      <div className={`${style.card_wrapper} mx-auto py-5`}>
        <Card>
          <>
            <Card.Img src={recipe.image}  className='img-fluid' alt={recipe.label}/>
            <Card.Body>
              <Card.Title className='text-center'>{ recipe.label }</Card.Title>
              <Card.Text className='font-weight-bold text-center'>
                Ingredients
              </Card.Text>
                <ListGroup variant="flush">
                {   recipe.ingredients.map((ing, i) => (
                  <ListGroup.Item key={i}> {ing.text} </ListGroup.Item>
                  )) }
                </ListGroup>

            </Card.Body>
          </>
        </Card>
    </div>
    </>
    ) : (
      <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    </Breadcrumb>
    )}
   </>
    )
}

export default Recipe;
