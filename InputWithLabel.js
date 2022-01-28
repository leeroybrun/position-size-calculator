
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function InputWithLabel(props) {
  return (
    <View style={styles.cols}>
        <View style={styles.col}>
          <Text>{props.label}</Text>
        </View>
        <View style={styles.col}>
          <TextInput
              value={props.value ? ''+props.value : ''}
              onChangeText={(val) => { props.onChange(val) }}
              style={styles.input}
              keyboardType="numeric"
          />
          {props.value ? <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => props.onChange('')}
          >
            <Image
              style={styles.closeButton}
              source={require("./assets/clear.png")}
            />
          </TouchableOpacity> : null}
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
  },
  closeButton: {
    height: 20,
    width: 20,
  },
  closeButtonParent: {
    position: 'absolute',
    right: 15,
    top: 21,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  }
});
