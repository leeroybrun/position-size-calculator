import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Item(props) {
    const isActive = function() {
        return props.currValue == props.value;
    }

    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={[ isActive() ? styles.active : styles.inactive]}>{props.value}%</Text>
            <Text style={[ isActive() ? styles.line : {}]}> { isActive() ? '|' : ''}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    active:{
        textAlign: 'center',
        fontSize: 20,
        bottom: 10,
        color:'#5e5e5e',
    },
    inactive:{
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontWeight:'normal',
        color:'#bdc3c7',
    },
    line:{
        fontSize: 10,
        textAlign: 'center',
    }
});