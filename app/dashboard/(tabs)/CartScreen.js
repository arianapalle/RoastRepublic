import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Pressable} from "react-native";
import { useRouter } from "expo-router";


const CartScreen = () => {
        const router = useRouter();

    const [quantity, setQuantity] = useState(1);
    const itemPrice = 160; 

    const handleAdd = () => setQuantity(quantity + 1);

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.Title}>Order Summary</Text>

            <View style={styles.ItemContainaer}>
            <View style={styles.Content}>

                <Image source={require("../../../assets/SpanishCoffee.jpg")} 
                style={{ width: 130, 
                            height: 100,
                            borderRadius: 20,
                            }}/>

                <View style={styles.Item}>
                    <Text style={styles.ItemTitle}>Spanish Latte</Text>
                    <Text style={styles.ItemPrice}>₱ {itemPrice * quantity}.00</Text>
                </View>

                <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={handleMinus} style={styles.counterBtn}>
                        <Text style={styles.counterText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>{quantity}</Text>

                    <TouchableOpacity onPress={handleAdd} style={styles.counterBtn}>
                        <Text style={styles.counterText}>+</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>

            <View style={styles.ItemContainaer}>
            <View style={styles.Content}>

                <Image source={require("../../../assets/SpanishCoffee.jpg")} 
                style={{ width: 130, 
                            height: 100,
                            borderRadius: 20,
                            }}/>

                <View style={styles.Item}>
                    <Text style={styles.ItemTitle}></Text>
                    <Text style={styles.ItemPrice}>₱ {itemPrice * quantity}.00</Text>
                </View>

                <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={handleMinus} style={styles.counterBtn}>
                        <Text style={styles.counterText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>{quantity}</Text>

                    <TouchableOpacity onPress={handleAdd} style={styles.counterBtn}>
                        <Text style={styles.counterText}>+</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>

            <Pressable onPress={() => router.push("/dashboard/(tabs)/BrowseScreen")} style={styles.MoreButton}>
                <Text style={styles.AddMoreText}>Add More Order</Text>
            </Pressable>


        </SafeAreaView>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#FFF8EA",
    },
    Title: {
        marginVertical: 40,
        marginHorizontal: 20,
        fontSize: 20,
        fontWeight: 700,
        color: "#223D2D",
    },
    ItemContainaer: {
        marginHorizontal: 20,
        justifyContent:"center",
        alignContent: "center",
        backgroundColor: "#F2EEE5",
        borderRadius: 20,
        marginBottom: 20,
    },
    Content: {
        flexDirection: "row",
    },

    ItemTitle: {
        fontSize: 18,
        fontWeight: 700,
        marginTop: 15,
        marginLeft: 10,
    },
    ItemPrice: {
        marginLeft: 10,
        marginTop: 25,
    },
    counterContainer: {
        flexDirection: "row",
        gap: 10,
        marginTop: 60,
        marginLeft: 30,
        backgroundColor: "#F2E4C5",
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    counterText: {
        fontSize: 18,
        fontWeight: 600,
    },
    quantityText: {
        fontSize: 18,
        fontWeight: 500,
    },
    MoreButton: {
        backgroundColor: "#223D2D",
        margin: 20,
        padding: 10,
        alignItems: "center",
        borderRadius: 20,
    },
    AddMoreText: {
        fontSize: 15,
        fontWeight: 500,
        color: "#F2EEE5",


    }
     



})