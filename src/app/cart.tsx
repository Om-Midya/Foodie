import {View, Text, FlatList, Button} from "react-native";
import {useCart} from "@/src/providers/CartProvider";
import CartListItem from "@/src/components/CartListItem";

const CartScreen = () => {
    const {items} = useCart()
    return (
        <>
            <FlatList data={items} renderItem={({item}) => (
                <CartListItem item={item} />
            )}/>
            <Button title={"Checkout"} onPress={() => {}}/>
        </>
    );
}

export default CartScreen;
