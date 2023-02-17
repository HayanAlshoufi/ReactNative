import {View, Text, StyleSheet,Button} from 'react-native';
import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { useTranslation } from 'react-i18next';
import { colors } from 'react-select/dist/declarations/src/theme';
const options = [
  {label: 'EN', value: 'en'},
  {label: 'AR', value: 'ar'},
  {label: 'FR', value: 'fr'},
];
    
const Test = () => {
  const {t, i18n} = useTranslation();
  return (
    <View style={{flex:1,position:'absolute',right:70,top:5,width:150}}>
      <View>
        <SwitchSelector
          options={options}
          initial={0}
          onPress={language => {
            i18n.changeLanguage(language);
          }}
        />
      </View>
    </View>
  );
};

export default Test;
