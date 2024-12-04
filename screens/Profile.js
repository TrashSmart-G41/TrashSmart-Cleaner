import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import GoBackHeader from '../components/GoBackHeader'
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import axios from 'axios';


const Profile = ({ navigation }) => {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [phone, onChangePhone] = useState('');
  const [address, onChangeAddress] = useState('');

  const { decodedToken, userToken } = useContext(AuthContext);
  const  userId = decodedToken.userId

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/cleaner/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
  
      const userData = response.data;
  
      // Update state with the fetched data
      onChangeName(userData.firstName + " " + userData.lastName || 'N/A');
      onChangeEmail(userData.email || 'N/A');
      onChangePhone(userData.contactNo || 'N/A');
      onChangeAddress(userData.address || 'N/A');
  
      console.log("User Data:", response.data);
    } catch (error) {
      console.error("Error fetching user data:", error.response?.data || error.message);
      throw error;
    }
  };
  
  

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View className='flex-1 bg-white'>
      <GoBackHeader />

      <View className='inline-flex items-center relative mt-6' >
        <Image 
          source={require('../assets/png/profile_image.png')}
          resizeMode='contain'
          className='h-36 w-36 rounded-full'
          />
          <View className='absolute bottom-3 right-36'>
            <Ionicons name="camera" size={28} color={'#22c55e'} />
          </View>
      </View>

      <View className='flex-1 items-start justify-start px-8 mt-7'>
        <View className=''>
          <Text className='text-lg text-gray-400/90 font-medium' >
            Name
          </Text>
          <TextInput
              className='text-lg text-gray-500 font-normal px-6 mt-2.5'
              value={name}
              onChangeText={onChangeName}
              placeholder='Enter Name'
              keyboardType='default'
          />
        </View>

        <View className='mt-6'>
          <Text className='text-lg text-gray-400/90 font-medium' >
            Email
          </Text>
          <TextInput
              className='text-lg text-gray-500 font-normal px-6 mt-2.5'
              value={email}
              onChangeText={onChangeEmail}
              placeholder='Enter Email'
              keyboardType='default'
          />
        </View>

        <View className='mt-6'>
          <Text className='text-lg text-gray-400/90 font-medium' >
            Phone
          </Text>
          <TextInput
              className='text-lg text-gray-500 font-normal px-6 mt-2.5'
              value={phone}
              onChangeText={onChangePhone}
              placeholder='Enter Phone Number'
              keyboardType='default'
          />
        </View>

        <View className='mt-6'>
          <Text className='text-lg text-gray-400/90 font-medium' >
            Address
          </Text>
          <TextInput
              className='text-lg text-gray-500 font-normal px-6 mt-2.5'
              value={address}
              onChangeText={onChangeAddress}
              placeholder='Enter Address'
              keyboardType='default'
          />
        </View>

        <View className='flex-1 w-full justify-end mb-10'>
          <TouchableOpacity className='items-center bg-green-500 rounded-xl py-2' onPress={() => {} } >
            <Text className='text-lg text-white font-medium' >
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Profile