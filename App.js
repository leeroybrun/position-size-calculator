
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, TextInput } from 'react-native';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';

import Slider from './slider/Slider';
import InputWithLabel from './InputWithLabel';
import ResultWithLabel from './ResultWithLabel';

function inputPersist(key, value, setValue) {
  function readItem() {
    AsyncStorage.getItem(key).then(itemValue => setValue(itemValue));
  }

  useEffect(readItem, [key, value]);

  function handleChange(input) {
    AsyncStorage.setItem(key, ''+input);
    setValue(input);
  }

  return {
    value,
    onChange: handleChange
  };
}

function round(num, decimals) {
  return parseFloat(num.toFixed(decimals));
}

export default function App() {
  const [accountSizeStr, setAccountSizeStr] = useState(1000);
  const [riskPercentStr, setRiskPercentStr] = useState(1);
  const [entryPriceStr, setEntryPriceStr] = useState();
  const [slPriceStr, setSlPriceStr] = useState();
  const [tpPriceStr, setTpPriceStr] = useState();

  const accountSize = parseFloat(accountSizeStr);
  const riskPercent = parseFloat(riskPercentStr);
  const entryPrice = parseFloat(entryPriceStr);
  const slPrice = parseFloat(slPriceStr);
  const tpPrice = parseFloat(tpPriceStr);

  const tradeType = slPrice < entryPrice ? 'LONG' : 'SHORT';

  const posSize = round(Math.abs((accountSize * (riskPercent / 100)) / (entryPrice - slPrice)), 8);
  const posPrice = round(posSize * entryPrice, 4);

  const maxRisk = round(Math.abs(entryPrice * posSize - slPrice * posSize), 0);
  const possGain = round(Math.abs(tpPrice * posSize - entryPrice * posSize), 0);
  const riskReward = round(possGain / maxRisk, 2);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.block}>
        <InputWithLabel 
          label={"Account size ($)"}
          {...inputPersist('accountSize', accountSizeStr, setAccountSizeStr)} 
        />
        <InputWithLabel 
          label={"Risk per trade (%)"}
          value={riskPercentStr}
          onChange={setRiskPercentStr}
        />
        {riskPercent % 1 === 0 && riskPercent >= 1 && riskPercent <= 5 ? <Slider
          min={1}
          max={5}
          value={riskPercent}
          onChange={setRiskPercentStr}
        /> : null}
      </View>
      <View style={styles.block}>
        <InputWithLabel 
          label={"Entry"}
          {...inputPersist('entryPrice', entryPriceStr, setEntryPriceStr)}
        />
        <InputWithLabel 
          label={"Stop loss"}
          {...inputPersist('slPrice', slPriceStr, setSlPriceStr)}
        />
        <InputWithLabel 
          label={"Take Profit"}
          {...inputPersist('tpPrice', tpPriceStr, setTpPriceStr)}
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
