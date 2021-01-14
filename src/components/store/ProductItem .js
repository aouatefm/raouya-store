import React from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../helpers/utils';
const ProductItem = ({ product }) => {
    return (

        <div className="card card-body" >
            <img style={{ display: "block", margin: "0 auto 10px", maxHeight: "300px" }} className="img-fluid"
                src={product.images + '?v=' + product.id} alt="" />
            <p>{product.name}</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
            <div className="text-right">
                <Link to={{ pathname: `/products/${product.id}`, prod: product }} className="btn btn-link btn-sm mr-2" >Details</Link>
                {/* updaaaaaaaaaaaaaate *************
                <button className="btn btn-outline-primary btn-sm">Add more</button> */}
                <button
                    className="btn btn-primary btn-sm">Add to cart</button>
            </div>
        </div >

    );
}

export default ProductItem;