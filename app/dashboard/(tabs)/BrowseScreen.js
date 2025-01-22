import { router } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, Pressable, ScrollView } from "react-native";

const BrowseScreen = () => {
    return(
        <ScrollView>

        <SafeAreaView style={styles.container}>

            <View style={styles.HeaderText}>
                <Text style={styles.SmallText}>HELLO, GOOD MORNING!</Text>
                <Text style={styles.BigText}>GRAB SOME COFFEE NOW!</Text>
                <TextInput  placeholder="Search for coffee..." style={styles.input}  />
            </View>

            <View style={styles.menuBackground}>
                <Image source={require('../../../assets/Logo(NoBG).png')} 
                    style={{ width: 90, 
                             height: 30, 
                             marginHorizontal: 20, 
                             marginVertical: 20,
                           }}/>

                <Text style={styles.Categories}>COFFEE BASED</Text>
                <View style={styles.menuBg}>
                <TouchableOpacity onPress={() => router.push({pathname: "/(pages)/OrderForm"})} style={styles.menuContainer}> 
                <Image source={require('../../../assets/SpanishCoffee.jpg')} 
                         style={{ width: 173, 
                            height: 100,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            }}/>

                        <Text style={styles.itemName}>Americano</Text>
                        <View style={styles.menuBottomSec}>
                            <Text style={styles.itemPrice}>₱ 160.00</Text>
                            <Pressable style={styles.addItem}>
                                <Text style={styles.PlusText}> + </Text>
                                </Pressable>
                        </View>
                    </TouchableOpacity >

                    <TouchableOpacity  style={styles.menuContainer}>
                    <Image source={require('../../../assets/SpanishCoffee.jpg')} 
                         style={{ width: 173, 
                            height: 100,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            }}/>

                        <Text style={styles.itemName}>Cafe Latte</Text>
                        <View style={styles.menuBottomSec}>
                            <Text style={styles.itemPrice}>₱ 160.00</Text>
                            <Pressable style={styles.addItem}>
                                <Text style={styles.PlusText}> + </Text>
                                </Pressable>
                        </View>
                    </TouchableOpacity >

                    <TouchableOpacity  style={styles.menuContainer}>
                    <Image source={require('../../../assets/SpanishCoffee.jpg')} 
                        style={{ width: 173, 
                            height: 100,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            }}/>

                        <Text style={styles.itemName}>Spanis Latte</Text>
                        <View style={styles.menuBottomSec}>
                            <Text style={styles.itemPrice}>₱ 160.00</Text>
                            <Pressable style={styles.addItem}>
                                <Text style={styles.PlusText}> + </Text>
                                </Pressable>
                        </View>
                    </TouchableOpacity >

                    <TouchableOpacity  style={styles.menuContainer}>
                    <Image source={require('../../../assets/SpanishCoffee.jpg')} 
                         style={{ width: 173, 
                            height: 100,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            }}/>

                        <Text style={styles.itemName}>White Mocha</Text>
                        <View style={styles.menuBottomSec}>
                            <Text style={styles.itemPrice}>₱ 160.00</Text>
                            <Pressable style={styles.addItem}>
                                <Text style={styles.PlusText}> + </Text>
                                </Pressable>
                        </View>
                    </TouchableOpacity >

                    <TouchableOpacity  style={styles.menuContainer}>
                    <Image source={require('../../../assets/SpanishCoffee.jpg')} 
                         style={{ width: 173, 
                            height: 100,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            }}/>
                            
                        <Text style={styles.itemName}>French Vanilla</Text>
                        <View style={styles.menuBottomSec}>
                            <Text style={styles.itemPrice}>₱ 160.00</Text>
                            <Pressable style={styles.addItem}>
                                <Text style={styles.PlusText}> + </Text>
                                </Pressable>
                        </View>
                    </TouchableOpacity >

                    <TouchableOpacity  style={styles.menuContainer}>
                    <Image source={require('../../../assets/SpanishCoffee.jpg')} 
                         style={{ width: 173, 
                            height: 100,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            }}/>

                        <Text style={styles.itemName}>Caramel Macchiato</Text>
                        <View style={styles.menuBottomSec}>
                            <Text style={styles.itemPrice}>₱ 160.00</Text>
                            <Pressable style={styles.addItem}>
                                <Text style={styles.PlusText}> + </Text>
                            </Pressable>
                        </View>

                    </TouchableOpacity >

                </View>

            </View>
        </SafeAreaView>
        </ScrollView>

    );
};

export default BrowseScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF8EA",
    },
    HeaderText: {
        marginHorizontal: 20,
        marginVertical: 40,
        gap: 8,
    },
    SmallText: {
        fontSize: 15,
        fontWeight: 700,
        color: "#5D7667",
    },
    BigText: {
        fontSize: 30,
        fontWeight: 800,
        color: "#223D2D",
    },
    input: {
        backgroundColor: "#F2EEE5",
        padding: 10,
        borderRadius: 20,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#223D2D",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.2,      
        shadowRadius: 5,                
    },
    menuBackground: {
        flex: 1,
        backgroundColor: "#223D2D",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingBottom: 50,
        paddingTop: 10,
    },
    Categories: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 23,
        fontWeight: 800,
        color: "#FFF8EA",
    },
    menuBg: {
        marginTop: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 25,
        marginHorizontal: 20,
    },
    menuContainer: {
        backgroundColor: "#FFF8EA",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.4,      
        shadowRadius: 5,     
    },
    itemName: {
        margin: 10,
        fontSize: 15,
        fontWeight: 600,
        color: "#223D2D",
    },
    menuBottomSec: {
        flexDirection: "row",
        justifyContent:"space-between",
    },

    itemPrice: {
        margin: 10,
        fontSize: 13,
        fontWeight: 500,
        color: "#6A776A",
    },
    addItem: {
        padding: 5,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: "#62984B", 
        borderRadius: 20,
        justifyContent:"center",
        alignItems: 'center',
    },
    PlusText: {
        fontSize: 20,
        fontWeight: 800,
        color: "#FFF8EA",
        justifyContent:"center",
        alignItems: 'center',
    }


})