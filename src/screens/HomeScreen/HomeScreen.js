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
/////
import {useTranslation} from 'react-i18next';
/////
import Test from '../Test';

import {useSelector, useDispatch} from 'react-redux';

const himenusSite = () => {
  Linking.openURL('https://himenus.com/');
};

const HomeScreen = ({navigation}) => {
  /////
  const {t} = useTranslation();
  /////
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
     <Test/>
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

          <TextInput style={styles.input} placeholder={t('Search')} />
        </View>

        <Categories />
        <OfferSlider />
        <FeaturedRow
          id="123"
          title={t("Burger 1")}
          description={t("delicious burger")}
        />
        <FeaturedRow
          id="1234"
          title={t("Burger 2")}
          description={t("delicious burger")}
        />
        <FeaturedRow
          id="12345"
          title={t("Burger 3")}
          description={t("delicious burger")}
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
  selectEnglish: {
    width: '7%',
    height: 27,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#a80302',
    position: 'absolute',
    right: 100,
    top: 16,
  },
  selectArabic: {
    width: '7%',
    height: 27,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#a80302',
    position: 'absolute',
    right: 63,
    top: 16,
  },
  English: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  Arabic: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;
