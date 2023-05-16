import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    ${mobile({ justifyContent: "space-around" })}
    ${mobile({ padding: "10px 0px" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
    display: flex;
    align-items: center;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);

    return (
        <Wrapper>
            <StyledLink to={"/"}>
                <Logo>STYLE POINT</Logo>
            </StyledLink>
            <Right>
                <SearchContainer>
                    <Input placeholder="Search" />
                    <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
                </SearchContainer>
                <StyledLink to={"/register"}>
                    <MenuItem>REGISTER</MenuItem>
                </StyledLink>
                <StyledLink to={"/login"}>
                    <MenuItem>SIGN IN</MenuItem>
                </StyledLink>
                <StyledLink to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </StyledLink>
            </Right>
        </Wrapper>
    );
};

export default Navbar;
