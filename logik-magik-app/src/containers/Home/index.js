import React from 'react';
import './index.module.css';
import Carousel from './components/carousel';

const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                        <a className="navbar-brand" href="#">Portfolio</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="page-content-wrapper" >
                <div className="container-fluid">
                   <div className="row">
                      <div className="col-lg-9 col-sm-12"> 
                        <Carousel />
                    
                        {/* <?php 
                            include 'xhomepage/jumbotron.php';
                        ?>    
                        
                        <?php 
                            include 'xhomepage/textual.php';
                        ?> 
                    
                        <?php 
                            include 'xhomepage/gallery.php';
                        ?> 
                    
                        <?php 
                            include 'xhomepage/bottom1.php';
                        ?> 
                    
                        <?php 
                            include 'xhomepage/quote.php';
                        ?>
                        <?php 
                            include 'xhomepage/footer.php';
                        ?> */}

                      </div>
                       
                      <div className="col-lg-3 col-sm-0">
                            {/* <?php
                                include 'right_sidebar.php';
                            ?>  */}
                      </div>
                   </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home;
