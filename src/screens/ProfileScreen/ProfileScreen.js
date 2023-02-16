import {View, Text, Button, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import Img from '../../assets/images/burger-2.jpg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';



const showAlert = () =>
  Alert.alert(
    'User Information:',
    'UserName:     Hayan                           Number:         0561692951                    Address:        Dubai',
  );

const ProfileScreen = () => {

  const navigation = useNavigation();

  const onNewPage = () => {
    navigation.navigate('Api');
    };

  return (
    <View style={styles.container}>
      <Image source={Img} style={styles.userImage} />
      <Text style={styles.userName}>User Name</Text>
      <Text>0561692951</Text>
      <View style={styles.showMore}>
        <Button color="#ff5c5c" title="SHOW MORE" onPress={showAlert}/>
      </View>
      <TouchableOpacity onPress={onNewPage}>
            <MaterialIcons
              name="api"
              size={50}
              style={{color:'black',top:20}}
            />
          </TouchableOpacity>
          <Text style={{fontSize:20,color:'black',top:20,fontWeight:'bold'}}>- Api -</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#8fcbbc',
    padding: 20,
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 150,
    marginBottom: 50,
    width: 150,
    position: 'relative',
    top: 40,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 23,
    color: 'black',
  },
  showMore: {
    margin: 15,
  },
});
export default ProfileScreen;
