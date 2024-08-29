// @ts-nocheck
import { JSX, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../data/constants.ts";

export default function ProductPage(): JSX.Element {
    const { id }: string = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`${API_URL}/products/${id}`)
        // fetch(`${API_URL}/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    return (
        <div className="min-h-screen">
            <Link to="/">Back</Link>
            <div>{product.name}</div>
            <div>{product.description}</div>
        </div>
    );
}
