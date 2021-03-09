import React from "react";
import { SafeAreaView, ScrollView, Linking, Alert, StatusBar } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../../constants/colors";
import { RowItem, RowSeparator } from "../../components";

export default () => {
  const openLink = (url) =>
    Linking.openURL(url).catch(() => {
      Alert.alert("Sorry something went wrong.", "Please try again later.");
    });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.blue} />
      <ScrollView>
        <RowItem
          text="Themes"
          onPress={() => alert("Themes!")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          text="Master React Navigation V5"
          onPress={() =>
            openLink(
              "https://learn.reactnativeschool.com/p/master-react-navigation-v5"
            )
          }
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          text="React Native by Example"
          onPress={() => openLink("https://www.reactnativebyexample.com/")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
