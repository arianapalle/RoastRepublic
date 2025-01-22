import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

const ProfileScreen = () => {
    const router = useRouter();
    

    return(
        <SafeAreaView style={styles.ProfileContainer}>

            <View style={styles.sectioneOne}>
                <Image source={require("../../../assets/ProfilePic.jpg")}  
                style={{ width: 100, 
                         height: 100, 
                         borderRadius: 100,
                         
                        }}/>

                <View style={styles.S1Text}>
                    <Text style={styles.userName}>Ariana Palle</Text>
                    <Text style={styles.editProf}>Edit profile</Text>
                </View>

            </View>

            <View style={styles.sectioneTwo}>
                <View style={styles.S2container}>
                    <Image source={require("../../../assets/OrderHistory.png")}  
                    style={{ width: 20, 
                            height: 20,
                        }}/>
                    <Text style={styles.S2Text}>Order History</Text>
                </View>

                <View style={styles.S2container}>
                    <Image source={require("../../../assets/Contact.png")}  
                    style={{ width: 18, 
                            height: 18, }}/>
                    <Text style={styles.S2Text}>Contact Info</Text>
                </View>

                <View style={styles.S2container}>
                    <Image source={require("../../../assets/addressIcon.png")}  
                    style={{ width: 20, 
                            height: 20, }}/>
                    <Text style={styles.S2Text}>Address</Text>
                </View>
            </View>

            <View style={styles.sectioneThree}>
            <Image source={require("../../../assets/Payment.png")}  
                    style={{ width: 25, 
                            height: 25, }}/>
                <Text style={styles.S3Text}>Payment Method</Text>
            </View>

            <View style={styles.sectioneFour}>
                <Text style={styles.S4title}>General</Text>

                <View style={styles.S4content}>
                    <Image source={require("../../../assets/Payment.png")}  
                        style={{ width: 25, 
                                height: 25, }}/>
                    <Text style={styles.S4Text}>Notification</Text>
                </View>
                <View style={ { height: 1,          
                                backgroundColor: "#E0E0E0", 
                                marginVertical: 10,
                                width: "100%", }} />

                <View style={styles.S4content}>
                    <Image source={require("../../../assets/Payment.png")}  
                        style={{ width: 25, 
                                height: 25, }}/>
                    <Text style={styles.S4Text}>Language</Text>
                </View>
                <View style={ { height: 1,          
                                backgroundColor: "#E0E0E0", 
                                marginVertical: 10,
                                width: "100%", }} />

                <View style={styles.S4content}>
                    <Image source={require("../../../assets/Payment.png")}  
                        style={{ width: 25, 
                                height: 25, }}/>
                    <Text style={styles.S4Text}>About Us</Text>
                </View>
                <View style={ { height: 1,          
                                backgroundColor: "#E0E0E0", 
                                marginVertical: 10,
                                width: "100%", }} />

                
                <Pressable onPress={() => router.replace("/")} style={styles.logoutButton}>
                    <Text style={styles.ButtonText}>Log out</Text>
                </Pressable>

            </View>


        </SafeAreaView>
        
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    ProfileContainer: {
        flex: 1,
        backgroundColor: "#FFF8EA",
    },
    sectioneOne: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 25,
        paddingHorizontal: 20,
        gap: 20,
    },
    S1Text: {
        justifyContent: "center",
        gap: 10,
    },
    userName: {
        fontSize: 25,
        fontWeight: 600,
        color: "#223D2D",
    },
    editProf: {
        fontWeight: 400,
        color: "#787774",
    },
    sectioneTwo: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-be",
        alignItems: "center",
        gap: 20,
    },
    S2container: {
        width: 110,
        alignItems: "center",        
        backgroundColor: "#F2EEE5", 
        padding: 15,
        borderRadius: 20,
        borderColor: "#DADADA", 
        borderWidth: 1,
    },
    S2Text: {
        fontSize: 12,
        marginTop: 8,
    },
    sectioneThree: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        marginVertical: 20,
        marginHorizontal: 20,
        backgroundColor: "#F2EEE5", 
        paddingVertical: 13,
        paddingHorizontal: 14,
        borderRadius: 15,
        borderColor: "#DADADA",
        borderWidth: 1,
        alignItems: "center",
    },
    S3Text: {
        fontSize: 13,
    },
    sectioneFour: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F2EEE5",
    },
    S4title: {
        fontSize: 15,
        fontWeight: 700,
        marginBottom: 10,
    },
    S4content: {
        fontSize: 15,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
    },
    logoutButton: {
        marginTop: 10,
        paddingVertical: 13, 
        backgroundColor: "#223D2D",
        alignItems: "center",
        borderRadius: 15,

    },
    ButtonText: {
        fontSize: 15,
        fontWeight: 600,
        color: "#F2EEE5",
    },

});