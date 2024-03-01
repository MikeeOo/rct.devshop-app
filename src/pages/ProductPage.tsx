// @ts-nocheck
import { JSX } from "react";
import { products } from "../../ignore/products.ts";
import { Link, useParams } from "react-router-dom";

export default function ProductPage(): JSX.Element {
    const { id } = useParams();
    const product = products.find((product) => product.id === id);
    return (
        <div className="min-h-screen">
            <Link to="/">Back</Link>
            <div>{product.name}</div>
            <div>{product.description}</div>
        </div>
    );
}
