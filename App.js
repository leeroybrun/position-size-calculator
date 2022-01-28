
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, TextInput } from 'react-native';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';

import Slider from './slider/Slider';
import InputWithLabel from './InputWithLabel';
import ResultWithLabel from './ResultWithLabel';

function inputPersist(key, value, setValue) {
  const [updated, setUpdated] = useState(false);

  function readItem() {
    AsyncStorage.getItem(key).then(itemValue => setValue(parseFloat(itemValue)));
  }

  useEffect(readItem, [key, value]);

  function handleChange(input) {
    AsyncStorage.setItem(key, ''+input);
    setValue(parseFloat(input));
    setUpdated(true);
  }

  return {
    value,
    onChange: handleChange
  };
}

export default function App() {
  const [accountSize, setAccountSize] = useState(1000);
  const [riskPercent, setRiskPercent] = useState(1);
  const [entryPrice, setEntryPrice] = useState();
  const [slPrice, setSlPrice] = useState();
  const [tpPrice, setTpPrice] = useState();

  const tradeType = slPrice < entryPrice ? 'LONG' : 'SHORT';

  const posSize = Math.abs((accountSize * (riskPercent / 100)) / (entryPrice - slPrice));
  const posPrice = posSize * entryPrice;

  const maxRisk = Math.abs(entryPrice * posSize - slPrice * posSize);
  const possGain = Math.abs(tpPrice * posSize - entryPrice * posSize);
  const riskReward = possGain / maxRisk;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.block}>
        <InputWithLabel 
          label={"Account size ($)"}
          {...inputPersist('accountSize', accountSize, setAccountSize)} 
        />
        <InputWithLabel 
          label={"Risk per trade (%)"}
          value={riskPercent}
          onChange={setRiskPercent}
        />
        {riskPercent % 1 === 0 && riskPercent >= 1 && riskPercent <= 5 ? <Slider
          min={1}
          max={5}
          value={riskPercent}
          onChange={setRiskPercent}
        /> : null}
      </View>
      <View style={styles.block}>
        <InputWithLabel 
          label={"Entry"}
          {...inputPersist('entryPrice', entryPrice, setEntryPrice)}
        />
        <InputWithLabel 
          label={"Stop loss"}
          {...inputPersist('slPrice', slPrice, setSlPrice)}
        />
        <InputWithLabel 
          label={"Take Profit"}
          {...inputPersist('tpPrice', tpPrice, setTpPrice)}
          value={tpPrice}
        />
      </View>
      {accountSize && riskPercent && entryPrice && slPrice && tpPrice ? 
        <View>
          <View style={styles.block}>
            <ResultWithLabel 
              label={"Trade direction"}
              value={tradeType} />
            <ResultWithLabel 
              label={"Risk/Reward"}
              value={riskReward} />
          </View>
          <View style={styles.block}>
            <ResultWithLabel 
              label={"Max risk ($)"}
              value={maxRisk} />
            <ResultWithLabel 
              label={"Possible gain ($)"}
              value={possGain} />
          </View>
          <View style={styles.resultsBlock}>
            <ResultWithLabel 
              label={"Position size"}
              value={posSize} />
            <ResultWithLabel 
              label={"Position size ($)"}
              value={posPrice} />
          </View>
        </View>
        : <Text style={styles.resultPlaceholder}>Please enter values.</Text>
      }
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingLeft: 40,
    paddingRight: 40
  },
  inputsBlock: {
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 40
  },
  block: {
    marginBottom: 40
  },
  resultsBlock: {
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 40,
    backgroundColor: '#f3f3f3',
    padding: 20
  },
  resultPlaceholder : {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  }
});
