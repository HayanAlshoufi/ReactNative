// import {
//   View,
//   Text,
//   Button,
//   StyleSheet,
//   TextInput,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import burger from '../../assets/images/burger-2.jpg';
// import { useDispatch, useSelector } from 'react-redux';
// import { addition, subtraction } from '../../store/action';

// const Meal2 = ({navigation}) => {

// const data = useSelector((state) => state.counter);
// const dispatch=useDispatch();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.Burger}>Burger</Text>
//       <Image source={burger} style={styles.ImgBurger} resizeMode="contain" />

//       <View style={styles.But1}>
//         <TouchableOpacity  onPress={()=> dispatch(addition())}>
//           <AntDesign name="plus" size={20} color="white" left={4} top={4} />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.Counter}>
//         <Text style={{fontSize:20,color:'blue',fontWeight:'400'}}>{data}</Text>
//       </View>

//       <View style={styles.But2}>
//         <TouchableOpacity onPress={()=> dispatch(subtraction())}>
//           <AntDesign name="minus" size={20} color="white" left={4} top={4} />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.Btn}>
//         <Button title="Add To Cart" style={styles.Btn} color="blue" />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     backgroundColor: '#8fcbbc',
//   },

//   Burger: {
//     fontWeight: 'bold',
//     fontSize: 23,
//     color: 'black',
//     position: 'absolute',
//     top: 15,
//     right: '40%',
//   },
//   ImgBurger: {
//     borderColor: '#FFF',
//     borderRadius: 15,
//     borderWidth: 3,
//     height: 250,
//     width: 350,
//     position: 'relative',
//     top: 60,
//     left: 30,
//   },

//   But1: {
//     borderColor: '#FFF',
//     borderRadius: 3,
//     height: 30,
//     width: 30,
//     position: 'relative',
//     top: 65,
//     left: 35,
//     backgroundColor: 'blue',
//   },
//   But2: {
//     borderColor: '#FFF',
//     borderRadius: 3,
//     height: 30,
//     width: 30,
//     position: 'relative',
//     top: 5,
//     left: 105,
//     backgroundColor: 'blue',
//   },
//   Btn: {
//     width: '27%',
//     marginLeft: 260,
//     marginTop: -25,
//   },
//   Counter: {
//     height: 30,
//     width: 30,
//     position: 'relative',
//     top: 37,
//     left: 77,

//   },
// });

// export default Meal2;

import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  FlatList as NativeList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../store/reducers';
import VirtualizedList from '../../VirtualizedList';
import Fontisto from 'react-native-vector-icons/Fontisto';


import {useNavigation} from '@react-navigation/native';






const Meal2 = () => {
  const cart = useSelector(state => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const data = [
    {
      id: '0',
      image:
        'https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg',

      name: 'Chicken Burger',
      price: '20 AED',
    },
    {
      id: '1',
      image:
        'https://cdn.pixabay.com/photo/2021/01/19/08/47/sandwich-5930496_960_720.jpg',
      name: 'Beef Burger',
      price: '25 AED',
    },
    {
      id: '2',
      image:
      'https://cdn.pixabay.com/photo/2017/08/04/11/35/burger-2579902_960_720.jpg',

      name: 'Cheese Burger ',
      price: '15 AED',
    },
    {
      id: '3',
      image:
      'https://cdn.pixabay.com/photo/2018/02/09/08/44/burger-3141127_960_720.jpg',

      name: 'Vegetable Burger ',
      price: '17 AED',
    },
    {
      id: '4',
      image:
      'https://cdn.pixabay.com/photo/2021/01/22/04/24/sandwich-5939093_960_720.jpg',

      name: 'Cheese Burger ',
      price: '13 AED',
    },
    {
      id: '5',
      image:
      'https://cdn.pixabay.com/photo/2022/05/05/05/48/burger-7175344_960_720.jpg',

      name: 'Meat Burger ',
      price: '37 AED',
    },
    {
      id: '6',
      image:
      'https://cdn.pixabay.com/photo/2016/11/17/04/22/burger-1830695_960_720.jpg',

      name: 'Black Burger ',
      price: '55 AED',
    },
    {
      id: '7',
      image:
      'https://cdn.pixabay.com/photo/2022/04/30/08/42/burger-7165152_960_720.jpg',

      name: 'Beef Burger ',
      price: '66 AED',
    },
  ];
  const addItemToCart = item => {
    dispatch(addToCart(item));
  };
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




  
  
  const navigation = useNavigation();
  
  const onPres = ()=> {
    //validate user
    navigation.navigate('Cart');
    
  };

  
  return (
    <View>
      <VirtualizedList>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 26,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Items
        </Text>
        <View style={styles.Cart}>
          <TouchableOpacity onPress={onPres}>
            <Fontisto name="shopping-basket-add" size={40} color="green" />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 25}} >
          {data.map(item => (
            <Pressable
              key={item.id}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{margin: 10}}>
                <Image
                  style={{width: 100, height: 100, borderRadius: 8}}
                  source={{uri: item.image}}
                />
              </View>

              <View >
                <Text style={{fontWeight: 'bold', fontSize: 20, color:'black'}}>
                  {item.name}
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 15, color:'green'}}>
                  {item.price}
                </Text>
                {cart.some(value => value.id == item.id) ? (
                  <Pressable onPress={() => removeItemFromCart(item)}>
                    <Text
                      style={{
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginVertical: 10,
                        padding: 5,
                        backgroundColor: '#c50c0a',
                        width:150,
                        fontWeight:'bold',
                        color:'black',
                      }}>
                      REMOVE FROM CART
                    </Text>
                  </Pressable>
                ) : (    
                  <Pressable onPress={() => addItemToCart(item)}>
                    <Text
                      style={{
                        borderColor: 'gray',
                        width:101,
                        borderWidth: 1,
                        marginVertical: 10,
                        padding: 5,
                        backgroundColor: '#00a340',
                        fontWeight:'bold',

                      }}>
                 ADD TO CART
                    </Text>
                  </Pressable>
                )}
              </View>
            </Pressable>
          ))}


<Text style={{color:'black',textAlign:"center"}}>-----------------------------------------------------------------------</Text>

          {/* {cart.map((item, index) => (
            <View style={{padding: 10, marginVertical:-50}} key={index}>
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
              </Pressable>
            </View>
          ))} */}
        </View>
      </VirtualizedList>
    </View>
  );
};

export default Meal2;

const styles = StyleSheet.create({
  Cart: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
});
