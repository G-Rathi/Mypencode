import React from 'react'
import EcomNavbar from '../components/EcomNavbar'
import EcomAnnouncement from '../components/EcomAnnouncement'
import EcomFooter from '../components/EcomFooter'
import styled from 'styled-components'
import { mobile, bmobile, tablet } from '../components/EcomResponsive'
import { Link } from 'react-router-dom';

const Container = styled.div`
        
        `;

const Wrapper = styled.div`
        padding: 20px;
        ${mobile({ padding: "10px" })}
        ${bmobile({ padding: "10px" })}
        `;

const Title = styled.h1`
        font-weight: 300;
        text-align: center;
        `;

const Top = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        `;

const TopButton = styled.button`
        padding: 10px;
        font-weight: 600;
        cursor: pointer;
        border:${props => props.type === "filled" && "none"};
        background-color:${props => props.type === "filled" ? "black" : "transparent"};
        color :${props => props.type === "filled" && "White"};
        `;

const TopTexts = styled.div`
        /* ${mobile({ display: "none" })}
        ${bmobile({ display: "none" })} */
        ${tablet({ display: "none" })}
        `;

const TopText = styled.span`
        text-decoration:underline;
        cursor:pointer;
        margin: 0px 10px;
        `;

const Bottom = styled.div`
        display:flex;
        justify-content: space-between;
        ${mobile({ flexDirection: "column" })}
        ${bmobile({ flexDirection: "column", margin: '20px' })}
        ${tablet({ flexDirection: "column", margin: '20px' })}
        `;

const Info = styled.div`
        flex:3;
        `;


const Product = styled.div`
        display:flex;
        justify-content: space-between;
        ${mobile({ flexDirection: "column" })}
        `;

const ProductDetail = styled.div`
        flex:2;
        display:flex;
        `;

const Image = styled.img`
        width: 200px;
        `;

const Details = styled.div`
        padding: 0px 20px;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        `;

const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductColor = styled.span`
        width: 20px;
        height: 20px;
        border-radius:50%;
        border: 1px solid gray;
        background-color: ${props => props.color};
        `;

const ProductSize = styled.span``;

const PriceDetail = styled.span`
        flex:1;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        `;

const ProductAmountContainer = styled.div`
        display: flex;
        align-items: center;
        margin-bottom: 20px; 
        `;
const ProductAmount = styled.div`
        font-size: 25px;
        margin: 5px;
        ${mobile({ margin: "5px 15px" })}
        `;
const ProductPrice = styled.div`
        font-size: 30px;
        font-weight: 200;
        ${mobile({ marginBottom: "20px" })}
        `;

const Hr = styled.hr`
        background-color: #e0d5d5;
        border: none;
        height: 1px;
        `;

const Summary = styled.div`
        flex:1;
        border: .5px solid lightgray;
        border-radius: 10px;
        padding: 20px;
        height: 50vh;
        /* ${mobile({ margin: '20px' })}
        ${bmobile({ margin: '20px' })} */
        ${tablet({ margin: '20px' })}
        `;

const SummaryTitle = styled.h1`
        font-weight: 200;
        `;

const SummaryItem = styled.div`
        margin: 30px 0px;
        display: flex;
        justify-content: space-between;
        font-weight: ${props => props.type === "total" && "500"};
        font-size: ${props => props.type === "total" && "25px"};
        `;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
        width: 100%;
        padding: 10px;
        background-color: darkblue;
        color: white;
        font-weight: 600;
        font-size: 17px;
        cursor:pointer; 
        `;


const EcomCart = () => {
    return (
        <Container>
            <EcomNavbar />
            <EcomAnnouncement />
            <Wrapper>
                <Title>Your Bag</Title>

                <Top>
                    <Link to="/"><TopButton>CONTINUE SHOPPING</TopButton></Link>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>

                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://www.pngkey.com/png/full/68-680528_keep-calm-watercolor-boxer-t-shirt-shirt-ships.png" />
                                <Details>
                                    <ProductName><b>Product :</b>Half sleeves Nike T-Shirt</ProductName>
                                    <ProductID><b>ID :</b> 851382749</ProductID>
                                    <ProductColor color="white" />
                                    <ProductSize><b>Size :</b> L</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <i class="fa-solid fa-plus" style={{ cursor: "pointer" }} />
                                    <ProductAmount> 1 </ProductAmount>
                                    <i class="fa-solid fa-minus" style={{ cursor: "pointer" }} />
                                </ProductAmountContainer>
                                <ProductPrice> $ 20 </ProductPrice>
                            </PriceDetail>
                        </Product>

                        <Hr />

                        <Product>
                            <ProductDetail>
                                <Image src="https://www.pngkey.com/png/full/95-951919_picture-of-460-thunder-shoe.png" />
                                <Details>
                                    <ProductName><b>Product :</b>Thunder Shoes</ProductName>
                                    <ProductID><b>ID :</b> 95498735172</ProductID>
                                    <ProductColor color="gray" />
                                    <ProductSize><b>Size :</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <i class="fa-solid fa-plus" style={{ cursor: "pointer" }} />
                                    <ProductAmount> 2 </ProductAmount>
                                    <i class="fa-solid fa-minus" style={{ cursor: "pointer" }} />
                                </ProductAmountContainer>
                                <ProductPrice> $ 30 </ProductPrice>
                            </PriceDetail>
                        </Product>

                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <EcomFooter />
        </Container>
    )
}

export default EcomCart