import {Image, Pressable} from "react-native";
import {Text} from "@/src/components/Themed";
import Colors from "@/src/constants/Colors";
import {StyleSheet} from "react-native";
import {Product} from "@/src/types.ts"
import {Link, useSegments} from "expo-router";


export const defaultPizzaImage = 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg';

type ProductItemProps = {
    product: Product;
}

const ProductItem = ({product}: ProductItemProps) => {
    const segments = useSegments();
    console.log(segments);
    return (
        <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
            <Pressable style={styles.container}>
                <Image source={{uri: product.image || defaultPizzaImage}} style={styles.image} />
                <Text style={styles.title}> {product.name} </Text>
                <Text style={styles.price}>${product.price}</Text>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 15,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 15,
        fontWeight: 'medium',
        margin: 5,
        color: Colors.light.tint
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
        borderRadius: 15,
    },
});

export default ProductItem;
