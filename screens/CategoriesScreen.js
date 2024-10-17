import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES  } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";

//This screen should show all of the categories in a flatlist
export default function CategoriesScreen({ navigation }) {
  //show all categories on screen and then navigate
  //to list of meals that match that category
  const renderCategoryItem = ({item}) => {
    return  (
    <CategoryItem
      category={item}
      onPress={() => navigation.navigate(item.title)}

    />
    );
  }

  return (
    <View>
      <Text>CategoriesScreen</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        styles={styles.container}
        //Sets the number of columns
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
