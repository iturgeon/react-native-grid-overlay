import * as React from 'react';

import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { GridOverlay } from 'react-native-grid-overlay';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Result</Text>
      </View>
      <GridOverlay
        color={'black'}
        opacity={0.5}
        stepSize={5}
        height={height}
        width={width}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
