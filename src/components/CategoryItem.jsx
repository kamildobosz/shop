import React from "react";
import styled from "styled-components";
import { tablet } from "../responsive"
import { desktop } from "../responsive"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url(${props => props.img});
    background-size: cover;
    ${tablet({width:'50vw', height: '50vh', justifyContent:'space-around'})}
    ${desktop({width:'23vw', height: '50vh'})}
`

const Title = styled.h1`
width: 100%;
padding: 10px;
text-align: center;
font-size: 35px;
color: white;
margin: auto;
background-color: rgba(0,0,0, 0.7);
${tablet({margin: '25vh auto 5vh auto', })}

`
const Button = styled.button`
padding: 5px 10px;
font-size: 25px;
background: transparent;
color: white;
background-color: rgba(192, 25, 25, 0.884);
border: none;
margin-bottom: 30vh;
cursor: pointer;
transition: .3s;
:hover{
    background-color: rgba(94, 11, 11, 0.884);
}

`

const CategoryItem = ({item}) => {
    return ( 
        <Container img={item.img} >
            <Title>{item.title}</Title>
            <Button>Zobacz</Button>
        </Container>
     );
}
 
export default CategoryItem;