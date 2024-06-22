import {createContext, PropsWithChildren, useContext, useState} from "react";
import {CartItem, PizzaSize, Product} from "@/src/types";
import {randomUUID} from "expo-crypto";

const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {},
    updateQuantity: () => {}
});

type CartType = {
    items: CartItem[],
    addItem: (product: Product, size: CartItem["size"], price: string) => void
    updateQuantity: (id: string, quantity: 1 | -1) => void
}

const CartProvider = ({children}: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([])
    const addItem = (product: Product, size: CartItem['size'], price) =>{
        const existingItem = items.find((item) => item.product_id === product.id && item.size === size)

        if(existingItem) {
            updateQuantity(existingItem.id, 1)
            return;
        }

        const newItem: CartItem = {
            id: randomUUID(),
            product,
            product_id: product.id,
            size,
            price: parseFloat(price),
            quantity: 1
        }
        setItems([...items, newItem])
    }

    const updateQuantity = (id: string, quantity: 1 | -1) => {
        const updatedItems = items.map((item) => {
            if(item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + quantity
                }
            }
            return item;
        }).filter((item) => item.quantity > 0)
        setItems(updatedItems);
    }
    return (
        <CartContext.Provider value={{items, addItem, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => {
    return useContext(CartContext);
}
