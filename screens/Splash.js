import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Animated, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import colors from '../components/colors';

const Splash = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const timeout = setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }).start(() => {
            navigation.replace('Onboarding');
          });
        }, 3000); // Set delay to 3 seconds (3000 ms)
    
        return () => clearTimeout(timeout);
      }, [fadeAnim, navigation]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image source={require('../assets/icons/logo.png')} style={styles.logo}/>
      <StatusBar backgroundColor='#fff'/>
    </Animated.View>
  )
}


export default Splash

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo:{
        width: 150,
        height: 150,
        resizeMode: 'contain'
    }
})