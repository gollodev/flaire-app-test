import { View, StyleSheet } from 'react-native';
import React, { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
