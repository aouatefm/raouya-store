import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import {db} from "../firebase";
import {ShippingIcon} from '../../assets/icons'
import { formatNumber } from '../../helpers/utils';
function useProduct(id) {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        db.collection('products').doc(id).get()
            .then((snapshot) => {
                const newProduct = snapshot.data();
                setProduct(newProduct);
            })
    }, [])
    return product
}
const SingleProduct = () => {
    let { id } = useParams();
    const product = useProduct(id);
    return (
        <div class="container">
            <h1 class="my-4" ></h1>
            <div class="row">
                <div class="col-md-8">
                    <img class="img-fluid" src={product.images} alt="" />
                </div>
                <div class="col-md-4">
                    <h1 className="my-3">{product.name}</h1>
                    <span>Reference : </span><span> {product.reference}</span><br/>
                    <ShippingIcon width={"30px"}/> <span> {product.shipping}</span>
                    <h1> {formatNumber(product.price)}</h1>
                    <form className="form-inline">
                        <input type="number" className="form-control mr-1 w-25" defaultValue={1} min={1} w-25/>
                            <button className="btn btn-dark">Add</button>
                    </form>
                    <h3 class="my-3">Project Details</h3>
                    <table className="table table-hover ">
                        <tr>
                            <th scope="row">Height</th>
                            <td>{product.height} cm / {product.height/100} m</td>
                        </tr>
                        <tr>
                            <th scope="row">Length</th>
                            <td>{product.length} cm / {product.length/100} m</td>
                        </tr>
                        <tr>
                            <th scope="row">Width</th>
                            <td>{product.width} cm / {product.width/100} m</td>
                        </tr>
                        <tr>
                            <th scope="row">Weight</th>
                            <td>{product.weight} g / {product.weight/1000} kg</td>
                        </tr>
                        <tr>
                            <th scope="row">Material</th>
                            <td>{product.material}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <main>
                <h3 className="my-4">Video</h3>
                <div  className="container">
                    <iframe width="1300" height="500" src="https://www.youtube.com/embed/GPX_cYkjfgk"
                         frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        className="responsive-iframe"
                        allowFullScreen/>

                </div>
            </main>
            <h3 className="my-4">Details</h3>
                <p> Notre attention avec cette sculpture, il nous demande de nous regarder a l´intérieur et de réfléchir
                    sur ce qui est important. Le calme et le silence qui donnent son nom a la sculpture sont un bon
                    début pour y arriver..</p>
                <h3 class="my-4">Related Projects</h3>
            <div class="row">
                <div class="col-md-3 col-sm-6 mb-4">
                    <a href="#">
                        <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
                    </a>
                </div>
                <div class="col-md-3 col-sm-6 mb-4">
                    <a href="#">
                        <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
                    </a>
                </div>
                <div class="col-md-3 col-sm-6 mb-4">
                    <a href="#">
                        <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
                    </a>
                </div>
                <div class="col-md-3 col-sm-6 mb-4">
                    <a href="#">
                        <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
                    </a>
                </div>
            </div>


        </div>
    )
}
export default SingleProduct