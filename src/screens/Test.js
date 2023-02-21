import {View, Text, StyleSheet,Button,TouchableOpacity} from 'react-native';
import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { useTranslation } from 'react-i18next';
const options = [
  {label: 'EN', value: 'en'},
  {label: 'AR', value: 'ar'},
  {label: 'FR', value: 'fr'},
];
    
const Test = () => {
  const {t, i18n} = useTranslation();
  return (
    <View style={{flex:1,position:'absolute',right:70,top:5,width:150}}>
      <View         
      style={{
          flexDirection: 'row',
          marginLeft:30,
          marginTop:5,

        }}
        >

        {/* <SwitchSelector
          options={options}
          initial={0}
          onPress={language => {
            i18n.changeLanguage(language);
          }}
        /> */}

        <TouchableOpacity
          onPress={() => i18n.changeLanguage('en')} //Here I change the language to "en" English
          style={Styles.button}>
          <Text style={{color: '#000',fontWeight:'bold'}}>EN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => i18n.changeLanguage('ar')} //Here I change the language to "es" Spanish
          style={Styles.button}>
          <Text style={{color: '#000',fontWeight:'bold'}}>AR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => i18n.changeLanguage('fr')} //Here I change the language to "de" German
          style={Styles.button}>
          <Text style={{color: '#000',fontWeight:'bold'}}>FR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Test;
const Styles = StyleSheet.create({
  button: {
    width:32,
    height:30,
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 7,
    margin: 5,
    elevation:10
  },
});