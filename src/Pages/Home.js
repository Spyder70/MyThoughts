import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import '../Pages/CSS/style.css';

const Home = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { logout } = useAuth0();
  return (
    <div>
      {/* Start Top Nav */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div className="container text-light">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <i className="fa fa-envelope mx-2" />
              <a className="navbar-sm-brand text-light text-decoration-none" href="olwindsouza2000@gmail.com">olwindsouza2000@gmail.com</a>
              <i className="fa fa-phone mx-2" />
              <a className="navbar-sm-brand text-light text-decoration-none" href="tel:8867029318">8867029318</a>
            </div>
            <div>
              <a className="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2" /></a>
              <a className="text-light" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2" /></a>
              <a className="text-light" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2" /></a>
              <a className="text-light" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin fa-sm fa-fw" /></a>
            </div>
          </div>
        </div>
      </nav>
      {/* Close Top Nav */}
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand text-success logo h1 align-self-center" href="index.html">
            MyThoughts
          </a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Todo">My Dairy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Movements">My Movements</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contactus">Contactus</a>
                </li>
              </ul>
            </div>
            <div className="navbar align-self-center d-flex">
              <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                <div className="input-group">
                  <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                  <div className="input-group-text">
                    <i className="fa fa-fw fa-search" />
                  </div>
                </div>
              </div>
              <div className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                {isAuthenticated && <p> {user.name} </p>}
              </div>
              {/*User Authentication Section With Auth 0 */}

              <span></span><div>
                {isAuthenticated ? (
                  <button class="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                ) : (
                  <button class="button" onClick={() => loginWithRedirect()}>Log In</button>
                )}
              </div>

              {/*User Authentication Section With Auth 0 Ends */}
            </div>
          </div>
        </div>
      </nav>
      {/* Close Header */}
      {/* Modal */}
      <div className="modal fade bg-white" id="templatemo_search" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="w-100 pt-1 mb-5 text-right">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <form action method="get" className="modal-content modal-body border-0 p-0">
            <div className="input-group mb-2">
              <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
              <button type="submit" className="input-group-text bg-success text-light">
                <i className="fa fa-fw fa-search text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Start Banner Hero */}
      <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src="./assets/img/2728412.webp" alt />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1 text-success"><b>MyThoughts</b><b>is a web application</b></h1>
                    <h3 className="h2">Where you can maintain your prosonal dairy in digital format</h3>
                    <p>
                 
                   "Abraham Lincoln once said, 'The best way to predict your future is to create it this
                    quote reminds me that we have the power to shape our own destinies. It's easy to get 
                    caught up in the idea that our lives are predetermined or that we don't have control 
                    over our circumstances, but the truth is that we have the ability to make choices and 
                    take actions that can lead us to a brighter future. By setting goals, working hard, 
                    and staying focused on what's important, we can create the kind of future that we 
                    want for ourselves. This quote inspires me to stay motivated and keep moving forward
                    even when things get tough."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
          <i className="fas fa-chevron-left" />
        </a>
        <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
          <i className="fas fa-chevron-right" />
        </a>
      </div>
      {/* End Banner Hero */}
      {/* Start Footer */}
      <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-5">
              <h2 className="h2 text-success border-bottom pb-3 border-light logo">My Thoughts</h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <i className="fas fa-map-marker-alt fa-fw" />
                  123 Consectetur at ligula 10660
                </li>
                <li>
                  <i className="fa fa-phone fa-fw" />
                  <a className="text-decoration-none" href="tel:8867029318">8867029318</a>
                </li>
                <li>
                  <i className="fa fa-envelope fa-fw" />
                  <a className="text-decoration-none" href="mailto:info@company.com">olwindsouza2000@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li><a className="text-decoration-none" href="/">Home</a></li>
                <li><a className="text-decoration-none" href="Todo">My Dairy</a></li>
                <li><a className="text-decoration-none" href="Movements">My Movements</a></li>
                <li><a className="text-decoration-none" href="contactus">Contactus</a></li>
              </ul>
            </div>
          </div>
          <div className="row text-light mb-4">
            <div className="col-12 mb-3">
              <div className="w-100 my-3 border-top border-light" />
            </div>
            <div className="col-auto me-auto">
              <ul className="list-inline text-left footer-icons">
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw" /></a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw" /></a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw" /></a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw" /></a>
                </li>
              </ul>
            </div>
            <div className="col-auto">
              <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
              <div className="input-group mb-2">
                <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                <div className="input-group-text btn-success text-light">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 bg-black py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-12">
                <p className="text-left text-light">
                  Copyright © 2023
                  | Designed by <a rel="sponsored" target="_blank">Olwin Dsouza</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </div>

  )
}

export default Home