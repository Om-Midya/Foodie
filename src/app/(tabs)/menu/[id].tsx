import {View, Text, Image, StyleSheet, Pressable, Button} from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";
import products from "@/assets/data/products";
import {useState} from "react";
import {circleAsync} from "@expo/image-utils/build/jimp";

const ProductDetailsScreen = () => {
    const {id} = useLocalSearchParams()

    const sizes = {
        'S': 0.75,
        'M': 1,
        'L': 1.25,
        'XL': 1.5,
    };

    const [selectedSize, setSelectedSize] = useState('M');

    const product = products.find((product) => product.id.toString() === id);

    const price = (product?.price * sizes[selectedSize]).toFixed(2);

    return (
        <View style={styles.container}>
            {/* Using the Stack Screen here gives the advantage of using various props associated to the product */}
            <Stack.Screen options={{title: `${product?.name}`}}/>

            <Image source={{uri: product?.image}} style={styles.image}/>
            <Text style={{fontSize:20}}>Available Sizes:</Text>
            <View style={styles.sizes}>
                {Object.keys(sizes).map((size) => (
                    <Pressable
                        style={size===selectedSize? styles.selectedSize:styles.size}
                        onPress={() => setSelectedSize(size)}
                    >
                        <Text
                            key={size}
                            style={size===selectedSize? styles.selectedSizeText:styles.sizeText}
                        >{size}</Text>
                    </Pressable>
                ))}
            </View>

            <View style={styles.price}>
                <Text style={styles.priceText}>Price: ${price}</Text>
                <Button title={"Add to Cart"} onPress={() => {console.warn("Adding to cart")}}/>
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
