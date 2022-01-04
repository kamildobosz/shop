
import styled from "styled-components"

import photo from "../images/kar.jpg"

import {tablet} from "../responsive"

const Container = styled.div`
    background-image: url(${photo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding-top: 25vh;
    background-color: #18255255;
    height: 100vh;

`
const Title = styled.h1`
    margin-top: 20px;
    color: white;
    ${tablet({ fontSize: '50px'})}
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 90%;
    margin: 20px 0;
    ${tablet({minWidth: '40%'})}
`
const Input = styled.input`
    width: 100%;
   padding: 5px;
   margin: 8px;
   border: 1px solid black;
   border-radius: 10px;
   ${tablet({ fontSize: '20px'})}
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
    cursor: pointer;
    transition: .3s;
    border-radius: 10px;
    :hover{
        background-color: #c7c7c7;
    }
    ${tablet({ fontSize: '20px', width: '100%', padding:'10px 15px', marginTop: '20px'})}
`
const Link = styled.a`
    margin-top: 20px;
    font-size: 18px;
    color: white;
    text-decoration: underline;
    cursor: pointer;
    transition: .3s;
    :hover{
        color: #978a8a
    }
    ${tablet({ fontSize: '22px'})}
`
const Login = () => {
    return ( 
        <Container>
            <Wrapper>
                <Title>Zaloguj się</Title>
                <Form>
                    <Input placeholder='Login'/>
                    <Input placeholder='Hasło'/>
                    <Button>Zaloguj</Button>
                    <Link>Zapomniałeś hasła?</Link>
                    <Link>Stwórz nowe konto</Link>
                </Form>
            </Wrapper>
        </Container>
     );
}
 
export default Login;