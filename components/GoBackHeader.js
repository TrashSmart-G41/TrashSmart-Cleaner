import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const GoBackHeader = ( ) => {
  const navigation = useNavigation();

  return (
    <View className='flex-row py-2 bg-white px-3' >
      <TouchableOpacity className='flex-row items-center justify-start' onPress={() => navigation.goBack() }>
        <Ionicons name="chevron-back" size={28} color="#22C55E" />
        <Text className='text-base text-green-500 font-semibold'>Back</Text>
      </TouchableOpacity>

      <Image className='flex-1 h-20 w-48 justify-center ml-[-50]'
          source={require('../assets/png/logo.png')}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={'TrashSmart Logo'}
      />

    </View>
  )
}

export default GoBackHeader