import {CartItem} from "@/src/types";
import {View, Text, Image, StyleSheet, Button} from "react-native";
import {defaultPizzaImage} from "@/src/components/ProductItem";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useCart} from "@/src/providers/CartProvider";

type CartListItemProps = {
    item: CartItem
}

const CartListItem = ({item}: CartListItemProps) => {
    const {updateQuantity} = useCart()
    return (
        <View style={styles.container}>
            <Image
                source={{uri: item.product.image || defaultPizzaImage}}
                style={styles.image}
                resizeMode={"contain"}
            />
            <View style={styles.detailsContainer}>
                <View styles={styles.subtitleContainer}>
                    <Text style={styles.title}>{item.product.name}</Text>
                    <View >
                        <Text>Size: {item.size}</Text>
                        <Text style={styles.price}>Price: ${item.price}</Text>
                    </View>
                </View>
                <View style={styles.quantitySelector}>
                    <FontAwesome
                        onPress={() =>updateQuantity(item.id, -1)}
                        name="minus"
                        color="black"
                        style={{padding: 5}}
                    />
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <FontAwesome
                        onPress={() => updateQuantity(item.id, 1)}
                        name="plus"
                        color="black"
                        style={{padding: 5}}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: 75,
        aspectRatio: 1,
        alignSelf: 'center',
        marginRight: 10,
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        marginBottom: 5,
    },
    subtitleContainer: {
        flex: 1,
        flexDirection: 'column',
        gap: 5,
    },
    quantitySelector: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    quantity: {
        fontWeight: '500',
        fontSize: 18,
    },
    price: {
        color: Colors.light.tint,
        fontWeight: 'bold',
    },
})

export default CartListItem;
