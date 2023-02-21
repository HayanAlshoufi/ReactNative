import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  FlatList as NativeList,
  TouchableOpacity,
  ScrollView,
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

import {useTranslation} from 'react-i18next';

const Pizza = () => {
  const {t} = useTranslation();
  const cart = useSelector(state => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const data = [
    {
      id: '8',
      image:
        'https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=740&t=st=1676874001~exp=1676874601~hmac=bae3c5df59ab908d2ffb1a512e097ed22bedb591224ed587dbd9671b5b200b7c',

      name: 'Veggie Pizza',
      price: '47',
    },
    {
      id: '9',
      image:
        'https://media.istockphoto.com/id/1221264109/photo/pizza-four-cheeses-on-bamboo-bottom-on-wooden-table-top-view.jpg?s=1024x1024&w=is&k=20&c=LVhkLvlBmiYYGB7Lup8ybqKFTssu_oJS2XDORcx1f0w=',
      name: 'Sicilian Pizza',
      price: '20',
    },
    {
      id: '10',
      image:
        'https://media.istockphoto.com/id/1398155860/photo/pizza-with-pears-and-gorgonzola.jpg?s=1024x1024&w=is&k=20&c=SmnoNEMmYEIf2dWCWVH9swOND2jG_nsPQUN_RK_E67s=',

      name: 'Cheese Pizza',
      price: '23',
    },
    {
      id: '11',
      image:
        'https://media.istockphoto.com/id/1398155858/photo/pizza-with-pears-and-gorgonzola.jpg?s=1024x1024&w=is&k=20&c=w8ovaoPLAjV951nOOGEDorq3rh4ZhLxAgHXjmPTkaIs=',

      name: 'Hawaiian Pizza',
      price: '25',
    },
    {
      id: '12',
      image:
        'https://media.istockphoto.com/id/178483558/photo/pizza.jpg?s=1024x1024&w=is&k=20&c=FhVbtNHGuHiqb3YbwSpfeuj8y5UgGC-5-7t4I7BPLWs=',

      name: 'BBQ Pizza',
      price: '40',
    },
    {
      id: '13',
      image:
        'https://media.istockphoto.com/id/1221264109/photo/pizza-four-cheeses-on-bamboo-bottom-on-wooden-table-top-view.jpg?s=1024x1024&w=is&k=20&c=LVhkLvlBmiYYGB7Lup8ybqKFTssu_oJS2XDORcx1f0w=',

      name: 'Margherita Pizza',
      price: '37',
    },
    {
      id: '14',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/21/46/american-1239081_960_720.jpg',

      name: 'Pepperoni Pizza',
      price: '36',
    },
    {
      id: '15',
      image:
        'https://media.istockphoto.com/id/656703220/photo/delicious-homemade-margarita-pizza.jpg?s=1024x1024&w=is&k=20&c=z1L5bic97NsunobCcrtq_LGB4upOcaJ7IDhOT3zymjI=',

      name: 'Meat Pizza',
      price: '39',
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

  const onPres = () => {
    //validate user
    navigation.navigate('Cart');
  };

  return (
    <View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 26,
            fontWeight: 'bold',
            color: 'black',
          }}>
          {t('Items')}
        </Text>
        
      </View>
      <VirtualizedList>
        <View style={{marginTop: 25}}>
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

              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                  {t(item.name)}
                </Text>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: 'green'}}>
                  {item.price} {t('AED')}
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
                        width: 165,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {t('REMOVE FROM CART')}
                    </Text>
                  </Pressable>
                ) : (
                  <Pressable onPress={() => addItemToCart(item)}>
                    <Text
                      style={{
                        borderColor: 'gray',
                        width: 112,
                        borderWidth: 1,
                        marginVertical: 10,
                        padding: 5,
                        backgroundColor: '#00a340',
                        fontWeight: 'bold',
                      }}>
                      {t('ADD TO CART')}
                    </Text>
                  </Pressable>
                )}
              </View>
            </Pressable>
          ))}

          <Text style={{color: 'black', textAlign: 'center'}}>
            -----------------------------------------------------------------------
          </Text>

       
        </View>
      </VirtualizedList>
      <View style={styles.Cart}>
          <TouchableOpacity onPress={onPres}>
            <Fontisto
              name="shopping-basket-add"
              size={40}
              color="#a80302"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default Pizza;

const styles = StyleSheet.create({
  Cart: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  icon: {

  },
});
