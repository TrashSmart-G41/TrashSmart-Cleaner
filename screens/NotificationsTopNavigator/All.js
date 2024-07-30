import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Iconify } from 'react-native-iconify';

const AssignedTasks = [
  { message: 'New assign at Fort Railway Station', time: '3m ago', id: 'Bin 04' },
  { message: 'New assign at Kotuwe Kade Park', time: '30m ago', id: 'Bin 20' },
  { message: 'Canteen, Fort Railway Station', time: '45m ago', id: 'Bin 16' },
];

const AssignedItem = ({ message , time }) => (
  <View className='flex-row items-center bg-[#F3F3F3] my-2 py-2.5 px-4 rounded-xl' >
      
      <View className='bg-[#7ED957]/20 p-1.5 rounded-lg' >
        <Iconify icon="material-symbols:cleaning-bucket-outline" size={28} color="#46AA62" />
      </View>

      <Text className='flex-1 text-gray-500 text-base font-normal leading-5 ml-4 mr-2' numberOfLines={2} >
          {message}
      </Text>

      <View className='flex items-end justify-center' >
          <Text className='text-black text-sm font-normal ' >{time}</Text>
      </View>
  </View>
);

const All = () => {
  const renderAssignedItem = ({ item }) => <AssignedItem message={item.message} time={item.time} id={item.id} />;

  return (
    <View className='flex-1 bg-white' >
      <FlatList
          className='flex-1 mt-2.5'
          data={AssignedTasks}
          keyExtractor={(item) => item.id}
          renderItem={renderAssignedItem}
        />
    </View>
  )
}

export default All