
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput } from 'react-native';

export default function ResultWithLabel(props) {
  return (
    <View style={styles.cols}>
        <View style={styles.col}>
          <Text>{props.label}</Text>
        </View>
        <View style={styles.col}>
          <Text>{props.value}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cols: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  col: {
    width: '50%'
  }
});
