import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../../constants/colors";
import background from "../../assets/images/background.png";
import logo from "../../assets/images/logo.png";
import { ConversionInput, Button, KeyboardSpacer } from "../../components";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 10,
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 5
  }
});

export default ({ navigation }) => {
  const baseCurrency = "USD";
  const quoteCurrency = "GBP";
  const conversionRate = 0.89824;
  const date = "2020-03-23";

  const [scrollEnabled, setScrollEnabled] = useState(false);
  const handleGoToOptions = () => navigation.push("Options");
  const handleGoToBaseCurrency = () => navigation.push("CurrencyList", { title: "Base Currency" });
  const handleGoToQuoteCurrency = () => navigation.push("CurrencyList", { title: "Quote Currency" });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={handleGoToOptions}>
          <Entypo name="cog" size={32} color={colors.white} />
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={background}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          </View>
          <Text style={styles.textHeader}>Currency Converter</Text>
          <View style={styles.inputContainer}>
            <ConversionInput
              text={baseCurrency}
              value="123"
              onButtonPress={handleGoToBaseCurrency}
              keyboardType="numeric"
              onChangeText={(text) => console.log("text", text)}
            />
            <ConversionInput
              text={quoteCurrency}
              value="123"
              editable={false}
              onButtonPress={handleGoToQuoteCurrency}
            />
          </View>
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              new Date(date),
              "MMM do, yyyy"
            )}`}
          </Text>
          <Button text="Reverse Currencies" onPress={() => alert("todo!")} />
          <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
        </View>
      </ScrollView>
    </View>
  );
};
