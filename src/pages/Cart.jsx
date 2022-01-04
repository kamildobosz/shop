import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

import photo from "../images/p.png"

import {tablet} from '../responsive'
import {desktop} from '../responsive'


const Container =  styled.div`
`
const Wrapper = styled.div`
padding: 5px;
  ${tablet({ padding: '20px'})}
  `

const Title = styled.h1`
margin: 10px 0;
text-align: center;
font-weight: 300;
${tablet({ fontSize: '40px'})}`


const Top = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
${tablet({ justifyContent: 'space-around', marginTop: '30px'})}
`
const TopButton = styled.button`
    padding: 5px;
    margin-bottom: 10px;
    width: 45vw;
    font-weight: bold;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
    transition: .3s;
    :hover{
        background-color: #b4b2b2;
    }
    ${tablet({ width: '30vw', padding: '10px 15px', fontSize: '20px'})}
    ${desktop({ width: '15vw', padding: '5px 10px', fontSize:'16px'})}
`

const TopTexts = styled.div`
width: 100vw;
display: flex;
justify-content: space-around;
align-items: center;
${desktop({order: '2', justifyContent: 'center', width: '20vw'})}
`
const TopText = styled.span`
    display: inline-block;
    padding: 5px;
    font-weight: bolder;
    text-decoration: underline;
    ${tablet({ fontSize: '18px'})}
`

const Bottom = styled.div`
display: flex;
flex-direction: column;
${desktop({marginTop: '40px'})}
`

const Info = styled.div`
`

const Product =  styled.div`
display: flex;
flex-direction: column;
${tablet({ flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center'})}
    
`
const ProductDetails =  styled.div`
      ${tablet({ display: 'flex', alignItems: 'center'})}
`
const Image = styled.img`
width: 70%;
margin-left: 15%;
margin-top: 10px;
${tablet({ width: '30%'})}
${desktop({width: '15%', margin: '0 3% 0 5%'})}
    
`
const Details =  styled.div`
display: flex;
flex-direction: column;
`
const ProductName =  styled.span`
    margin: 5px 10px;
`
const ProductID =  styled.span`
     margin: 5px 10px;
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 5px 10px;
`
const ProductCaliber = styled.span`
     margin: 5px 10px;
`
const PriceDetail = styled.div`
  ${tablet({ marginRight: '30px'})}
    
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const ProductAmount = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
margin: 0 10px;
border: 1px solid gray;
width: 30px;
height: 30px;
`
const ProductPrice = styled.span`
display: flex;
justify-content: center;
font-size: 20px;
color: green;
margin: 10px 0;
    
`
const Hr = styled.hr`
`
const Summary = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
border: 1px solid gray;
border-radius: 10px;
${desktop({maxWidth: '50vw', marginTop: '30px'})}
    
`
const SummaryTitle = styled.h2`
margin: 10px 0;
${tablet({ fontSize: '40px'})}
`
const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
`
const SummaryItemText = styled.span`
  ${tablet({ fontSize: '18px'})}
`
const SummaryItemPrice = styled.span`
    font-weight: bold;
    color: green;
    ${tablet({ fontSize: '22px'})}
`
const Button = styled.button`
    width: 40vw;
    padding: 5px 10px;
    margin: 10px 0;
    border: 2px solid black;
    background-color: white;
    font-weight: bold;
    cursor: pointer;
    transition: .3s;
    :hover{
        background-color: lightgrey;
    }
    ${tablet({ fontSize: '20px', padding: '10px 15px'})}
    ${desktop({width:'20vw'})}
`
const Cart = () => {
    return ( 
    <Container>
        <Topbar/>
        <Wrapper>
            <Title> Twój koszyk</Title>
            <Top>
                <TopButton>Kontynuuj zakupy</TopButton>
                <TopButton>Sprawdź teraz</TopButton>
                <TopTexts>
                    <TopText>Koszyk(2)</TopText>
                    <TopText>Ulubione(0)</TopText>
                </TopTexts>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetails>
                            <Image src={photo}/>
                            <Details>
                                <ProductName><b>Model:</b>CZ 75</ProductName>
                                <ProductID><b>ID:</b>837373337</ProductID>
                                <ProductCaliber><b>Kal.</b> 9mm</ProductCaliber>
                                <ProductColor color="black"/>
                            </Details>
                        </ProductDetails>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>7990 zł</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetails>
                            <Image src={photo}/>
                            <Details>
                                <ProductName><b>Model:</b>CZ 75</ProductName>
                                <ProductID><b>ID:</b>837373337</ProductID>
                                <ProductCaliber><b>Kal.</b> 9mm</ProductCaliber>
                                <ProductColor color="black"/>
                            </Details>
                        </ProductDetails>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>7990 zł</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Podsumowanie</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>
                            Całkowity koszt: 
                        </SummaryItemText>
                        <SummaryItemPrice>
                              120202
                        </SummaryItemPrice>
                    </SummaryItem>
                    <Button>Zamów</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>

    </Container> );
}
 
export default Cart;