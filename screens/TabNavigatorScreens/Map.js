import MapView from 'react-native-maps';
import { View , Text , Pressable , FlatList, TouchableOpacity } from 'react-native';
import { Iconify } from 'react-native-iconify';

const assignedTasks = [
  { id: 'Bin 04' },
  { id: 'Bin 11' },
  { id: 'Bin 22' },
  { id: 'Bin 01' }
];

const AssignedItem = ({ id }) => (
  <TouchableOpacity className='flex-row w-40 items-center justify-center space-x-3 bg-[#7ED957]/20 py-3 mx-3.5 rounded-xl' >
    
    <View className='bg-[#46AA62] p-1.5 rounded-full' >
      <Iconify icon="gravity-ui:trash-bin" size={22} color="white" />
    </View>

    <Text className='text-[#46AA62] text-lg font-semibold' >{id}</Text>

  </TouchableOpacity>
  );


const Map = () => {
  const renderAssignedItem = ({ item }) => <AssignedItem id={item.id} />;

  return (
    <View className='flex-1 bg-white' >
      <MapView
        className='basis-3/4'
        provider={MapView.PROVIDER_DEFAULT} // Use default provider
        initialRegion={{
          latitude: 6.902120284441931,
          longitude: 79.86115289536023,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <View className='flex-1 items-center bg-white rounded-t-2xl mt-[-14]'>
          <View className='mt-7'>
            <Text className='text-black text-lg font-semibold' >
              02 New Assigns
            </Text>
            <Text className='text-[#808080] text-sm font-normal' >
              0 out of 2 completed
            </Text>
          </View>

          <FlatList
            className='flex-wrap pl-4 pr-10 mt-6'
            data={assignedTasks}
            keyExtractor={(item) => item.id}
            renderItem={renderAssignedItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />

      </View>

    </View>
  )
}

export default Map