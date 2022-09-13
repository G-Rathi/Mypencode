import styled from 'styled-components';
import React from 'react';
import { categories } from '../EcomData';
import EcomCategoryItem from './EcomCategoryItem';
import { bmobile, mobile } from './EcomResponsive';

const Container = styled.div`
        display: flex;
        padding: 20px;
        justify-content: space-between;
        ${mobile({ padding: "0px", flexDirection: "column" })}
        ${bmobile({ padding: "0px", flexDirection: "column" })}
        `;

const EcomCategories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <EcomCategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default EcomCategories;