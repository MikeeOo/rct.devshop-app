// @ts-nocheck
import { JSX } from "react";
import Rating from "../components/Rating.tsx";
import { Link } from "react-router-dom";

export default function Card({ product }): JSX.Element {
    // const { id, name, image, description, brand, category, price, countInStock, rating, numReviews } = product;
    const { id, name, image, description, rating, reviewsCount } = product;

    // console.log(product);
    return (
        <>
            <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70">
                <img className="h-auto w-full rounded-t-xl" src={image} alt="Image Description" />
                <div className="p-4 md:p-5">
                    <Link to={`products/${id}`} className="hover:underline">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{name}</h3>
                    </Link>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400">{description}</p>
                    <Rating rating={rating} reviewsCount={reviewsCount} />
                    <a
                        className="mt-2 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
                        href={`/products/${id}`}
                    >
                        Go somewhere
                    </a>
                </div>
            </div>
        </>
    );
}
