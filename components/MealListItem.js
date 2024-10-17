import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import { TouchableOpacity } from "react-native";

export default function MealListItem({ meal, onPress }) {
  console.log(`MealListItem: ${meal}`)
  return (
    <View>
      <TouchableOpacity>
        <Image source={{ uri: meal.imageUrl }}></Image>
        <Text>{meal.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
