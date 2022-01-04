import styled from "styled-components"
import Topbar from "../components/Topbar"
import Footer from "../components/Footer"

import photo from '../images/p.png'
import { Add, Remove } from "@material-ui/icons"

import {tablet} from "../responsive"
import {desktop} from "../responsive"

const Container = styled.div`
`
const Wrapper = styled.div`
    margin-top: 30px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${tablet({padding: '20px'})}
    ${desktop({flexDirection: 'row'})}
    


`
const ImageContainer = styled.div`
width: 100vw;
text-align: center;
${tablet({width: '80vw'})}
`
const Image = styled.img`
width: 80%;
${desktop({})}
    
`
const InfoContainer = styled.div`
display: flex;
flex-direction: column; 
`
const Title = styled.h1`
text-align: center;
font-size: 25px;
margin: 10px 0;
${tablet({fontSize: '40px'})}
`
const Desc = styled.p`
font-size: 14px;
font-weight: bolder;
${tablet({fontSize: '18px'})}
${desktop({margin: '20px 0'})}

    
`
const Price = styled.span`
display: inline-block;
margin-top: 10px;
color: green;
font-weight: bold;
${tablet({fontSize: '25px'})}
`
const Line = styled.h4`
margin: 5px 0;
${tablet({margin: '10px 0', fontSize: '20px'})}
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-around;
${desktop({order: '10', marginTop: '20px', justifyContent: 'flex-start'})}
    
`
const FilterTitle = styled.span`
    margin-right: 5px;
    ${tablet({fontSize: '20px'})}
`
const FilterColor = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: ${props=>props.color};
    ${tablet({width: '30px', height: '30px'})}
`
const Filter = styled.div`
display: flex;
${desktop({marginRight: '30px'})}
`
const FilterCaliber = styled.select`
${tablet({ fontSize: '16px'})}
    
`
const FilterCaliberOption = styled.option`
    
`
const AddContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 20px 0;
    align-items: center;
    justify-content: center;
`
const AmountContainer = styled.div`
`
const Amount = styled.span`
text-align: center;
display: inline-block;
width: 40px;
height: 40px;
border-radius: 10px;
border: 1px solid black;
font-size: 30px;
margin: 0 5px;

`

const Button = styled.button`
    padding: 5px 10px;
    font-size: 15px;
    background-color: white;
    border: 2px solid black;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 5px;
    margin-left: 20px;
    cursor: pointer;
    transition: .3s;
    :hover{
        background-color: #d6d5d5;
    }
    ${tablet({padding: '10px 15px', fontSize: '20px', marginLeft: '50px'})}
    ${desktop({marginLeft: '80px'})}

`
const Info = styled.div`
    
`

const Product = () => {
    return (
       <Container>
           <Topbar/>
           <Wrapper>
               <ImageContainer>
                   <Image src = {photo}/>
               </ImageContainer>
               <Info>
               <InfoContainer>
                    <FilterContainer>
                         <Filter>
                             <FilterTitle>Kolor</FilterTitle>
                            <FilterColor color="black"/>
                             <FilterColor color="brown"/>
                             <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Kaliber</FilterTitle>
                            <FilterCaliber>
                                <FilterCaliberOption>.22</FilterCaliberOption>
                                <FilterCaliberOption>9mm</FilterCaliberOption>
                                <FilterCaliberOption>.45</FilterCaliberOption>
                            </FilterCaliber>
                        </Filter>
                   </FilterContainer>
                   <Title>
                       Pistolet CZ P-10 M
                   </Title>
                   <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quia saepe earum magnam dicta facere veniam molestiae tempora. Laboriosam, aliquam.</Desc>
                   <Line>Kaliber: 9mm</Line>
                   <Line>Amunicja: 9x19</Line>
                   <Line>Magazynek: 7szt.</Line>
                   <Line>Wymiary: 15,3x2,3x 12,3cm</Line>
                   <Price>2499 zł</Price>
               </InfoContainer>
               <AddContainer>
                   <AmountContainer>
                       <Remove style ={{cursor: 'pointer'}}/>
                       <Amount>1</Amount>
                       <Add style={{cursor: 'pointer'}}/>
                   </AmountContainer>
                   <Button>Dodaj do koszyka</Button>
               </AddContainer>
               </Info>
           </Wrapper>
           <Footer/>

       </Container>
    )
}

export default Product

