import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ isAuth, setIsAuth }) {
  return (
    <>
      {/* Top header */}
      <div className="container-fluid px-5 d-none border-bottom d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-4 text-center text-lg-start mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <NavLink to="/help" className="text-muted me-2">
                Help
              </NavLink>
              <small> / </small>
              <NavLink to="/support" className="text-muted mx-2">
                Support
              </NavLink>
              <small> / </small>
              <NavLink to="/contact" className="text-muted ms-2">
                Contact
              </NavLink>
            </div>
          </div>
          <div className="col-lg-4 text-center d-flex align-items-center justify-content-center">
            <small className="text-dark">Call Us:</small>
            <NavLink to="/contact" className="text-muted">
              (+012) 1234 567890
            </NavLink>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle text-muted me-2"
                  data-bs-toggle="dropdown"
                >
                  <small>USD</small>
                </a>
                <div className="dropdown-menu rounded">
                  <button className="dropdown-item">Euro</button>
                  <button className="dropdown-item">Dollar</button>
                </div>
              </div>

              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle text-muted mx-2"
                  data-bs-toggle="dropdown"
                >
                  <small>English</small>
                </a>
                <div className="dropdown-menu rounded">
                  <button className="dropdown-item">English</button>
                  <button className="dropdown-item">Turkish</button>
                  <button className="dropdown-item">Spanish</button>
                  <button className="dropdown-item">Italian</button>
                </div>
              </div>

              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle text-muted ms-2"
                  data-bs-toggle="dropdown"
                >
                  <small>
                    <i className="fa fa-home me-2" /> My Dashboard
                  </small>
                </a>
                <div className="dropdown-menu rounded">
                  <NavLink to="/login" className="dropdown-item">
                    Login
                  </NavLink>
                  <NavLink to="/wishlist" className="dropdown-item">
                    Wishlist
                  </NavLink>
                  <NavLink to="/cart" className="dropdown-item">
                    My Cart
                  </NavLink>
                  <NavLink to="/notifications" className="dropdown-item">
                    Notifications
                  </NavLink>
                  <NavLink to="/account/settings" className="dropdown-item">
                    Account Settings
                  </NavLink>
                  <NavLink to="/account" className="dropdown-item">
                    My Account
                  </NavLink>
                  <button
                    className="dropdown-item"
                    onClick={() => setIsAuth(false)}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-fluid px-5 py-4 d-none d-lg-block">
        <div className="row gx-0 align-items-center text-center">
          <div className="col-md-4 col-lg-3 text-center text-lg-start">
            <div className="d-inline-flex align-items-center">
              <NavLink to="/" className="navbar-brand p-0">
                <h1 className="display-5 text-primary m-0">
                  <i className="fas fa-shopping-bag text-secondary me-2" />
                  Electro
                </h1>
              </NavLink>
            </div>
          </div>

          {/* Search Bar */}
          <div className="col-md-4 col-lg-6 text-center">
            <div className="position-relative ps-4">
              <div className="d-flex border rounded-pill">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3"
                  type="text"
                  placeholder="Search Looking For?"
                />
                <select
                  className="form-select text-dark border-0 border-start rounded-0 p-3"
                  style={{ width: 200 }}
                >
                  <option>All Category</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                  <option>Category 4</option>
                </select>
                <button
                  type="button"
                  className="btn btn-primary rounded-pill py-3 px-5"
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="col-md-4 col-lg-3 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <NavLink
                to="/compare"
                className="text-muted d-flex align-items-center justify-content-center me-3"
              >
                <span className="rounded-circle btn-md-square border">
                  <i className="fas fa-random" />
                </span>
              </NavLink>
              <NavLink
                to="/wishlist"
                className="text-muted d-flex align-items-center justify-content-center me-3"
              >
                <span className="rounded-circle btn-md-square border">
                  <i className="fas fa-heart" />
                </span>
              </NavLink>
              <NavLink
                to="/cart"
                className="text-muted d-flex align-items-center justify-content-center"
              >
                <span className="rounded-circle btn-md-square border">
                  <i className="fas fa-shopping-cart" />
                </span>
                <span className="text-dark ms-2">$0.00</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="container-fluid nav-bar p-0">
        <div className="row gx-0 bg-primary px-5 align-items-center">
          <div className="col-lg-3 d-none d-lg-block">
            <nav
              className="navbar navbar-light position-relative"
              style={{ width: 250 }}
            >
              <button
                className="navbar-toggler border-0 fs-4 w-100 px-0 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#allCat"
              >
                <h4 className="m-0">
                  <i className="fa fa-bars me-2" />
                  All Categories
                </h4>
              </button>
              <div className="collapse navbar-collapse rounded-bottom" id="allCat">
                <ul className="list-unstyled categories-bars">
                  <li><NavLink to="/category/accessories">Accessories (3)</NavLink></li>
                  <li><NavLink to="/category/electronics">Electronics & Computer (5)</NavLink></li>
                  <li><NavLink to="/category/laptops">Laptops & Desktops (2)</NavLink></li>
                  <li><NavLink to="/category/mobiles">Mobiles & Tablets (8)</NavLink></li>
                  <li><NavLink to="/category/smart">SmartPhone & Smart TV (5)</NavLink></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="col-12 col-lg-9">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
              <NavLink to="/" className="navbar-brand d-block d-lg-none">
                <h1 className="display-5 text-secondary m-0">
                  <i className="fas fa-shopping-bag text-white me-2" />
                  Electro
                </h1>
              </NavLink>
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="fa fa-bars fa-1x" />
              </button>

              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                  <NavLink to="/" className="nav-item nav-link">
                    Home
                  </NavLink>
                  <NavLink to="/shop" className="nav-item nav-link">
                    Shop
                  </NavLink>
                  <NavLink to="/single" className="nav-item nav-link">
                    Single Page
                  </NavLink>
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu m-0">
                      <NavLink to="/bestseller" className="dropdown-item">
                        Bestseller
                      </NavLink>
                      <NavLink to="/cart" className="dropdown-item">
                        Cart Page
                      </NavLink>
                      <NavLink to="/checkout" className="dropdown-item">
                        Checkout
                      </NavLink>
                      <NavLink to="/404" className="dropdown-item">
                        404 Page
                      </NavLink>
                    </div>
                  </div>
                  <NavLink to="/contact" className="nav-item nav-link me-2">
                    Contact
                  </NavLink>
                </div>

                <NavLink
                  to="/contact"
                  className="btn btn-secondary rounded-pill py-2 px-4 mb-3 mb-lg-0"
                >
                  <i className="fa fa-mobile-alt me-2" /> +0123 456 7890
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
