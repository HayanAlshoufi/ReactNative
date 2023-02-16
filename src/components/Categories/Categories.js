import {StyleSheet, Text, View, ScrollView,TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';


import {useNavigation} from '@react-navigation/native';


const Categories = () => {


  const navigation = useNavigation();

  const onNewPage2 = () => {
    navigation.navigate('Meal2');
    };


  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity onPress={onNewPage2}>
        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={25}
            color="#a80302"
            style={styles.icon}

          />
          <Text style={styles.text}>Burger</Text>
        </View>
        </TouchableOpacity>

        <View style={styles.box}>
          <FontAwesome5
            name="pizza-slice"
            size={25}
            color="#000000"
            style={styles.icon}
          />
          <Text style={styles.text}>Pizza</Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons
            name="noodles"
            size={25}
            color="#000000"
            style={styles.icon}
          />
          <Text style={styles.text}>Noodles</Text>
        </View>

        <View style={styles.box}>
          <Entypo
            name="cake"
            size={25}
            color="#000000"
            style={styles.icon}
          />
          <Text style={styles.text}>Cake</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={25}
            color="#000000"
            style={styles.icon}
          />
          <Text style={styles.text}>Burger</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={25}
            color="#000000"
            style={styles.icon}
          />
          <Text style={styles.text}>Burger</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={25}
            color="#000000"
            style={styles.icon}
          />
          <Text style={styles.text}>Burger</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={25}
            color="#000000"
            style={styles.icon}
          />
          <Text style={styles.text}>Burger</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={25}
            color="#000000"
            style={styles.icon}
          />
          <Text style={styles.text}>Burger</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={25}
            color="#000000"
            style={styles.icon}
          />
          <Text style={styles.text}>Burger</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={25}
            color="#000000"
            style={styles.icon}
          />
          <Text style={styles.text}>Burger</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '93%',
    elevation: 10,
    borderRadius: 10,
    marginLeft:16
  },
  head: {
    color: 'red',
    fontSize: 25,
    fontWeight: '300',
    margin: 10,
    alignSelf: 'center',
    paddingBottom: 5,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  box: {
    backgroundColor: 'white',
    elevation: 20,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  icon:{
    marginRight:10,
    color:'#a80302',
    
  },

  text:{
    color:'black',
    fontWeight:'bold',

  },
});
