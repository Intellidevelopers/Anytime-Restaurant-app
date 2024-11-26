import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  CheckBox,
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import colors from '../components/colors';

const ForgotPassword = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
        <Text style={styles.header}>
            <AntDesign
                name="leftcircleo"
                size={35}
                color={colors.primary}
                onPress={() => navigation.goBack()}
            />
        </Text>
      {/* Logo */}
      <Image source={require('../assets/images/forgot.png')} style={styles.logo} />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Forgot your password?</Text>

      {/* Username Input */}
    <View style={styles.inputContainers}>
    <TextInput
        style={styles.input}
        placeholder="Enter email address"
        placeholderTextColor="#9A9A9A"
      />

    </View>
      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Reset')}>
        <Text style={styles.loginButtonText}>Send Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyBackground,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  loginPrompt: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: colors.input
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 40, // Leave space for the eye icon
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 5,
  },
  rememberMeText: {
    fontSize: 16,
    color: '#000',
  },
  forgotPassword: {
    fontSize: 16,
    color: '#FF8C00',
    fontWeight: '500'
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#FF8C00',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E6E6E6',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#9A9A9A',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 40,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: colors.label,
    marginTop: 10
  },
  googleButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  createAccountText: {
    fontSize: 14,
    color: '#9A9A9A',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  createAccountLink: {
    color: '#FF8C00',
    fontWeight: 'bold',
  },
  inputContainers:{
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  header:{
    alignItems: 'center',
    marginBottom: 50,
    alignSelf: 'flex-start'
  }
});
