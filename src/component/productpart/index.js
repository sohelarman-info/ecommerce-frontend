import React from 'react'
import Container from '../container/Container'
import HomeTopBar from '../homepart/hometopbar'
import FooterElements from '../homepart/footerelements'
import Productdetails from './productdetails'

function ProductPart() {
  return (
    <div>      
        <Container>
            <HomeTopBar/>
            <Productdetails/>
        </Container>
        <FooterElements/>
    </div>
  )
}

export default ProductPart
