import {View,Text} from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";

const ProductDetailsScreen = () => {
    const {id} = useLocalSearchParams()
    return (
        <View>
            {/* Using the Stack Screen here gives the advantage of using various props associated to the product */}
            <Stack.Screen options={{title: 'Details'}}/>
            <Text>Product Details for id: {id}</Text>
        </View>
    );
}

export default ProductDetailsScreen;
