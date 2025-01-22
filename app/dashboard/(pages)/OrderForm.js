import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

const OrderForm = () => {
  const { name, price, image } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.coffeeImage} />
      <Text style={styles.coffeeName}>{name}</Text>
      <Text style={styles.coffeePrice}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  coffeeImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  coffeeName: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  coffeePrice: {
    fontSize: 20,
    color: "green",
  },
});

export default OrderForm;
