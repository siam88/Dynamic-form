import React from "react";

export default function ({ variants }) {
    return (
        <div>
            {variants.map((e, i) => (
                <div key={i}>
                    <p>Price : {e.price}</p>
                    <p>Quantity : {e.quantity}</p>
                </div>
            ))}
        </div>
    )
}