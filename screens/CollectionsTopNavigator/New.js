import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const completedItemsToDisplay = [
    { date: 'Wednesday, 4th December', location: 'Joseph Fraser Road', id: 'Bin 04' },
    { date: 'Wednesday, 4th December', location: 'Colombo 07', id: 'Bin 11' },
  ];

const CompletedItem = ({ date, location, id }) => (
    <View className='bg-[#F3F3F3] my-2 rounded-xl'>
        <View className='flex-row py-2.5 px-5' >

            <View className='' >
                <Text className='text-gray-500 text-lg font-medium leading-none ' >{id}</Text>
                <Text className='text-gray-500 text-base font-normal leading-none mt-[-3]' >{location}</Text>
            </View>

            <View className='flex-1 items-end justify-center' >
                <Text className='text-black text-sm font-medium ' >{date}</Text>
            </View>
        </View>

        <View className='flex-row items-center bg-[#46AA62] rounded-b-xl px-5 py-1' >
            <Ionicons name="checkmark-circle" size={21.5} color="white" />
            <Text className='text-white text-sm font-medium ml-2' >
                Mark as completed
            </Text>
            <TouchableOpacity className='flex-1 items-end' >
                <Text className='text-white text-sm font-medium' >
                    View on map
                </Text>
            </TouchableOpacity>
        </View>
    </View>
);

const New = () => {
    const renderCompletedItem = ({ item }) => <CompletedItem date={item.date} location={item.location} id={item.id} />;

    return (
      <View className='flex-1 bg-white' >
        <FlatList
              className='flex-1 mt-2.5'
              data={completedItemsToDisplay}
              keyExtractor={(item) => item.id}
              renderItem={renderCompletedItem}
          />
      </View>
    )
}

export default New