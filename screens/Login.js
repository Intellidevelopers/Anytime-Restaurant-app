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
import { Ionicons } from '@expo/vector-icons';
import colors from '../components/colors';

const Login = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/icons/logo.png')} style={styles.logo} />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Hi, Welcome back!</Text>
      <Text style={styles.loginPrompt}>Login to your account</Text>

      {/* Username Input */}
    <View style={styles.inputContainers}>
    <TextInput
        style={styles.input}
        placeholder="Email"
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

      {/* Remember Me and Forgot Password */}
      <View style={styles.rememberForgotContainer}>
        <View style={styles.rememberMe}>
          
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>

      {/* Google Login */}
      <TouchableOpacity style={styles.googleButton}>
        <Ionicons name="logo-google" size={20} color="#000" />
        <Text style={styles.googleButtonText}>Google</Text>
      </TouchableOpacity>

      {/* Create Account */}
      <View style={styles.createAccountText}>
        <Text>Don't have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.createAccountLink}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyBackground,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  loginPrompt: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
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
    marginBottom: 10,
    width: '100%',
  }
});
