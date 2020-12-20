import React, { Component, useEffect, useState } from 'react'
import './dashboard.scss'
import { db } from './firebase'
function useProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        db.collection('products')
            .onSnapshot((snapshot) => {
                const newProducts = snapshot.docs.map((doc) => ({
                    ...doc.data()
                }))
                setProducts(newProducts);
            })
    }, [])
    return products
}
function deleteProduct(id) {
    db.collection('products').doc(id).delete()
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
                                <a href="#" class="btn btn-secondary"><span>Add New User</span></a>
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
                                    <tr key={product.id} product={product} >
                                        <td>{product.createdDate}</td>
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
                                            <a href="#" class="delete" title="Delete" data-toggle="tooltip" onClick={deleteProduct('mTnqeLwzrMRZSttSoSMC')}> Delete</a>
                                            <a href="#" class="settings" title="Settings" data-toggle="tooltip">

                                            </a>
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