import { View, Text, FlatList } from 'react-native'
import React from 'react'

const completedItemsToDisplay = [
    { date: 'Sat, 20th July', location: 'Canteen, Fort Railway Station', id: 'Bin 20' },
    { date: 'Fri, 22nd March', location: 'Fort Railway Station', id: 'Bin 11' },
    { date: 'Falafel', location: '$7.50', id: '3C' },
    { date: 'Marinated Olives', location: '$5.00', id: '4D' }
  ];

const CompletedItem = ({ date, location, id }) => (
<View className='flex-row bg-[#F3F2F2] py-2.5 px-5 my-2 rounded-lg' >

    <View className='' >
        <Text className='text-gray-500 text-lg font-medium leading-none ' >{id}</Text>
        <Text className='text-gray-500 text-base font-normal leading-none mt-[-3]' >{location}</Text>
    </View>

    <View className='flex-1 items-end justify-center' >
        <Text className='text-black text-sm font-medium ' >{date}</Text>
    </View>
</View>
);

const Completed = () => {
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



export default Completed