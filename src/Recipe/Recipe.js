import React from 'react'
import style from './recipe.module.css';

import { Card , Breadcrumb, ListGroup } from 'react-bootstrap'

import Header from '../Header/Header'

const Recipe = () => {
  return(
    <>
      <Header/>
    
      <div className={`${style.card_wrapper} mx-auto py-5`}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Chicken</Breadcrumb.Item>
        </Breadcrumb>
    
        <Card>
          <Card.Img src="https://www.edamam.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2.jpg"  className='img-fluid'/>
          <Card.Body>
            <Card.Title>Claic Waffles</Card.Title>
            <Card.Text className='font-weight-bold text-center'>
              Ingredients
            </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            <Card.Img src="https://www.edamam.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2.jpg"  className='img-fluid'/>

          </Card.Body>
        </Card>
      </div>
   </>
    )
}

export default Recipe;

