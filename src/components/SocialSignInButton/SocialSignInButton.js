import { StyleSheet, Text, View, TouchableOpacity,Image,Linking } from 'react-native'
import React from 'react';
import Google from '../../assets/images/Google.png';
import Facebook from '../../assets/images/Facebook.png';
import Apple from '../../assets/images/Apple.png';



import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const SocialSignInButton = () => {
    const onSignInGoogle = () => {
        Linking.openURL('https://www.google.com/');
    }

    const onSignInFacebook = () => {
        Linking.openURL('https://www.facebook.com/');
    }

    const onSignInApple = () => {
        Linking.openURL('https://www.apple.com/ ');

    }
    return (
        <View style={{
            flex: 1,
        }}>
            <Text style={{ textAlign: 'center', marginTop: hp(7),color:'gray' }}>------------------------------ or Login With ------------------------------</Text>

            <View style={styles.socialLoginView}>

                <TouchableOpacity onPress={onSignInGoogle}>
                    <Image
                        source={Google}
                        style={styles.Google}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={onSignInFacebook}>
                    <Image

                        source={Facebook}
                        style={styles.Facebook}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={onSignInApple}>
                    <Image
                        source={Apple}
                        style={styles.Apple}
                    />
                </TouchableOpacity>


            </View>
        </View>
    )
}

export default SocialSignInButton

const styles = StyleSheet.create({
    Google: {
        width: wp(11),
        height: hp(6),


    },
    Facebook: {
        width: wp(12),
        height: hp(6.5),

    },
    Apple: {
        width: wp(11),
        height: hp(6),

    },

    socialLoginView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        marginTop: hp(1),

    },
});