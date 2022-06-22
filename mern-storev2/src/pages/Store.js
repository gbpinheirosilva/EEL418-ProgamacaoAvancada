import React from "react";
import Products from "../components/Products";

export default Store(props){
    
    const  [cart, setCart] = React.useState([])
    console.log(cart)

    function addToCart(event,item){
        setCart(oldCart => oldCart.push(item))
    };

    //data a definir pela API-loja
    //definir qtd de itens no array
    const cards = data.map(item => {        
        return (
            <Products
                key={item.id}
                addToCart={addToCart}
                item={item}
            />
        )
    })
    
    return(
        <div>
            <h1>
                "MERN STORE"
            </h1>
            <div>
                <Product  
                
                />
                <Product 
                
                />
                <Product 
                
                />
                <Product 
                
                />
                <Product 
                
                />
            </div>
        </div>
    );
}