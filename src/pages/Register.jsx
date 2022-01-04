
import styled from "styled-components"

import photo from "../images/kar.jpg"

import {tablet} from '../responsive'
import { desktop } from "../responsive"

const Container = styled.div`
    background-image: url(${photo});
    background-position: center;
    background-size: cover;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background-color: #18255255;
    height: 100vh;

`
const Title = styled.h1`
    margin-top: 20px;
    color: white;
    ${tablet({ fontSize: '50px', marginTop: '100px'})}
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 90%;
    margin: 20px 0;
    ${tablet({ minWidth: '40%'})}
`
const Input = styled.input`
    width: 100%;
   padding: 5px;
   margin: 8px;
   border: 1px solid black;
   border-radius: 10px;
   ${tablet({ fontSize: '18px', margin: '12px'})}
`
const Agreement = styled.p`
    margin: 10px 0;
    color: white;
    ${tablet({ fontSize: '18px'})}
`
const Button = styled.button`
    width: 60%;
    padding: 5px 10px;
    background-color: white;
    border: 1px solid black;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bolder;
    letter-spacing: 1px;
    border-radius: 10px;
    cursor: pointer;
    transition: .3s;
    :hover{
        background-color: #d8d8d8;
    }
    ${tablet({ fontSize: '20px', padding: '10px 15px'})}
`

const Register = () => {
    return ( 
        <Container>
            <Wrapper>
                <Title>Załóż nowe konto</Title>
                <Form>
                    <Input placeholder='Imię'/>
                    <Input placeholder='Nazwisko'/>
                    <Input placeholder='Email'/>
                    <Input placeholder='Login'/>
                    <Input placeholder='Hasło'/>
                    <Input placeholder='Potwierdź hasło'/>
                    <Agreement>
                        Trochę zgody i zachodu
                    </Agreement>
                    <Button>Rejestruj</Button>
                </Form>
            </Wrapper>
        </Container>
     );
}
 
export default Register;