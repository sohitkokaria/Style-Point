import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethod";

const Container = styled.div`
    margin: 100px auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: space-evenly;
    row-gap: 20px;
    column-gap: 1%;
    width: 80%;
`;

const Products = ({ category, filters, sort }) => {
    // console.log(category, filters, sort);
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const isHome = !location.pathname.includes("products");

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(
                    category
                        ? `/products/${category}`
                        : "/products"
                );
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    }, [category]);

    useEffect(() => {
        (category || filters) &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) => item[key].includes(value))
                )
            );
    }, [products, category, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
        } else if (sort === "asc") {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
        } else {
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
        }
    }, [sort]);

    return (
        <Container>
            {(
                ((category || filters) && filteredProducts) ||
                (isHome && products.slice(0, 8)) ||
                products
            ).map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;
