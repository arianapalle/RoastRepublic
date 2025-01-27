import { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, StatusBar, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";


const OrderForm = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null); 


  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>

        <Image source={require('../../../../assets/Americano.jpg')} 
          style={{ width: '100%',
                   height: 280, 
                   borderBottomLeftRadius: 20,
                   borderBottomRightRadius: 20,
                  
          }}/>

          <Text style={styles.Menutitle}>Americano</Text>
          <Text style={styles.MenuPrice}>from ₱145.00</Text>
          <Text style={styles.Description}>
          A classic and bold coffee experience made by diluting a rich espresso shot with hot water, creating a smooth yet strong flavor with a slightly lighter body and a lingering aroma.
          </Text>

          <View style={styles.sizeContainer}>
            <View style={styles.SecOne}>
              <Text style={styles.title}>Coffee Size</Text>
              <Text style={styles.required}>Required</Text>
            </View>

            <View style={styles.sizeSecTwo}>
              <Pressable style={[styles.sizeOption, selectedSize === "Regular" && styles.selectedOption]} // Change color if selected
              onPress={() => setSelectedSize("Regular")}>
                <Text style={[styles.size, selectedSize === "Regular" && styles.selectedText]}>Regular</Text>
                <Text style={[styles.AddOn, selectedSize === "Regular" && styles.selectedText]}>Free</Text>
              </Pressable>

              <Pressable
              style={[styles.sizeOption, selectedSize === "Medium" && styles.selectedOption]} // Change color if selected
              onPress={() => setSelectedSize("Medium")} // Set size on press
            >
                <Text style={[styles.size, selectedSize === "Medium" && styles.selectedText]}>Medium</Text>
                <Text style={[styles.AddOn, selectedSize === "Medium" && styles.selectedText]}>+ ₱10.00</Text>
              </Pressable>

              <Pressable
              style={[styles.sizeOption, selectedSize === "Large" && styles.selectedOption]} // Change color if selected
              onPress={() => setSelectedSize("Large")} // Set size on press
            >
                <Text style={[styles.size, selectedSize === "Large" && styles.selectedText]}>Large</Text>
                <Text style={[styles.AddOn, selectedSize === "Large" && styles.selectedText]}>+ ₱15.00</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.TempContainer}>
            <View style={styles.SecOne}>
              <Text style={styles.title}>Choice of Temperature</Text>
              <Text style={styles.required}>Required</Text>
            </View>

            <View style={styles.TempSecTwo}>
            <Pressable
              style={[styles.customCheckbox, toggleCheckBox && styles.checked]}
              onPress={() => setToggleCheckBox(!toggleCheckBox)} />
              <Text style={styles.checkboxText}>Hot</Text>
            </View>

            <View style={styles.TempSecTwo}>
            <Pressable
              style={[styles.customCheckbox, toggleCheckBox && styles.checked]}
              onPress={() => setToggleCheckBox(!toggleCheckBox)} />
              <Text style={styles.checkboxText}>Cold</Text>
            </View>

            <View style={styles.atcContainer}>
              <View style={styles.valueContainer}>
                <Text>
                  
                </Text>
              </View>

            </View>


          </View>





      </SafeAreaView>

    </ScrollView>

  );
};

export default OrderForm;
