import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$10', image: 'https://m.media-amazon.com/images/I/41Leu3gBUFL.jpg'},
    {id: 2, name: 'Macbook', description: 'Apple laptop.', price: '$50', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000'},
    {id: 3, name: 'Headphones', description: 'Bluetooth headphones.', price: '$15', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/j/b/jbl_jbllive500btblu_1.jpg?rnd=20200526195200'}
];

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>

    )
    
}

export default Products;