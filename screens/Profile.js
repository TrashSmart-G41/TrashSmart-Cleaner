import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import GoBackHeader from '../components/GoBackHeader'

import { Ionicons } from '@expo/vector-icons';


const Profile = ({ navigation }) => {
  const [name, onChangeName] = useState('Siri Perera');
  const [email, onChangeEmail] = useState('siriperera@gmail.com');
  const [phone, onChangePhone] = useState('077-4936420');
  const [dob, onChangeDOB] = useState('17 March 1975');

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
            Date of Birth
          </Text>
          <TextInput
              className='text-lg text-gray-500 font-normal px-6 mt-2.5'
              value={dob}
              onChangeText={onChangeDOB}
              placeholder='Enter Date of Birth'
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