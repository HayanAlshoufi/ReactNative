import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  FlatList as NativeList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Img1 from '../../assets/images/1.png';
import Img2 from '../../assets/images/2.png';
import Img3 from '../../assets/images/3.png';
import Img4 from '../../assets/images/4.png';
import Img5 from '../../assets/images/5.png';
import Img6 from '../../assets/images/6.png';
import Img7 from '../../assets/images/7.png';
import Img8 from '../../assets/images/8.png';
import Img9 from '../../assets/images/9.png';
import Img10 from '../../assets/images/10.png';
import Img11 from '../../assets/images/11.png';


import {useTranslation} from 'react-i18next';


const VirtualizedList = ({children}) => {

  return (
    <NativeList
      data={[]}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      keyExtractor={() => keyExtractor()}
      initialNumToRender={7}
      keyboardShouldPersistTaps="always"
      listKey={keyExtractor()}
      renderItem={null}
      ListHeaderComponent={<View>{children}</View>}
    />
  );
};
const keyExtractor = () => {
  return (
    new Date().getTime().toString() +
    Math.floor(Math.random() * Math.floor(new Date().getTime())).toString()
  );
};
// const Green = () =>
//   Alert.alert(
//     'Notification:',
//     'Green',
//   );

//   const Blue = () =>
//   Alert.alert(
//     'Notification:',
//     'blue',
//   );

//   const Yellow = () =>
//   Alert.alert(
//     'Notification:',
//     'Yellow',
//   );

//   const Red = () =>
//   Alert.alert(
//     'Notification:',
//     'Red',
//   );

const NotificationScreen = ({navigation}) => {

  const {t}=useTranslation();



  return (
    <View style={styles.container}>
      <VirtualizedList>
        <Text style={styles.Notification}>{t("Notifications")}</Text>
        <View style={styles.boxes}>
          <View style={styles.box}>
            <Text style={styles.Bug}>{t("Burger 1")}</Text>
            <View style={styles.Btn}>
        <Button title={t("Add To Cart")} style={styles.Btn} color="green" />
      </View>
            <Image source={Img1} style={styles.mealImage} />
          </View>
          <View style={styles.box}>
            <Text style={styles.Bug}>{t("Burger 2")}</Text>
            <View style={styles.Btn}>
        <Button 
        title={t("Add To Cart")} style={styles.Btn} color="green" />
      </View>
            <Image source={Img2} style={styles.mealImage} />
          </View>
          <View style={styles.box}>
            <Text style={styles.Bug}>{t("Burger 3")}</Text>
            <View style={styles.Btn}>
        <Button title={t("Add To Cart")} style={styles.Btn} color="green" />
      </View>
            <Image source={Img3} style={styles.mealImage} />
          </View>
          <View style={styles.box}>
            <Text style={styles.Bug}>{t("Burger 4")}</Text>
            <View style={styles.Btn}>
        <Button title={t("Add To Cart")} style={styles.Btn} color="green" />
      </View>
            <Image source={Img4} style={styles.mealImage} />
          </View>
          <View style={styles.box}>
            <Text style={styles.Bug}>{t("Burger 5")}</Text>
            <View style={styles.Btn}>
        <Button title={t("Add To Cart")} style={styles.Btn} color="green" />
      </View>
            <Image source={Img5} style={styles.mealImage} />
          </View>
          <View style={styles.box}>
            <Text style={styles.Bug}>{t("Burger 6")}</Text>
            <View style={styles.Btn}>
        <Button title={t("Add To Cart")} style={styles.Btn} color="green" />
      </View>
            <Image source={Img6} style={styles.mealImage} />
          </View>
          <View style={styles.box}>
            <Text style={styles.Bug}>{t("Burger 7")}</Text>
            <View style={styles.Btn}>
        <Button title={t("Add To Cart")} style={styles.Btn} color="green" />
      </View>
            <Image source={Img7} style={styles.mealImage} />
          </View>
          <View style={styles.box}>
            <Text style={styles.Bug}>{t("Burger 8")}</Text>
            <View style={styles.Btn}>
        <Button title={t("Add To Cart")} style={styles.Btn} color="green" />
      </View>
            <Image source={Img8} style={styles.mealImage} />
          </View>
          <View style={styles.box}>
            <Text style={styles.Bug}>{t("Burger 9")}</Text>
            <View style={styles.Btn}>
        <Button title={t("Add To Cart")} style={styles.Btn} color="green" />
      </View>
            <Image source={Img9} style={styles.mealImage} />
          </View>
          <View style={styles.box}>
            <Text style={styles.Bug}>{t("Burger 10")}</Text>
            <View style={styles.Btn}>
        <Button title={t("Add To Cart")} style={styles.Btn} color="green" />
      </View>
            <Image source={Img10} style={styles.mealImage} />
          </View>
          <View style={styles.box}>
            <Text style={styles.Bug}>{t("Burger 11")}</Text>
            <View style={styles.Btn}>
        <Button title={t("Add To Cart")} style={styles.Btn} color="green" />
      </View>
            <Image source={Img11} style={styles.mealImage} />
          </View>
        </View>
      </VirtualizedList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  Notification: {
    fontWeight: 'bold',
    fontSize: 23,
    color: 'black',
    position: 'absolute',
    top: 15,
    left: 140,
  },
  boxes: {
    width: '93%',
    marginTop: 70,
    marginLeft: 13,
  },

  box: {
    backgroundColor: 'white',
    height: 90,
    elevation: 20,
    margin: 6,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  mealImage: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 15,
    height: 80,
    marginBottom: 50,
    width: 90,
    position: 'relative',
    top: 25,
    left: 135,
  },
  Bug: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
    position: 'absolute',
    top:5,
    left:10
  },
  Btn:{
    position:'absolute',
    top:45,
    left:10,
    width:'35%',
  },
});

export default NotificationScreen;
