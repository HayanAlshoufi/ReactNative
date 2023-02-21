import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Icon,
  TouchableOpacity,
  Linking,
  Touchable,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';



const ForgotPasswordScreen = () => {

    const {
        control,
        handleSubmit,
        formState: {errors},
      } = useForm({
        defaultValues: {
          username: '',
          password: '',
        },
      });

 /* const [username, setUsernme] = useState(''); */

  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>



        <Controller
          control={control}
          rules={{
            maxLength: 20,
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              placeholder="Username"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username && <Text style={styles.input}>This is required.</Text>}

        <CustomButton text="SEND" onPress={handleSubmit(onSendPressed)} />

        <Text type="SECONDARY" style={styles.SignIn} onPress={onSignInPressed}>
          Back to Sign in
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    marginVertical: 30,
    paddingTop: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#a80302',
    marginTop: 20,
    marginBottom: 10,
    bottom:40,
  },

  SignIn: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    color: 'black',
  },

  input: {
    color: 'red',
    marginLeft:9,
    alignSelf:'flex-start',
    alignItems:'flex-start'
    
  },
});
export default ForgotPasswordScreen;
