import React, { useState, useEffect } from 'react'
import './productsGrid.scss'
import ProductItem from './ProductItem '
import { db } from '../firebase'
import Layout from "../../pages/Layout";

function useProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        db.collection('products')
            .onSnapshot((snapshot) => {
                const newProducts = snapshot.docs.map((doc) => ({
                    id: doc.id, ...doc.data()
                }))
                setProducts(newProducts);
            })
    }, [])
    return products
}
const ProductsGrid = () => {
    const products = useProducts();
    return (
        <div className="container">
            <Layout title="Raouia Store" description="**************" >
            </Layout>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {products.length} Products
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Search product" className="form-control" id="" />
                    </div>
                </div>
            </div>
            <div className="p">
                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsGrid
