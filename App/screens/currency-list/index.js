import React from "react";
import { View, StatusBar, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"

import colors from "../../constants/colors";
import currencies from "../../data/currencies.json";
import { RowItem, RowSeparator } from "../../components";

export default ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.blue} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => (
          <RowItem text={item} onPress={() => navigation.pop()} />
        )}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingbottom: Math.max(insets.bottom, 16) }} />
        )}
      />
    </View>
  );
};
