import React, { Component, useEffect, useState } from 'react'
import './dashboard.scss'
import { Link } from 'react-router-dom'
import { db } from './firebase'
import Moment from 'moment';
import Alert from 'react-bootstrap/Alert';
import { DeleteIcon } from '../assets/icons'
import { EditIcon } from '../assets/icons'

function useProducts() {
    const [products, setProducts] = useState([]);
    const [alert, showAlert] = useState(false);
    useEffect(() => {
        db.collection('products')
            .onSnapshot((snapshot) => {
                const newProducts = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProducts(newProducts);
            })
    }, [])
    return products
}
function deleteProduct(id) {
    db.collection("products").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}
const Dashboard = () => {
    const products = useProducts();

    return (
        <div class="container">
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-5">
                                <h2>Product <b>Management</b></h2>
                            </div>
                            <div class="col-sm-7">
                                <a href="#" class="btn btn-secondary"><span><Link to='/newproduct'>Add New Product</Link></span></a>
                                <a href="#" class="btn btn-secondary"><span>Export to Excel</span></a>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Date Created</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Material</th>
                                <th>Shipping</th>
                                <th>Length</th>
                                <th>Height</th>
                                <th>Width</th>
                                <th>Weight</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => (
                                    <tr key={product.id}  >
                                        <td>{Moment(product.createdDate).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                        <td><img src={product.images} class="avatar" alt="Avatar" width="100px" height="100px" /> </td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.material}</td>
                                        <td>{product.shipping}</td>
                                        <td>{product.length}</td>
                                        <td>{product.height}</td>
                                        <td>{product.width}</td>
                                        <td>{product.weight}</td>
                                        <td>
                                            <a href="#" class="delete" title="Delete" data-toggle="tooltip" onClick={() => deleteProduct(product.id)}>
                                                <DeleteIcon />

                                            </a>
                                            <a><EditIcon /></a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )
}
export default Dashboard;