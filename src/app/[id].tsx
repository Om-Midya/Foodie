import {View,Text} from "react-native";
import {useLocalSearchParams} from "expo-router";

const ProductDetailsScreen = () => {
    const {id} = useLocalSearchParams()
    return (
        <View>
            <Text>Product Details for id: {id}</Text>
        </View>
    );
}

export default ProductDetailsScreen;
