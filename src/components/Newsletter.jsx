import styled from "styled-components";

import photo from "../images/newsletter.jpg"

import {tablet} from "../responsive"
import {desktop} from "../responsive"

const Container = styled.div`
padding: 30px 5px;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
${desktop({maxHeight: '70vh'})}
`
const Title = styled.h1`
    margin: 5px;
    font-size: 30px;
    text-align: center;
    color: black;
    ${tablet({fontSize: '50px', margin: '20px'})}

`
const Desc = styled.p`
    margin: 5px;
    font-size: 14px;
    font-weight: bold;
    color: black;
    text-align: center;
    ${tablet({fontSize: '20px', margin: '20px'})}
`
const InputContainer = styled.div`
`

const Input = styled.input`
width: 90vw;
padding: 5px;
border: none;
${tablet({width: '50vw', height: '40px', fontSize: '20px'})}
${desktop({maxWidth: '400px'})}
    
`
const Button = styled.button`
width: 50vw;
padding: 5px 10px;
margin-top: 20px;
font-size: 20px;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 2px;
border: none;
background-color: rgba(192, 25, 25, 0.884);
color: white;
cursor: pointer;
transition: .3s;
:hover{
    background-color: rgba(85, 12, 12, 0.884); ;
}
${tablet({padding: '15px 20px'})}
${desktop({width: '200px'})}
`

const Img = styled.img`
    position: absolute;
    left:0;
    top: 0;
    width: 100vw;
    z-index: -1;
    opacity: 0.8;
    ${desktop({maxHeight: '60vh', objectFit: 'cover'})}
`
const Newsletter = () => {
    return ( 
    <Container>
        <Title>Newsletter</Title>
        <Desc>Zapisz się i otrzymuj jeszcze większe zniżki na nasz produkty</Desc>
        <InputContainer>
            <Input placeholder="Twój email"/>
        </InputContainer>
        <Button>Wyślij</Button>
        <Img src={photo}/>
    </Container> );
}
 
export default Newsletter;