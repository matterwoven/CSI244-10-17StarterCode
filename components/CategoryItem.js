import { StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function CategoryItem({ category, onPress }) {
  console.log(category);
  console.log(onPress);
  return (
    <View>
      <TouchableOpacity 
      //background style came from props
        onPress={onPress}
        style={[styles.gridItem, {backgroundColor: category.color}]}>

        <Text style={styles.title}>{category.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  }
});
