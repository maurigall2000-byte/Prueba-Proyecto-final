import React from 'react'
import {useParams} from "react-router"
import{products} from "./HomeScreen"

export default function ProductDetailScreen() {
    /* useParams es un hook de reack router que nos trae un onjeto con todos los parametros de la url */
    const objeto=useParams()
    const product_selected=products.find(
        (product)=>{
            return Number(product.id)===Number(objeto.product_id)
        }
    )
return (
    <div>
        <h1>Detalles del producto: {product_selected.title}</h1>
    </div>
)
}
