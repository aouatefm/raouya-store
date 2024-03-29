import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../helpers/utils';
import {CartContext} from "../contexts/cart/CartContext";
const ProductItem = ({ product }) => {
    const { addProduct, cartItems, increase } = useContext(CartContext);
    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }
    return (
        <div className="card card-body" >
            <img style={{ display: "block", margin: "0 auto 10px", maxHeight: "300px" }} className="img-fluid"
                src={product.images + '?v=' + product.id} alt="" />
            <p>{product.name}</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
            <div className="text-right">
                {/*<Link to={{ pathname: `/products/${product.id}`, prod: product }} className="btn btn-link btn-sm mr-2" >Details</Link>*/}
                <Link to={{ pathname: `/products/${product.id}`}} className="btn btn-link btn-sm mr-2" >Details</Link>
                {
                    isInCart(product) &&
                    <button
                        onClick={() => increase(product)}
                        className="btn btn-outline-dark btn-sm">Add more</button>
                }
                {
                    !isInCart(product) &&
                    <button
                        onClick={() => addProduct(product)}
                        className="btn btn-primary btn-sm">Add to cart</button>
                }
            </div>
        </div >

    );
}

export default ProductItem;