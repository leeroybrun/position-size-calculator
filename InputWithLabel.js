
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput } from 'react-native';

export default function InputWithLabel(props) {
  return (
    <View style={styles.cols}>
        <View style={styles.col}>
          <Text>{props.label}</Text>
        </View>
        <View style={styles.col}>
          <TextInput
              value={props.value ? ''+props.value : null}
              onChangeText={(val) => { props.onChange(parseFloat(val)) }}
              style={styles.input}
              keyboardType="numeric"
              clearButtonMode="always"
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
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
