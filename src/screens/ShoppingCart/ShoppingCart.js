// import { View, Text, Button ,StyleSheet, Image } from 'react-native';
// import React from 'react';
// import Shoppingcart from '../../assets/images/Shopping-Cart.png';
// import { useSelector } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  FlatList as NativeList,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import VirtualizedList from '../../VirtualizedList';
import utf8 from 'utf-8';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../store/reducers';

import {useTranslation} from 'react-i18next';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ShoppingCart = ({navigation}) => {
  const removeItemFromCart = item => {
    dispatch(removeFromCart(item));
  };
  const increaseQuantity = item => {
    console.log(item);
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = item => {
    if (item.quantity == 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decrementQuantity(item));
    }
  };
  // const items =useSelector(state=>state);
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <VirtualizedList>
        {/* <Pressable>
                  <Text
                    style={{
                      borderColor: 'gray',
                      borderWidth: 1,
                      marginVertical: 10,
                      padding: 5,
                      backgroundColor:'#c50c0a',
           
                    }}>
                    REMOVE FROM CART
                  </Text>
                </Pressable> */}
        {/* <Image
          source={Shoppingcart}
          style={styles.Shoppingcart}
          resizeMode="contain"
        />
      <Text style={styles.Cart}>Shopping Cart</Text>
      */}

        {cart.map((item, index) => (
          <View
            style={{
              padding: 10,
              paddingVertical: 0,
              paddingTop: 0,
              marginBottom: -40,
              top:10
            }}
            key={index}> 
            <View style={{top:3, left: 120,position:'absolute'}}> 
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
             {t(item.name)}
            </Text> 
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'green'}}>
                {item.price} {t('AED')}
              </Text> 
            </View>
            <Image
              style={{width: 100, height: 100, borderRadius: 8, marginTop: 6}}
              source={{uri: item.image}}
            />
            <Pressable
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center',
                backgroundColor: 'green',
                borderRadius: 5,
                width: 100,
                bottom: 60,
                left: 111,
                height:35
              }}>
              <Pressable onPress={() => decreaseQuantity(item)}>
                <Text
                  style={{
                    fontSize: 25,
                    color: 'white',
                    paddingHorizontal: 10,
                    fontWeight: 'bold',
                  }}>
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    paddingHorizontal: 10,
                    fontWeight: 'bold',
                  }}>
                  {item.quantity}
                </Text>
              </Pressable>
              <Pressable onPress={() => increaseQuantity(item)}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    paddingHorizontal: 10,
                    fontWeight: 'bold',
                  }}>
                  +
                </Text>
              </Pressable>

              <Pressable onPress={() => removeItemFromCart(item)}>
                <Text
                  style={{
                    flexDirection: 'row',
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 5,
                    marginVertical: 10,
                    padding: 5,
                    backgroundColor: '#c50c0a',
                    width: 100,
                    height: 35,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    left:50,
                  }}>
                  {t('REMOVE')}  

                </Text>
                
              </Pressable>
            </Pressable>
          </View>
        ))}
      </VirtualizedList>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ShoppingCart;
