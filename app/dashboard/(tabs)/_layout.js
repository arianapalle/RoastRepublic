import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet, Image } from "react-native";


const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarStyle: styles.BottomBar, tabBarShowLabel: false,}}>
      
      <Tabs.Screen name="BrowseScreen" 
      options={{
        headerShown:false,
        tabBarIcon: () => (
          <Image source={require('../../../assets/BeanIcon.png') }
            style={{ width: 35, height: 35 }}/>
        ),
      }} />
      
      
      
      <Tabs.Screen name="CartScreen" 
      options={{
        headerShown:false,
        tabBarIcon: () => (
          <Image source={require('../../../assets/Cart.png') }
            style={{ width: 30, height: 30 }}/>
        ),
      }} />

      <Tabs.Screen name="OrderHistory"  
      options={{
        headerShown:false,
        tabBarIcon: () => (
          <Image source={require('../../../assets/Tracking.png') }
            style={{ width: 30, height: 30 }}/>
        ),
      }} /> 

      <Tabs.Screen name="ProfileScreen"
      options={{
        headerTitle: "Account",
        headerStyle: {backgroundColor: "#223D2D"},
        headerTintColor: "#FFF8EA",
        headerTitleStyle: { fontSize: 15,  fontWeight: 500},

        tabBarIcon: () => (
          <Image source={require('../../../assets/Profile.png') }
            style={{ width: 30, height: 30}}/>
        ),

        }}/>
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create ({
  BottomBar: {
    backgroundColor: "#F2E4C5",
    justifyContent: "center",
    alignItems: "center",
    height: 50,

  },

})