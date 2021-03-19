import React from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Entypo } from "@expo/vector-icons";

import colors from "../../constants/colors";
import currencies from "../../data/currencies.json";
import { RowItem, RowSeparator } from "../../components";

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    backgroundColor: colors.blue,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ({ navigation, route = {} }) => {
  const insets = useSafeAreaInsets();
  const params = route.params || {};

  return (
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.blue} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          const { active } = params;
          const selected = active === item;

          return (
            <RowItem
              text={item}
              onPress={() => navigation.pop()}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          );}}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingbottom: Math.max(insets.bottom, 16) }} />
        )}
      />
    </View>
  );
};
