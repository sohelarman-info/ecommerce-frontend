'use client'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import sample from '../../assets/images/sample_card.png'
import newslater from '../../assets/images/Newsletter.png'
import { FaStar } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import "./style.css"

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})
const Product = () => {
  return (
    <>
    <Container className={montserrat.className}>
      <Row>
        <Col xs={3} className="orange_col">
          <h4 className="collection_head">Best Collection</h4>
          <p className="collection_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </p>
          <button className="collection_btn">Shop Now</button>
        </Col>
        <Col xs={9}>
          <Row>
            <div className="header_row">
              <h3 className="featured_head">Featured Products</h3>
              <span>View All</span>
            </div>
          </Row>
          <Row>
            <Col className="col" xs={4}>
              <Card className="featured_col">
                <div className="cart_img">
                  <Image
                    className="sample_img"
                    src={sample}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                  <div className="blue_badge">
                    <p>new</p>
                  </div>
                  <div className="purple_badge">
                    <p>-10%</p>
                    <p>Off</p>
                  </div>
                </div>
                <Card.Body>
                  <div className="cart_body">
                    <h4>Wireless Microphone</h4>
                    <p>
                      <del>$29.99</del> - $19.99
                    </p>
                    <button>Add to Cart</button>
                  </div>
                </Card.Body>
              </Card>
              <Image />
            </Col>
            <Col className="col" xs={4}>
              <Card className="featured_col">
                <div className="cart_img">
                  <Image
                    className="sample_img"
                    src={sample}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                  <div className="black_badge">
                    <p>Sold Out</p>
                  </div>
                </div>
                <Card.Body>
                  <div className="cart_body">
                    <h4>Smart Watch New Series</h4>
                    <p>
                      <del>$29.99</del> - $19.99
                    </p>
                    <button>Add to Cart</button>
                  </div>
                </Card.Body>
              </Card>
              <Image />
            </Col>
            <Col className="col" xs={4}>
              <Card className="featured_col">
                <div className="cart_img">
                  <Image
                    className="sample_img"
                    src={sample}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                </div>
                <Card.Body>
                  <div className="cart_body">
                    <h4>Camera HD + Lens</h4>
                    <p>
                      <del>$29.99</del> - $19.99
                    </p>
                    <button>Add to Cart</button>
                  </div>
                </Card.Body>
              </Card>
              <Image />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="top_rated_product">
        <Row>
          <div className="header_row">
            <h3 className="featured_head">Top Rated Product</h3>
            <span>View All</span>
          </div>
        </Row>
        <Row>
          <Col xs={3}>
            <Card className="top_rated_col">
              <Image
                className="top_ratedimg"
                src={sample}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <Card.Body>
                <div className="cart_body">
                  <h4>Smart Mop Robot</h4>
                  <p>$1000.00</p>
                  <div className="rating">
                    <div className='star'>
                      <FaStar size={24} color="#FFD687" />
                      5.0
                    </div>
                    <div>
                    <h6>Sold 99</h6>
                    </div>
                  </div>
                  <div className="top_rated_btn">
                    <button>Add to Cart</button>
                    <FaHeart size={24} color='#D0D0D2'/>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Image />
          </Col>
          <Col xs={3}>
            <Card className="top_rated_col">
              <Image
                className="top_ratedimg"
                src={sample}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <Card.Body>
                <div className="cart_body">
                  <h4>Smart TV HD</h4>
                  <p>$1000.00</p>
                  <div className="rating">
                    <div className='star'>
                      <FaStar size={24} color="#FFD687" />
                      5.0
                    </div>
                    <div>
                    <h6>Sold 99</h6>
                    </div>
                  </div>
                  <div className="top_rated_btn">
                    <button>Add to Cart</button>
                    <FaHeart size={24} color='#D0D0D2'/>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Image />
          </Col>
          <Col xs={3}>
            <Card className="top_rated_col">
              <Image
                className="top_ratedimg"
                src={sample}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <Card.Body>
                <div className="cart_body">
                  <h4>Surveillance Camera</h4>
                  <p>$1000.00</p>
                  <div className="rating">
                    <div className='star'>
                      <FaStar size={24} color="#FFD687" />
                      5.0
                    </div>
                    <div>
                    <h6>Sold 99</h6>
                    </div>
                  </div>
                  <div className="top_rated_btn">
                    <button>Add to Cart</button>
                    <FaHeart size={24} color='#D0D0D2'/>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Image />
          </Col>
          <Col xs={3}>
            <Card className="top_rated_col">
              <Image
                className="top_ratedimg"
                src={sample}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <Card.Body>
                <div className="cart_body">
                  <h4>Joystick Pro</h4>
                  <p>$1000.00</p>
                  <div className="rating">
                    <div className='star'>
                      <FaStar size={24} color="#FFD687" />
                      5.0
                    </div>
                    <div>
                    <h6>Sold 99</h6>
                    </div>
                  </div>
                  <div className="top_rated_btn">
                    <button>Add to Cart</button>
                    <FaHeart size={24} color='#D0D0D2'/>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Image />
          </Col>
        </Row>
      </div>
    </Container>
    <div className="newslater_part">
      <Container>
        <Row>
          <Col xs={1}></Col>
          <Col className='news_col' xs={7}>
          <Image
                className="newsimg"
                src={newslater}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="newlater_head">
                <h2>Join our newsletter now!
                </h2>
                <p>Register now and get our latest updates and promos.</p>
              </div>
          </Col>
          <Col className='input_col' xs={4}>
          <form action="">
          <input className='news_input' type="text" />
          <button>Join</button>
          </form>
          </Col>
        </Row>

      </Container>
    </div></>
  )
}

export default Product
