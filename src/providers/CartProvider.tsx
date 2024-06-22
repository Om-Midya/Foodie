import {createContext, PropsWithChildren, useContext, useState} from "react";
import {CartItem, PizzaSize, Product} from "@/src/types";

const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {}
});

type CartType = {
    items: CartItem[],
    addItem: (product: Product, size: CartItem["size"], s: string) => void
}

const CartProvider = ({children}: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([])
    const addItem = (product: Product, size: CartItem['size'], price) =>{
        const newItem: CartItem = {
            id: Math.random().toString(),
            product,
            product_id: product.id,
            size,
            price: parseFloat(price),
            quantity: 1
        }
        setItems([...items, newItem])
    }
    return (
        <CartContext.Provider value={{items, addItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => {
    return useContext(CartContext);
}
