import React from 'react';
import { StyleSheet, View, } from 'react-native';
import '@types/react-native';

type Props = {
  width?: number;
  color?: string;
  style?: StyleSheet.ViewStyle;
};

const DividerLine: React.FC<Props> = ({ width = 1, color = '#ccc', style }) => {
  return (
    <View style={[styles.divider, { width, backgroundColor: color }, style]} />
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    alignSelf: 'stretch',
  },
});

export default DividerLine;