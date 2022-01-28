import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Item from './Item';

export default function Slider(props) {
    const renderScale = () => {
        const items = [];
        for (let i = props.min; i <= props.max; i++) {
            items.push(
                <Item 
                    value={i}
                    currValue={props.value}
                    key={'slider_scale_item_'+i}
                    onPress={() => { props.onChange(i) }}
                />
            );
        }
        return items;
    }
     
    return (
        <View>
            <View style={[styles.column]}>
                {renderScale()}
            </View>
            <View style={styles.container}>
                <MultiSlider
                    trackStyle={{backgroundColor:'#bdc3c7'}}
                    selectedStyle={{backgroundColor:"#5e5e5e"}}
                    values={[props.value]}
                    onValuesChange={values => {
                        props.onChange(values[0]);
                    }}
                    min={props.min}
                    max={props.max}
                    step={1}
                    allowOverlap={false}
                    snapped={true}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        bottom:-20,
    },
    active:{
        textAlign: 'center',
        fontSize:20,
        color:'#5e5e5e',
    },
    inactive:{
        textAlign: 'center',
        fontWeight:'normal',
        color:'#bdc3c7',
    },
    line:{
        textAlign: 'center',
    }
});