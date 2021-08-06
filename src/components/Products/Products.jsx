import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Poduct/Product";

const products = [
    { id: 1, name: 'Shoes', description: 'Runing shoes', price: 'R$50', image: 'https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-zoom-tempo-next-masculino-CI9923-800-3.jpg' },
    { id: 2, name: 'Apple', description: 'Apple macbook', price: 'R$5000', image: 'https://img.ibxk.com.br/2021/05/07/07174347957310.jpg' },
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product)=> (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>    
                ))}
            </Grid>
        </main>
    )
}

export default Products;