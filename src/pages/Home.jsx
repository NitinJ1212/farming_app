import React from "react";

export default function Home() {
  return (
  <>
  <div className="container-fluid carousel bg-light px-0">
    <div className="row g-0 justify-content-end">
      <div className="col-12 col-lg-7 col-xl-9">
        <div className="header-carousel owl-carousel bg-light py-5">
          <div className="row g-0 header-carousel-item align-items-center">
            <div
              className="col-xl-6 carousel-img wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <img
                src="img/carousel-1.png"
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="col-xl-6 carousel-content p-4">
              <h4
                className="text-uppercase fw-bold mb-4 wow fadeInRight"
                data-wow-delay="0.1s"
                style={{ letterSpacing: 3 }}
              >
                Save Up To A $400
              </h4>
              <h1
                className="display-3 text-capitalize mb-4 wow fadeInRight"
                data-wow-delay="0.3s"
              >
                On Selected Laptops &amp; Desktop Or Smartphone
              </h1>
              <p className="text-dark wow fadeInRight" data-wow-delay="0.5s">
                Terms and Condition Apply
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight"
                data-wow-delay="0.7s"
                href="#"
              >
                Shop Now
              </a>
            </div>
          </div>
          <div className="row g-0 header-carousel-item align-items-center">
            <div
              className="col-xl-6 carousel-img wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <img
                src="img/carousel-2.png"
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="col-xl-6 carousel-content p-4">
              <h4
                className="text-uppercase fw-bold mb-4 wow fadeInRight"
                data-wow-delay="0.1s"
                style={{ letterSpacing: 3 }}
              >
                Save Up To A $200
              </h4>
              <h1
                className="display-3 text-capitalize mb-4 wow fadeInRight"
                data-wow-delay="0.3s"
              >
                On Selected Laptops &amp; Desktop Or Smartphone
              </h1>
              <p className="text-dark wow fadeInRight" data-wow-delay="0.5s">
                Terms and Condition Apply
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight"
                data-wow-delay="0.7s"
                href="#"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-lg-5 col-xl-3 wow fadeInRight"
        data-wow-delay="0.1s"
      >
        <div className="carousel-header-banner h-100">
          <img
            src="img/header-img.jpg"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
            alt="Image"
          />
          <div className="carousel-banner-offer">
            <p className="bg-primary text-white rounded fs-5 py-2 px-4 mb-0 me-3">
              Save $48.00
            </p>
            <p className="text-primary fs-5 fw-bold mb-0">Special Offer</p>
          </div>
          <div className="carousel-banner">
            <div className="carousel-banner-content text-center p-4">
              <a href="#" className="d-block mb-2">
                SmartPhone
              </a>
              <a href="#" className="d-block text-white fs-3">
                Apple iPad Mini <br /> G2356
              </a>
              <del className="me-2 text-white fs-5">$1,250.00</del>
              <span className="text-primary fs-5">$1,050.00</span>
            </div>
            <a href="#" className="btn btn-primary rounded-pill py-2 px-4">
              <i className="fas fa-shopping-cart me-2" /> Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Carousel End */}
  {/* Searvices Start */}
  <div className="container-fluid px-0">
    <div className="row g-0">
      <div
        className="col-6 col-md-4 col-lg-2 border-start border-end wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="p-4">
          <div className="d-inline-flex align-items-center">
            <i className="fa fa-sync-alt fa-2x text-primary" />
            <div className="ms-4">
              <h6 className="text-uppercase mb-2">Free Return</h6>
              <p className="mb-0">30 days money back guarantee!</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
        data-wow-delay="0.2s"
      >
        <div className="p-4">
          <div className="d-flex align-items-center">
            <i className="fab fa-telegram-plane fa-2x text-primary" />
            <div className="ms-4">
              <h6 className="text-uppercase mb-2">Free Shipping</h6>
              <p className="mb-0">Free shipping on all order</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <div className="p-4">
          <div className="d-flex align-items-center">
            <i className="fas fa-life-ring fa-2x text-primary" />
            <div className="ms-4">
              <h6 className="text-uppercase mb-2">Support 24/7</h6>
              <p className="mb-0">We support online 24 hrs a day</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
        data-wow-delay="0.4s"
      >
        <div className="p-4">
          <div className="d-flex align-items-center">
            <i className="fas fa-credit-card fa-2x text-primary" />
            <div className="ms-4">
              <h6 className="text-uppercase mb-2">Receive Gift Card</h6>
              <p className="mb-0">Recieve gift all over oder $50</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
        data-wow-delay="0.5s"
      >
        <div className="p-4">
          <div className="d-flex align-items-center">
            <i className="fas fa-lock fa-2x text-primary" />
            <div className="ms-4">
              <h6 className="text-uppercase mb-2">Secure Payment</h6>
              <p className="mb-0">We Value Your Security</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
        data-wow-delay="0.6s"
      >
        <div className="p-4">
          <div className="d-flex align-items-center">
            <i className="fas fa-blog fa-2x text-primary" />
            <div className="ms-4">
              <h6 className="text-uppercase mb-2">Online Service</h6>
              <p className="mb-0">Free return products in 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Searvices End */}
</>

  );
}
