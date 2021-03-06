import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function SearchScreen() {
  return (
    <ScrollView style={styles.container}>
      {
        
      }
      <ExpoLinksView />
    </ScrollView>
  );
}

SearchScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
