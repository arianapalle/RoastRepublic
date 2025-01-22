import React from "react";
import { StyleSheet, View, Text, Pressable, SafeAreaView, Image } from "react-native";
import { useRouter } from "expo-router";


const index = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/Logo.png")} style={{ width: 300, height: 100, marginBottom: 80}}/>

          <View style={styles.Button}>
            <Pressable onPress={() => router.push("dashboard")}>              
              <Text style={styles.ButtonText}>Order Now</Text>
            </Pressable>
          </View>
        </SafeAreaView>
    );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#223D2D", 
  },
  Button: {
    position: "absolute",
    bottom: 120,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#F2E4C5",
  },
  ButtonText: {
    fontSize: 15,
    fontWeight: 600,
  },


});
