import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, {Defs, LinearGradient, Rect, Stop} from "react-native-svg";

const TermsConditions = () => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={styles.gradientBackground}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <Stop offset="0%" stopColor="#1a000e" stopOpacity="1" />
            <Stop offset="12.5%" stopColor="#531d3a" stopOpacity="1" />
            <Stop offset="25%" stopColor="#8c3a66" stopOpacity="1" />
            <Stop offset="37.5%" stopColor="#c55792" stopOpacity="1" />
            <Stop offset="50%" stopColor="#ff74bf" stopOpacity="1" />
            <Stop offset="62.5%" stopColor="#ff90cc" stopOpacity="1" />
            <Stop offset="75%" stopColor="#ffacd9" stopOpacity="1" />
            <Stop offset="87.5%" stopColor="#ffc8e6" stopOpacity="1" />
            <Stop offset="100%" stopColor="#ffe5f3" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      <Text>Terms & Conditions Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default TermsConditions;
