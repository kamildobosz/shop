import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Topbar from '../components/Topbar'
import {tablet} from "../responsive"

const Container = styled.div`
padding: 5px;
    
`
const Title = styled.h1`
margin: 20px 10px;
font-size: 30px;
text-align: center;
${tablet({fontSize: '45px'})}
    
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-around;

    
`
const Filter = styled.div`
    
`
const FilterText = styled.span`
    font-size: 15px;
    font-weight: bold;
    margin-right: 5px;
    ${tablet({fontSize: '20px'})}
`

const Select = styled.select`
padding: 2px 5px;
${tablet({fontSize: '18px'})}
    
`
const Option = styled.option`
`

const ProductList = () => {
    return (
        <Container>
            <Topbar/>
            <Title>Wybieraj do woli</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filtruj:
                    </FilterText>
                    <Select>
                        <Option disabled selected>Producent</Option>
                        <Option>CZ</Option>
                        <Option>Glock</Option>
                        <Option>Sig</Option>
                        <Option>XDM</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sortuj:
                    </FilterText>
                    <Select>
                        <Option selected>Najnowsze</Option>
                        <Option>Najtańsze</Option>
                        <Option>Najdroższe</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
