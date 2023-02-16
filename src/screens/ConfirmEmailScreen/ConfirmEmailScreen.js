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
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

import {useSelector, useDispatch} from 'react-redux';

const ConfirmEmailScreen = () => {
  const uName = useSelector(state => state.user.uName);
  const email = useSelector(state => state.user.email);
  const uPass = useSelector(state => state.user.uPass);
  const rePass = useSelector(state => state.user.rePass);
  console.log('User Name: ' + uName);
  console.log('Email: ' + email);
  console.log('Password: ' + uPass);
  console.log('Repeat Password: ' + rePass);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      confirm: '',
    },
  });

  /*   const [code, setCode] = useState(''); */

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('HomeScreen');
  };

  const onResendPassed = () => {
    navigation.navigate('ConfirmEmail');
    console.warn('Resend code');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        {/*
                <CustomInput
                    placeholder="Enter your confirmation code"
                    value={code}
                    setValue={setCode}
                />
*/}

        <Controller
          control={control}
          rules={{
            maxLength: 20,
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              placeholder="Enter your confirmation code"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="confirm"
        />
        {errors.confirm && <Text style={styles.input}>This is required.</Text>}

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <TouchableOpacity>
          <Text type="SECONDARY" style={styles.SignIn} onPress={onResendPassed}>
            Resend code
            {'                               '}
            <Text
              type="SECONDARY"
              style={styles.SignIn}
              onPress={onSignInPressed}>
              Back to Sign in
            </Text>
          </Text>
        </TouchableOpacity>
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
    color: '#051C60',
    marginTop: 20,
    marginBottom: 30,
  },

  SignIn: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    color: '#051C60',
  },

  input: {
    color: 'red',
    marginLeft: 9,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
});
export default ConfirmEmailScreen;
