import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import dataSlider from "../data/data_slider"

import { tablet } from "../responsive";
import { desktop} from "../responsive"

const Container = styled.div`
max-width: 100vw;
height: calc(100vh - 100px);
display: flex;
position: relative;
overflow: hidden;
`

const Arrow = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 50%;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && '5px'};
right: ${props => props.direction === "right" && '5px'};
margin: auto;
background-color: rgba(255, 255, 255, 0.8); 
z-index: 1;
transition: .3s;
cursor: pointer;
:hover{
    background-color: rgba(155,155,155,0.8);
}
${desktop({width: '50px', height: '50px', marginLeft: '15px', marginRight: '15px'})}
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    position: relative;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: .5s ;
`
const Dark = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
opacity: .5;
background-color: black;
`

const Slide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
    min-width: 100vw;
    height: 100%;
    background-image: url(${props => props.img});
    background-size: cover;
`

const Title = styled.h1`
padding: 5px;
font-size: 30px;
color: white;
z-index: 1;
${tablet({fontSize: '50px'})}
${desktop({fontSize: '60px'})}

`

const Desc = styled.p`
padding: 5px 10px;
font-size: 15px;
text-align: center;
font-weight: bolder;
color: white;
z-index: 1;
${tablet({fontSize: '20px'})}
${desktop({fontSize: '24px'})}

`
const Button = styled.button`
padding: 5px 10px;
margin-top: 50px;
font-size: 20px;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 2px;
border: none;
background-color: rgba(192, 25, 25, 0.884);
color: white;
z-index: 1;
transition:.3s;
cursor: pointer;
:hover{
    background-color: rgba(94, 11, 11, 0.884);
}
${tablet({fontSize: '23px', padding: '15px 20px', marginTop: '30px'})}
`



const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const lenght = (dataSlider.length -1)

    const handleClick = (direction)=>{
    
        if(direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : lenght)
        } else{
            setSlideIndex(slideIndex < lenght ? slideIndex+1 : 0)
        }
    }

    return ( 
        <Container>
            <Arrow direction='left' onClick={()=>handleClick('left')}> 
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {dataSlider.map((item) =>(
                    <Slide img={item.img} key={item.id}>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Sprawdź</Button>
                    </Slide>
                ))}
                <Dark/>
            </Wrapper>
            <Arrow direction = 'right'  onClick={()=>handleClick('right')}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
     );
}
 
export default Slider;