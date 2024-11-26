import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  CheckBox,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../components/colors';

const Login = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/icons/logo.png')} style={styles.logo} />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Register</Text>
      <Text style={styles.loginPrompt}>Create your new account</Text>

      {/* Username Input */}
    <View style={styles.inputContainers}>
        <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#9A9A9A"
      />

        <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#9A9A9A"
      />

        <TextInput
        style={styles.input}
        placeholder="Phone number"
        placeholderTextColor="#9A9A9A"
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Password"
          placeholderTextColor="#9A9A9A"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#9A9A9A"
          />
        </TouchableOpacity>
      </View>
    </View>

    <Text style={styles.terms}>
        By registering, you agree to the{' '}
        <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
        <Text style={styles.termsLink}>Privacy Policy</Text>
      </Text>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Sign up</Text>
      </TouchableOpacity>

      {/* Create Account */}
      <View style={styles.createAccountText}>
        <Text>Already have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.createAccountLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyBackground,
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    alignSelf: 'center',
  },
  loginPrompt: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
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
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
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
    gap: 5,
    alignSelf: 'center',

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
    marginBottom: 10,
    width: '100%',
  },
  terms:{
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
    marginTop: 10,
  },
  termsLink:{
    color: '#FF8C00',
    fontWeight: 'bold',
  }
});
