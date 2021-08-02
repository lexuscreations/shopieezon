import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { Nav, Row, Col, Tab } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import FirstCards from './FirstCards.json'
import "./Home.css"

export default () =>{
    const heroSecImg1 = "/images/hero1.png"
    const heroSecImg2 = "/images/hero2.png"
    const heroSecImg3 = "/images/hero3.png"
    const heroSecImg4 = "/images/hero4.png"
    const title = `<b class="backGreen mb-4">Buy & Sell</b><br/><b class="backBlack">Electronics</b><br /><b class="backOrange">Online</b>`
    const subTitle = `Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.`
    let pills = [
      {
        eventKey: "first",
        content: "FirstCards"
      },
      {
        eventKey: "second",
        content: "SecondCards"
      },
      {
        eventKey: "third",
        content: "ThirdCards"
      },
      {
        eventKey: "fourth",
        content: "FourthCards"
      },
      {
        eventKey: "fifth",
        content: "FifthCards"
      }
    ]

    const addToCard = param => {
      console.log(param)
    }

    return (
      <>
        <div className="col-xxxl-8 px-4 py-2 shadow-lg">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5 df-jcc-aic">
            <div className="col-11 col-sm-8 col-lg-6">
              <OwlCarousel autoplayHoverPause={true} className='owl-theme' autoplay={true} autoplayTimeout={2000} autoplaySpeed={1000} loop={true} margin={10} items={1}>
                <div className="item"><img src={heroSecImg1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /></div>
                <div className="item"><img src={heroSecImg2} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /></div>
                <div className="item"><img src={heroSecImg3} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /></div>
                <div className="item"><img src={heroSecImg4} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /></div>
              </OwlCarousel>
            </div>
            <div className="col-lg-6">
              <h1 className="display-1 fw-bold mb-3" dangerouslySetInnerHTML={{__html: title}}></h1>
              <p className="borderCurved lead">{subTitle}</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start pt-5">
                <NavLink to="/login" type="button" className="btn btn-lg px-4 me-md-2 loginBtnHomeHero" style={{background: "#ff5b7e"}}><i className="fas fa-sign-in-alt">&nbsp;Login</i></NavLink>
                <NavLink style={{backgroundImage: 'url("/images/circuit-board.png")'}} to="/registration" type="button" className="btn btn-outline-secondary sideSortHomeMenuSec btn-lg px-4"><i className="fa fa-user-plus" aria-hidden="true">&nbsp;SignUp</i></NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 mx-4">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>

              <Col sm={1}>
                <Nav variant="pills" className="flex-row">
                  <Nav.Item>
                    <Nav.Link eventKey="first"><i className="fas fa-mobile-alt">&nbsp;Mobile</i></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second"><i className="fas fa-laptop">&nbsp;Laptop</i></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third"><i className="fas fa-headphones">&nbsp;Headphone</i></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth"><i className="fas fa-desktop">&nbsp;Monitor</i></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth"><i className="fas fa-tv">&nbsp;Tv</i></Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col sm={1}></Col>

              <Col sm={10}>
                <Tab.Content>
                  {pills.map(({eventKey, content}) => {
                    return(
                      <Tab.Pane eventKey={eventKey}>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                          {FirstCards.map((elem) => {
                              return (
                                <>
                                    {elem.card.map((row) => {
                                        let { cardTitle, cardImg, cardDes, cardLstUpdTime, hrefLink, price } = row
                                        return (
                                        <>
                                          <div className="col">
                                            <div className="card h-100 shadow rounded">
                                              <img src={cardImg} className="card-img-top" style={{height: "30vh"}} alt="..." />
                                              <div className="card-body mt-4">
                                                <h3 className="card-title">{cardTitle}</h3>
                                                <p className="card-text">{cardDes}</p>
                                                <p>
                                                  {Object.keys(price).map(key => 
                                                    <p dangerouslySetInnerHTML={{__html: price[key]}}></p>
                                                  )}
                                                </p>
                                              </div>
                                              <div className="card-footer d-flex justify-content-between align-items-center">
                                                <small className="text-muted">{cardLstUpdTime}</small>
                                                <a onClick={() => {addToCard(hrefLink)}} target="_blank" className="btn btn-warning"><i class="fas fa-shopping-cart">&nbsp;+&nbsp;Card</i></a>
                                                <a href={hrefLink} target="_blank" className="btn btn-success mx-2">Buy</a>
                                              </div>
                                            </div>
                                          </div>  
                                        </>
                                        )
                                    })}
                                </>
                              )
                          })}
                        </div>
                      </Tab.Pane>
                    )
                  })}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </>
    )
  }