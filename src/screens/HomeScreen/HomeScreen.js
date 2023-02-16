import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  FlatList as NativeList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import Categories from '../../components/Categories/Categories';
import OfferSlider from '../../components/OfferSlider/OfferSlider';
import FeaturedRow from '../../components/FeaturedRow/FeaturedRow';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Himenus from '../../assets/images/himenus.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import VirtualizedList from '../../VirtualizedList';

import {useSelector, useDispatch} from 'react-redux';

const himenusSite = () => {
  Linking.openURL('https://himenus.com/');
};

const HomeScreen = ({navigation}) => {
  //Redux test
  const name = useSelector(state => state.user.name);
  const pass = useSelector(state => state.user.pass);
  console.log('User Name: ' + name);
  console.log('Password: ' + pass);

  return (
    <View style={styles.container}>
      <VirtualizedList>
        <View style={{flexDirection: 'row'}}>
          <Image source={Himenus} style={styles.Logo} />
          <TouchableOpacity onPress={himenusSite}>
            <MaterialCommunityIcons
              name="web"
              size={40}
              style={styles.myIcon}
            />
          </TouchableOpacity>
        </View>
        {/* <Text>{name}</Text> */}
        <StatusBar />
        <View style={styles.searchBox}>
          <AntDesign
            name="search1"
            size={25}
            color="#000000"
            style={styles.searchIcon}
          />

          <TextInput style={styles.input} placeholder="Search" />
        </View>

        <Categories />
        <OfferSlider />
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
        <FeaturedRow
          id="12345"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
        />
      </VirtualizedList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  searchBox: {
    flexDirection: 'row',
    width: '93%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    margin: 20,
    marginLeft: 16,
    elevation: 10,
  },
  input: {
    marginLeft: 3,
    width: '90%',
    fontSize: 19,
    color: 'black',
    marginBottom: -9,
    marginTop: -10,
  },
  searchIcon: {
    color: 'red',
  },

  Logo: {
    resizeMode: 'contain',
    height: 50,
    width: 200,
    marginRight: 175,
    marginLeft: -20,
  },
  myIcon: {
    marginRight: 30,
    marginTop: 10,
    color: '#a80302',
  },
});

export default HomeScreen;
