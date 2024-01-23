import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';
import { Pause, Play, CaretRight, CaretLeft } from "phosphor-react";
const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const CarouselContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const CarouselSlide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  height: auto; /* Maintain aspect ratio */
`;

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const togglePause = () => {
        setPaused(!paused);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (!paused) {
                nextSlide();
            }
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(timer); // Clear interval on unmount
    }, [paused]);

    return (
        <>
            <CarouselWrapper>
                <CarouselContainer
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <CarouselSlide key={index}>
                            <Image src={image} alt={`Slide ${index + 1}`} />
                        </CarouselSlide>
                    ))}
                </CarouselContainer>
            </CarouselWrapper>
            <Box display={'flex'} alignItems={'center'} marginTop={2}    justifyContent={'center'}>

                <Button onClick={prevSlide}><CaretLeft size={32} /></Button>
                <Button onClick={togglePause}>{paused ? <Play size={32} /> : <Pause size={32} />}</Button>
                <Button onClick={nextSlide}><CaretRight size={32} /></Button>
            </Box>
        </>
    );
};

export default Carousel;
