import {View, Text, Button, StyleSheet, TextInput, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImgSearch from '../../assets/images/Search.png';


const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Search}>Search Screen</Text>
      <View style={styles.searchBox}>
        <AntDesign
          name="search1"
          size={25}
          color="#000000"
          style={styles.searchIcon}
        />
        <TextInput style={styles.input} placeholder="Search" />
        <Image
          source={ImgSearch}
          style={styles.ImgSearch}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#8fcbbc',
  },

  searchBox: {
    flexDirection: 'row',
    width: '93%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    margin: 20,
    marginLeft: 16,
    marginTop:100,
    elevation: 10,
  },
  searchIcon: {
    color: 'blue',
  },
  input: {
    marginLeft: 3,
    width: '90%',
    fontSize: 19,
    color: 'black',
    marginBottom: -9,
    marginTop: -10,
  },
  Search: {
    fontWeight: 'bold',
    fontSize: 23,
    color: 'black',
    position: 'absolute',
    top: 15,
    right:"30%"
  
  },
  ImgSearch: {
    width:'60%',
    position:'relative',
    right:280,
    top:280,
    },
});

export default SearchScreen;
