import React from 'react'
import styled from 'styled-components'
import EcomNavbar from '../components/EcomNavbar'
import EcomAnnouncement from '../components/EcomAnnouncement'
import EcomProducts from '../components/EcomProducts'
import EcomNewsLetter from '../components/EcomNewsLetter'
import EcomFooter from '../components/EcomFooter'
import { mobile } from '../components/EcomResponsive'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Container = styled.div`
         /* overflow: hidden; */
         `;

const Title = styled.h1`
        margin: 20px;
        `;

const FilterContainer = styled.div`
        display: flex;
        justify-content: space-between;
        `;

const Filter = styled.div`
        margin: 20px;
        ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })};
        `;

const FilterText = styled.span`
        font-size: 20px;
        font-weight: 600;
        margin-right: 20px;
        ${mobile({ marginRight: "0" })};
        `;

const Select = styled.select`
        padding: 10px;
        margin-right: 20px;
        background-color: white;
        cursor:pointer;
        ${mobile({ margin: "10px 0px" })};
        `;
const Option = styled.option`
        `;

const EcomProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/ecom/")[2];
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState({})

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    }

    const handleSort = (e) => {
        const value = e.target.value;
        setSort({
            ...sort,
            [e.target.name]: value,
        });
    }

    console.log(sort);
    return (
        <Container>

            <EcomNavbar />

            <EcomAnnouncement />
            <Title>{cat}</Title>

            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option >Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select name="sort" onChange={handleSort}>
                        <Option >Newest</Option>
                        <Option>Price (Low to High)</Option>
                        <Option>Price (High to Low)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <EcomProducts cat={cat} filters={filters} sort={sort} />
            <EcomNewsLetter />
            <EcomFooter />
        </Container>
    )
}

export default EcomProductList