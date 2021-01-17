import React, { useState } from "react"
import { db, storage } from "../firebase"
//import { db, storage } from "../../firebase/config"
const Product = () => {
    const [name, setName] = useState(null)
    const [price, setPrice] = useState(null)
    const [material, setMaterial] = useState("")
    const [shipping, setShipping] = useState("")
    const [weight, setWeight] = useState(null)
    const [width, setWidth] = useState(null)
    const [length, setLength] = useState(null)
    const [height, setHeight] = useState(null)
    const [images, setImage] = useState(null)

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setImage(await fileRef.getDownloadURL());
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await db.collection("products").add({
            images,
            name,
            price,
            shipping,
            weight,
            width,
            length,
            height,
            material,
            createdDate: Date().toLocaleString()
        })
            .then(() =>
                setName(""),
                setPrice(""),
                setShipping(''),
                setWeight(""),
                setWidth(""),
                setLength(""),
                setHeight(""),
                setMaterial(""),
                setImage(""))
    };
    return (
        <div className="container" style={{ marginBottom: "20%" }}>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" placeholder="Name"
                        value={name}
                        name="name"
                        required
                        onChange={e => setName(e.currentTarget.value)} />
                </div>
                <div className="form-group">
                    <label >Price</label>
                    <input type="number" min="0" className="form-control" placeholder="Price"
                        value={price}
                        name="price"
                        required
                        onChange={e => setPrice(e.currentTarget.value)} />
                    <small className="form-text text-muted">Le prix doit être en dinar (DT)</small>
                </div>

                <div className="form-group">
                    <label>Material</label>
                    <input type="text" className="form-control" placeholder="Material"
                        value={material}
                        name="material"
                        required
                        onChange={e => setMaterial(e.currentTarget.value)} />
                </div>

                <div className="form-group">
                    <label >Shipping</label>
                    <input type="text" className="form-control" placeholder="Shipping"
                        value={shipping}
                        name="shipping"
                        required
                        onChange={e => setShipping(e.currentTarget.value)} />
                </div>

                <div className="form-group">
                    <label >Length</label>
                    <input type="number" min="0" className="form-control" placeholder="Length"
                        value={length}
                        name="length"
                        required
                        onChange={e => setLength(e.currentTarget.value)} />
                    <small className="form-text text-muted">La Longueur doit être en centimètres (cm) </small>
                </div>

                <div className="form-group">
                    <label>Height</label>
                    <input type="number" min="0" className="form-control" placeholder="Height"
                        value={height}
                        name="height"
                        required
                        onChange={e => setHeight(e.currentTarget.value)} />
                    <small className="form-text text-muted">L'hauteur doit être en centimètres (cm) </small>
                </div>

                <div className="form-group">
                    <label >Width</label>
                    <input type="number" min="0" className="form-control" placeholder="Width"
                        value={width}
                        name="width"
                        required
                        onChange={e => setWidth(e.currentTarget.value)} />
                    <small className="form-text text-muted">La Largeur doit être en centimètres (cm) </small>
                </div>
                <div className="form-group">
                    <label >Weight</label>
                    <input type="number" min="0" className="form-control" placeholder="Weight"
                        value={weight}
                        name="weight"
                        required
                        onChange={e => setWeight(e.currentTarget.value)} />
                    <small className="form-text text-muted">Le Poids doit être en gramme (g) </small>
                </div>
                {/* <button>Submit</button> */}
                <div className="form-group">
                    <label >Image</label>
                    <input type="file" className="form-control" placeholder="Image"
                        name="image"
                        required
                        onChange={onFileChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Product