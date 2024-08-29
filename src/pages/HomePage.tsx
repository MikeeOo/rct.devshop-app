// @ts-nocheck
import { JSX, useEffect, useState } from "react";
import Card from "../partials/Card.tsx";
import { API_URL } from "../data/constants.ts";

export default function HomePage(): JSX.Element {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`api.devshop-app.local/products`)
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

    return (
        <>
            <div className="grid min-h-screen grid-cols-4">
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}
