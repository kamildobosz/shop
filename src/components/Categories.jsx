import React from "react";
import styled from "styled-components";
import { categories } from "../data/data_categories";
import CategoryItem from "./CategoryItem";
import {tablet} from "../responsive"
import {desktop} from "../responsive"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${tablet({flexDirection:'row'})}
    ${desktop({justifyContent: 'space-around'})}
    

`
const Title = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 30px;
    margin: 30px 0;
    ${tablet({fontSize: '40px'})};
    ${desktop({fontSize: '50px'})}
`

const Categories = () => {
    return ( 
    <Container>
        <Title>Czego szukasz?</Title>
        {categories.map(item =>(
            <CategoryItem item = {item} key = {item.id}/>
        ))}

    </Container> );
}
 
export default Categories;