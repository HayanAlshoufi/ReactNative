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
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../store/reducers';


import {useTranslation} from 'react-i18next';


const ShoppingCart = ({navigation}) => {


  const {t}=useTranslation();

  const removeItemFromCart = item => {
    dispatch(removeFromCart(item));
  };
const increaseQuantity = item => {
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
            <View style={{padding: 10,paddingVertical:0,paddingTop:0,marginBottom:-50}} key={index}>
                <View style={{top:55,left:111}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color:'black'}}>
                  {item.name}
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 15, color:'green'}}>
                  {item.price}
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
                  bottom:60,
                  left:111,
                  
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
                        borderRadius:5,
                        marginVertical: 10,
                        padding: 5,
                        backgroundColor: '#c50c0a',
                        width:100,
                        height:35,
                        fontWeight:'bold',
                        color:'black',
                        position:'absolute',
                        top:-27,
                        left:40,
                       textAlign:'center',
                       fontWeight:'bold',
                      }}>
                      {t("REMOVE")}
                    </Text>
                  </Pressable>
                  </Pressable>
        </View>
        ))}</VirtualizedList>
    </View>
  )
}

const styles = StyleSheet.create({

});
export default ShoppingCart