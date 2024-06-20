import {FlatList, Image, StyleSheet} from 'react-native';
import products from "@/assets/data/products";
import ProductItem from "@/src/components/ProductItem";

export default function TabOneScreen() {
  return (
      <FlatList
      data={products}
      renderItem={({item}) => <ProductItem product={item} />}
      numColumns={2}
      contentContainerStyle={{margin:5}}
      />
  );
}

