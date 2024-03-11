// @ts-nocheck
import { JSX, useEffect, useState } from "react";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Rating({ rating, reviewsCount }): JSX.Element {
    const renderStars = (): JSX.Element => {
        const starArr = [];

        for (let i: number = 1; i <= 5; i++) {
            if (rating >= i) {
                starArr.push(
                    <span key={crypto.randomUUID()}>
                        <FaStar />
                    </span>,
                );
            } else if (rating >= i - 1 + 0.5) {
                starArr.push(
                    <span key={crypto.randomUUID()}>
                        <FaStarHalfAlt />
                    </span>,
                );
            } else {
                starArr.push(
                    <span key={crypto.randomUUID()}>
                        <FaRegStar />
                    </span>,
                );
            }
        }

        return starArr;
    };
    return (
        <>
            {/*<div>{score}</div>*/}
            <div className="flex items-center text-yellow-400">
                {renderStars()}
                <span className="pl-2">{reviewsCount} reviews</span>
            </div>
        </>
    );
}
