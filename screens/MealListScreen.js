import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealListItem from "../components/MealListItem";

//all screens get a navigation and a route
//the route is where any params will be sent
export default function MealListScreen({route, navigation}) {
  //check to see if the categoryId came in
  console.log(route.params);
  //use the id to get all of the meals
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.categoryId)
  );
  console.log(displayedMeals);
  const renderMealItem = (item) => {
  return (
  <View style={styles.container}>
    <FlatList 
    data={displayedMeals}
    keyExtractor={(item) => item.id}
    renderItem={renderMealItem}
    />
  </View>
  );
}

const styles = StyleSheet.create({});}
