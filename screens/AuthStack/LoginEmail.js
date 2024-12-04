import { View, Text, Image, TextInput, Pressable, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';

const SignUpEmail = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Email validation function
  const validateEmail = (value) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email format
    if (!value.match(emailRegex)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  // Password validation function
  const validatePassword = (value) => {
    setPassword(value);
    if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  // Check if form is valid
  React.useEffect(() => {
    if (email && password && !emailError && !passwordError) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password, emailError, passwordError]);

  // Submit handler
  const handleLogin = () => {
    if (!email || !password || emailError || passwordError) {
      Alert.alert('Error', 'Please correct the errors before continuing.');
      return;
    }
    login(email, password);
  };

  return (
    <View className="flex-1 bg-white">
      <Image
        className="self-center mt-16"
        source={require('../../assets/png/logo.png')}
        resizeMode="contain"
      />

      <View className="items-center px-8 pt-24">
        <Text className="text-xl font-bold text-center">
          Enter your email address and password
        </Text>

        {/* Email Input */}
        <TextInput
          className="w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-5 py-1.5 mt-6 text-base"
          value={email}
          onChangeText={(value) => validateEmail(value)}
          placeholder="sample@domain.com"
          keyboardType="email-address"
        />
        {emailError ? <Text className="text-red-500 text-sm mt-1">{emailError}</Text> : null}

        {/* Password Input */}
        <TextInput
          className="w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-5 py-1.5 mt-4 text-base"
          value={password}
          onChangeText={(value) => validatePassword(value)}
          placeholder="Enter Password"
          secureTextEntry
        />
        {passwordError ? <Text className="text-red-500 text-sm mt-1">{passwordError}</Text> : null}

        {/* Forgot Password */}
        <Pressable
          className="self-start mt-2.5"
          onPress={() => navigation.navigate('ResetPassword')}
        >
          <Text className="text-sm text-black font-medium ml-2">Forgot Password?</Text>
        </Pressable>

        {/* Continue Button */}
        <Pressable
          onPress={handleLogin}
          disabled={isButtonDisabled}
          className={`w-full h-11 justify-center rounded-lg py-2.5 mt-5 ${
            isButtonDisabled ? 'bg-gray-300' : 'bg-green-500'
          }`}
        >
          <Text className="text-white text-base text-center font-semibold">
            Continue
          </Text>
        </Pressable>

        {/* Divider */}
        <View className="flex-row items-center mt-8">
          <View className="flex-1 h-0.5 bg-gray-200" />
          <Text className="text-sm text-gray-500 mx-4">or continue with</Text>
          <View className="flex-1 h-0.5 bg-gray-200" />
        </View>

        {/* Google Sign In */}
        <Pressable
          onPress={() => navigation.navigate('SignUpEmail')}
          className="w-full h-11 justify-center bg-gray-200 rounded-lg py-2.5 mt-8"
        >
          <View className="flex-row items-center justify-center space-x-2">
            <Image
              source={require('../../assets/png/googleIcon.png')}
              resizeMode="contain"
            />
            <Text className="inline text-base text-gray-500 font-semibold">Google</Text>
          </View>
        </Pressable>

        {/* Terms and Policy */}
        <Text className="text-sm text-gray-500 text-center leading-5 mt-10">
          By clicking continue, you agree to our{' '}
          <Text className="font-bold text-black">Terms of Service and Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUpEmail;
