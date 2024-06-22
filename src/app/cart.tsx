import {View, Text} from "react-native";
import {useCart} from "@/src/providers/CartProvider";

const CartScreen = () => {
    const {items} = useCart()
    return (
        <View >
            <Text>Cart length: {items.length}</Text>
        </View>
    );
}

export default CartScreen;
