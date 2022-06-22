import React from "react";


export default function Products(props) {
    let badgeText

    //definicao do item ainda a ser discutido .storage?
    if (props.item.storage === 0) {
        badgeText = "SOLD OUT"
    }

    return (
        <div className="product">
            {badgeText && <div className="product--badge">{badgeText}</div>}

            <p className="product--name">{props.item.name}</p>
            <p className="product--description">{props.item.description}</p>
            <p className="product--price">{props.item.price}</p>
            
            <div className="button">
                <button 
                    className="purchase--button"
                    onClick={event=>props.addToCart(event, props.item)}
                >
                    Buy
                </button>
            </div>
        
        </div>
    )
}