import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import  CarouselItem  from "react-bootstrap/CarouselItem";
import Carousel  from "react-bootstrap/Carousel";
import slide_1 from '../../asset/slide_1.png'
import slide_2 from '../../asset/slide_2.png'

import './Carouselflowers.css';

export default function Carouselflowers(){
    return(
        <Carousel className="Carouselflowers">
               <Carousel.Item className="w-100 align-items-center">
            
         
                <img 
                    className="d-block w-100 "
                    src={slide_1}
                    alt="Slide 1" />

                    <Carousel.Caption>
                        <h3>Holiday Collections</h3>
                        <p>Best for your family.</p>

                    </Carousel.Caption>
                    
            </Carousel.Item>


            <CarouselItem>
            <img 
                    className="d-block w-100"
                    src={slide_2}
                    alt="Slide 2" />
                    <Carousel.Caption>
                        <h3>Romantic Dates</h3>
                        <p>Make her fall in love with you</p>

                    </Carousel.Caption>
                
            </CarouselItem>



            
            <CarouselItem>
            <img 
                    className="d-block w-100"
                    src={slide_2}
                    alt="Slide 2" />
                    <Carousel.Caption>
                        <h3>Romantic Dates</h3>
                        <p>Make her fall in love with you</p>

                    </Carousel.Caption>
                
            </CarouselItem>




            
            <CarouselItem>
            <img 
                    className="d-block w-100"
                    src={slide_2}
                    alt="Slide 2" />
                    <Carousel.Caption>
                        <h3>Romantic Dates</h3>
                        <p>Make her fall in love with you</p>

                    </Carousel.Caption>
                
            </CarouselItem>


        </Carousel>
    )
}