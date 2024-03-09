import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={[styles.sectionTitle]}>{'title'}</Text>
    </SafeAreaView>
  );
}

const styles = {
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
};

export default App;
