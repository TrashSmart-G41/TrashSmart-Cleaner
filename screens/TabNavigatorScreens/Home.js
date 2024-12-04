import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import { BASE_URL } from '../../utils/config';
import { AuthContext } from '../../context/AuthContext';

const Home = ({ navigation }) => {
  const [name, onChangeName] = useState('');
  const [address, onChangeAddress] = useState('');
  const { decodedToken, userToken } = useContext(AuthContext);
  const userId = decodedToken.userId;

  const newItemsToDisplay = [
    { date: 'Wednesday, 4th December', location: 'Joseph Fraser Road', id: 'Bin 04' },
    { date: 'Wednesday, 4th December', location: 'Colombo 07', id: 'Bin 11' },
  ];

  const completedItemsToDisplay = [
    { date: 'Tuesday, 3rd December', location: 'Canteen, Fort Railway Station', id: 'Bin 08' },
    { date: 'Tuesday, 2nd December', location: 'Fort Railway Station', id: 'Bin 20' },
  ];

  const NewItem = ({ date, location, id }) => (
  <View className='flex-row flex-1 bg-white py-2 px-4 my-2 rounded-lg' >
    <Image className='h-7 w-7 mr-4 self-start mt-1.5'
        source={require('../../assets/png/bin_icon_1.png')}
        resizeMode="contain"
    />

    <View className='' >
      <Text className='text-gray-500 text-sm font-normal leading-none' >{date}</Text>
      <Text className='text-gray-500 text-base font-normal leading-none mt-[-3]' >{location}</Text>
      <Text className='text-black text-sm font-medium leading-none ' >{id}</Text>
    </View>

    <View className='flex-1 justify-center items-end' >
      <Entypo name="dot-single" size={44} color="#7ED957" />
    </View>

  </View>
  );

  const CompletedItem = ({ date, location, id }) => (
    <View className='flex-row flex-1 bg-white py-2 px-4 my-2 rounded-lg' >
      <View className='mr-4 self-start mt-1.5' >
        <Entypo name="check" size={24} color="#7ED957" />
      </View>
    
      <View className='' >
        <Text className='text-gray-500 text-sm font-normal leading-none' >{date}</Text>
        <Text className='text-gray-500 text-base font-normal leading-none mt-[-3]' >{location}</Text>
        <Text className='text-black text-sm font-medium leading-none ' >{id}</Text>
      </View>
    
    </View>
    );

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

      console.log(userData.communalBins)
      onChangeName(userData.firstName || 'N/A');
      onChangeAddress(userData.address || 'N/A');

    } catch (error) {
      console.error('Error fetching user data:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []); 

  const renderNewItem = ({ item }) => <NewItem date={item.date} location={item.location} id={item.id} />;
  const renderCompletedItem = ({ item }) => <CompletedItem date={item.date} location={item.location} id={item.id} />;

  return (
    <View className='flex-1 px-5 bg-white pt-2' >

      <View className='flex-row justify-between items-center px-1' >
        <Text className='text-2xl text-black font-bold' >
            Good Morning, {name}
        </Text>

        <View className='flex-row justify-between items-center space-x-2'>
          <Ionicons name="globe-outline" size={22} color="gray" />
          <Ionicons name="moon-outline" size={22} color="gray" />
        </View>
      </View> 

      <View className='flex-row items-end mt-2' >
        <Ionicons name="location-outline" size={32} color="#22C55E" />
        <Text className='text-lg text-gray-500 font-medium ml-1' >
            {address}
        </Text>
      </View>     


      <View className='bg-[#F3F2F2] px-5 py-3.5 mt-6 rounded-xl' >
        <Text className='text-gray-500 text-lg font-medium' >
          This week's insights
        </Text>

        <View className='flex-row items-center justify-between' >
            <View className='flex-row w-40 space-x-4 items-center bg-white px-4 py-4 rounded-xl mt-3' >
              <View className='bg-[#FFD800] h-12 w-12 items-center justify-center rounded-full'>
               <Ionicons name="star" size={20} color="black" />
              </View>
              <View className='space-y-[-5]' >
                <Text className='text-gray-500 text-lg font-medium' >3 days</Text>
                <Text className='text-gray-500 text-base font-normal' >streak</Text>
              </View>
            </View>
            
            <View className='flex-row w-40 space-x-4 items-center bg-white px-4 py-4 rounded-xl mt-3' >
              <View className='bg-[#7ED957] h-12 w-12 items-center justify-center rounded-full'>
                <Ionicons name="checkmark-sharp" size={26} color="black" />
              </View>
              <View className='space-y-[-5]' >
                <Text className='text-gray-500 text-lg font-medium' >40 trips</Text>
                <Text className='text-gray-500 text-base font-normal' >completed</Text>
              </View>
            </View>
        </View>
      </View>
    
      <View className='bg-[#F3F2F2] px-5 py-3.5 mt-5 rounded-xl' > 
          <Text className='text-gray-500 text-lg font-medium' >
              Collections
          </Text>

          <Text className='text-gray-500 text-base font-medium mt-3' >
              New(02)
          </Text>
        
          <FlatList
            className='h-44 mt-2'
            data={newItemsToDisplay}
            keyExtractor={(item) => item.id}
            renderItem={renderNewItem}
            />

          <Text className='text-gray-500 text-base font-medium mt-3' >
            Completed
          </Text>

          <FlatList
            className='h-20 mt-2 mb-1'
            data={completedItemsToDisplay}
            keyExtractor={(item) => item.id}
            renderItem={renderCompletedItem}
            />

      </View>

    </View>
  );
};

export default Home;
