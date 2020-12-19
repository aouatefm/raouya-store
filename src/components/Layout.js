import React from 'react'
import './layout.scss'
const Layout = ({ title, description }) => {
    return (
        <div>
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
        </div>
    )
}
export default Layout