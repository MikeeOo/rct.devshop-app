// @ts-nocheck
import { JSX, useEffect, useState } from "react";
import Card from "../partials/Card.tsx";
import { API_URL } from "../data/constants.ts";

export default function HomePage(): JSX.Element {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/products`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
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
