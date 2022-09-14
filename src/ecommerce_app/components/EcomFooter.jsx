import React from 'react'
import styled from "styled-components"
import { mobile, bmobile, tablet } from "./EcomResponsive";
import { Link } from 'react-router-dom';




const Container = styled.div`
        display:flex;
        background-color: black;
        color: white;
        ${mobile({ flexDirection: "column" })}
        ${bmobile({ flexDirection: "column" })}
        ${tablet({ flexDirection: "column" })}
        `;


const Left = styled.div`
        flex:1;
        display:flex;
        flex-direction: column;
        padding: 20px;
        `;

const Logo = styled.h1``;

const Desc = styled.p`
                margin: 20px 0px;
                `;

const SocialContainer = styled.div`
                display:flex;
                ${mobile({ justifyContent: "center" })};
                ${bmobile({ justifyContent: "center" })};
                ${tablet({ justifyContent: "center" })};
                `;

const SocialIcon = styled.div`
                width: 40px;
                height: 40px;
                border-radius:50%;
                background-color:${props => props.color};
                color:white;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 20px;
                transition: all 0.5s ease;
                cursor: pointer;


                &:hover{
                        transform: scale(1.5);
                }
                `;

const CopyRight = styled.div`
                display: flex;
                flex-direction: column;
                align-items: center;
                ${mobile({ display: "none" })};
                ${bmobile({ display: "none" })};
                ${tablet({ display: "none" })};
                `;


const Center = styled.div`
        flex:1;
        padding: 20px;
        /* ${mobile({ display: "none" })}; */
        `;

const Title = styled.h3`
                margin-bottom: 30px;
                `;

const List = styled.ul`
                margin:0;
                padding: 0;
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                `;

const ListItem = styled.li`
                cursor:pointer;
                width: 50%;
                margin-bottom: 10px;
                transition: all 0.5s ease;


                &:hover{
                        transform: scale(1.1)
                }
                `;


const Right = styled.div`
        flex:1;
        padding: 20px;
        `;

const ContactItem = styled.div`
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                `;

const Payment = styled.img`
                /* width: 50%; */
                ${mobile({ width: "70%" })}
                ${bmobile({ width: "70%" })}
                ${tablet({ width: "70%" })}
                `;

const CopyRightEnd = styled.div`
        display:flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin-bottom: 20px;
        display:none;
        ${mobile({ display: "block", })}
        ${bmobile({ display: "block", })}
        ${tablet({ display: "block", })}
        `;



const EcomFooter = () => {
    return (
        <Container>
            <Left>
                <Logo>E-Comm</Logo>
                <Desc>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque magni maiores labore eos molestiae illum dolorum, ratione saepe reiciendis, assumenda dolores at itaque sapiente nesciunt consequuntur similique officiis nobis excepturi.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='blue'>
                        <i class="fa-brands fa-facebook-f" />
                    </SocialIcon>
                    <SocialIcon color='pink'>
                        <i class="fa-brands fa-instagram" />
                    </SocialIcon>
                    <SocialIcon color='lightblue'>
                        <i class="fa-brands fa-twitter" />
                    </SocialIcon>
                    <SocialIcon color='red'>
                        <i class="fa-brands fa-pinterest" />
                    </SocialIcon>
                </SocialContainer>
                <CopyRight>
                    <hr style={{ width: "70%", marginTop: "50px" }} />
                    Copyright &#169; 2022 gecom.online, All Rights Reserved.
                </CopyRight>
            </Left>


            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem><Link to='/ecom' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></ListItem>
                    <ListItem><Link to='/ecom/cart' style={{ textDecoration: 'none', color: 'white' }}>Cart</Link></ListItem>
                    <ListItem><Link to='/ecom/products' style={{ textDecoration: 'none', color: 'white' }}>Man Fashion</Link></ListItem>
                    <ListItem><Link to='/ecom/products' style={{ textDecoration: 'none', color: 'white' }}>Woman Fashion</Link></ListItem>
                    <ListItem><Link to='/ecom/products' style={{ textDecoration: 'none', color: 'white' }}>Accessories</Link></ListItem>
                    <ListItem><Link to='/ecom' style={{ textDecoration: 'none', color: 'white' }}>My Account</Link></ListItem>
                    <ListItem><Link to='/ecom' style={{ textDecoration: 'none', color: 'white' }}>Order Tracking</Link></ListItem>
                    <ListItem><Link to='/ecom' style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link></ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Blogs</ListItem>
                </List>
            </Center>


            <Right>
                <Title>Contact</Title>

                <ContactItem><i class="fa-solid fa-location-dot" style={{ marginRight: "10px" }} />310 Welcome, Faridabad, Haryana 123456</ContactItem>

                <ContactItem><i class="fa-solid fa-phone" style={{ marginRight: "10px" }} />+91-9851******</ContactItem>

                <ContactItem><i class="fa-regular fa-envelope" style={{ marginRight: "10px" }} />contact@gecom.online</ContactItem>

                <Payment src="https://www.transparentpng.com/thumb/payment-method/WNusu8-payment-method-kinds-transparent-picture.png" />
            </Right>

            <CopyRightEnd>
                <hr style={{ width: "70%", margin: 'auto' }} />
                Copyright &#169; 2022 gecom.online, All Rights Reserved.
            </CopyRightEnd>


        </Container>
    )
}

export default EcomFooter