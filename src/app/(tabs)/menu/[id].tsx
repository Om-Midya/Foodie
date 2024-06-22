import {View, Text, Image, StyleSheet, Pressable, Button} from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";
import products from "@/assets/data/products";
import {useState} from "react";
import {circleAsync} from "@expo/image-utils/build/jimp";
import {PizzaSize} from "@/src/types";
import {useCart} from "@/src/providers/CartProvider";

const ProductDetailsScreen = () => {
    const {id} = useLocalSearchParams()
    const {addItem} = useCart();
    const sizes: PizzaSize[]= ['S', 'M', 'L', 'XL'];

    const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

    const product = products.find((product) => product.id.toString() === id);

    const addToCart = () => {
        if(product) {
            addItem(product, selectedSize, price(product));
        }
        else {
            return <Text>Product Not found</Text>
        }
    }

    const price = (product: typeof products[0] | undefined) => {
        if(!product) return '0';
        switch(selectedSize) {
            case 'S':
                return (product.price * 0.8).toFixed(2);
            case 'M':
                return product.price.toFixed(2);
            case 'L':
                return (product.price * 1.5).toFixed(2);
            case 'XL':
                return (product.price * 1.75).toFixed(2);
            default:
                return product.price.toFixed(2);
        }
    }

    //console.log(price(product));

    return (
        <View style={styles.container}>
            {/* Using the Stack Screen here gives the advantage of using various props associated to the product */}
            <Stack.Screen options={{title: `${product?.name}`}}/>

            <Image source={{uri: product?.image}} style={styles.image}/>
            <Text style={{fontSize:20}}>Available Sizes:</Text>
            <View style={styles.sizes}>
                {sizes.map((size) => (
                    <Pressable
                        key={size}
                        style={size===selectedSize? styles.selectedSize:styles.size}
                        onPress={() => setSelectedSize(size as PizzaSize)}
                    >
                        <Text
                            key={size}
                            style={size===selectedSize? styles.selectedSizeText:styles.sizeText}
                        >{size}</Text>
                    </Pressable>
                ))}
            </View>

            <View style={styles.price}>
                <Text style={styles.priceText}>Price: ${price(product)}</Text>
                <Button title={"Add to Cart"} onPress={addToCart}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    sizes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
    },
    size: {
        width: 70,
        height: 70,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        margin: 5,
    },
    selectedSize: {
        width: 70,
        height: 70,
        backgroundColor: '#2f95dc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        margin: 5,
    },
    sizeText: {
        fontSize: 25,
    },
    selectedSizeText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        marginTop: "auto",
    },
    priceText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})

export default ProductDetailsScreen;
