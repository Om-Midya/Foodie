import {Image, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import products from "@/assets/data/products";
import { Text, View } from '@/src/components/Themed';

export default function TabOneScreen() {

  const product = products[0];
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text style={styles.title}> {product.name} </Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 15,
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
        resizeMode: 'cover',
        borderRadius: 15,
    },
});
