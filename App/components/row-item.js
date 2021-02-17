import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import colors from "../constants/colors";


const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 16,
    color: colors.text,
  }
});

const RowItem = ({ rightIcon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
}

RowItem.propTypes = {
  text: PropTypes.string.isRequired,
  rightIcon: PropTypes.node.isRequired
};

export default RowItem
