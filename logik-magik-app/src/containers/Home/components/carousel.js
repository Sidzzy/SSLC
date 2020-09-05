import React from 'react';

const Carousel = () => (
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner">

      <div className="item active">
        <img src="images/carousel1.bmp" alt="carousel1"/>
        <div className="carousel-caption">
          <h3>Logic is Important</h3>
          <p>Come, Lets Code The Future!</p>
        </div>
      </div>

      <div className="item">
        <img src="images/carousel2.bmp" alt="carousel2"/>
        <div className="carousel-caption">
          <h3>Web & Android</h3>
          <p>If you are html, We'll add CSS!</p>
        </div>
      </div>
    
      <div className="item">
        <img src="images/carousel3.bmp" alt="carousel3"/>
        <div className="carousel-caption">
          <h3>24 x 7 Online Help</h3>
          <p>Our helping committee is always there for you!</p>
        </div>
      </div>
  
    </div>

    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>    
  );
export default Carousel;
