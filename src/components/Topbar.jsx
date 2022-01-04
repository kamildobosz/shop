import Badge from '@material-ui/core/Badge';

import {tablet} from "../responsive"
import {desktop} from "../responsive"

import { FiberNew, FitnessCenter, Person, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
max-width: 100vw;
height: 100px;
background-color: white;
`

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
padding:15px 10px 5px 10px;
justify-content: space-between;
align-items: center;
${tablet({flexWrap: 'nowrap', height: '100px'})}
`

const Left = styled.div`
flex: 3;
display: flex;
align-items: center;
${tablet({flex: 1})}
`
const Hamburger = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-between;
width: 20px;
height: 15px;
${desktop({width: '30px', height: '24px'})}

`

const Line = styled.span`
height: 3px;
background-color: black;
`

const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0 0 0 10px;
height: 20px;
${desktop({height: '28px'})}
`

const Name = styled.h1`
padding: 5px 0;
font-size: 18px;
font-family: 'Lato', sans-serif;
${desktop({fontSize:'26px', padding: '5px'})}
`


const Right = styled.div`
flex: 2;
display:flex;
align-items:center;
justify-content: space-around;
height: 30px;
${tablet({order: 3, flex: 1})}
${desktop({justifyContent: 'flex-end'})}
`
const MenuLink = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 10px;
transition: .3s;
:hover{
  color: red
}
${tablet({fontSize: '12px'})}
${desktop({fontSize: '16px', cursor: 'pointer', marginRight: '40px' })}
`




const SearchContainer = styled.div`
display: flex;
align-items: center;
width: 100%;
margin: 10px 0;
padding: 5px 5px;
  border: 1px solid black;
  ${tablet({flex: 1})}
`

const Input = styled.input`
  border: none;
  width: 95%;
  ${desktop({fontSize: '15px'})}
`

const Topbar = () => {
    return (
      <Container>
        <Wrapper>
          <Left>
          <Hamburger>
              <Line></Line>
              <Line></Line>
              <Line></Line>
            </Hamburger>
            <Logo>
              <FitnessCenter />
              <Name>Kamil Dobosz</Name>
            </Logo>
          </Left>
          <Right>
            <MenuLink>
                    <FiberNew/>
              Nowy
            </MenuLink>
            <MenuLink>
                    <Person/>
              Zaloguj
            </MenuLink>
            <MenuLink>
               <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined/>
                </Badge>
                Koszyk
            </MenuLink>
          </Right>
          <SearchContainer>
         <Input placeholder='Szukaj...'/>
         <Search style={{ fontSize: '16px'}}/>
        </SearchContainer>
        </Wrapper>
        
      </Container>
    )
}

export default Topbar
