import { JSX } from "react";
import { products } from "../../ignore/products.ts";
import Card from "../partials/Card.tsx";

export default function HomePage(): JSX.Element {
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
