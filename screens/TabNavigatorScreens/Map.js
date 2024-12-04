import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { View , Text , Pressable , FlatList, TouchableOpacity, Image } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { useState } from 'react';
import { GOOGLE_MAPS_API_KEY } from '../../utils/config';

const Map = () => {

const [origin, setOrigin] = useState({ latitude: 6.899926156268275, longitude: 79.86506892048527 });
const [destination, setDestination] = useState();
const [clickedMarker, setClickedMarker] = useState();

const assignedTasks = [
  { id: 'Bin 04', latitude : 6.90542838836369 , longitude : 79.86245404660261 },
  { id: 'Bin 11', latitude : 6.897482870889975, longitude : 79.85981898480834  },
  // { id: 'Bin 22' },
  // { id: 'Bin 01' }
];

const AssignedItem = ({ id }) => (
  <TouchableOpacity className='flex-row w-40 items-center justify-center space-x-3 bg-[#7ED957]/20 py-3 mx-3.5 rounded-xl' >
    
    <View className='bg-[#46AA62] p-1.5 rounded-full' >
      <Iconify icon="gravity-ui:trash-bin" size={22} color="white" />
    </View>

    <Text className='text-[#46AA62] text-lg font-semibold' >{id}</Text>

  </TouchableOpacity>
  );

  const renderAssignedItem = ({ item }) => <AssignedItem id={item.id} />;

  return (
    <View className='flex-1 bg-white' >
      <MapView
        className="basis-3/4"
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 6.902120284441931,
          longitude: 79.86115289536023,
          latitudeDelta: 0.016,
          longitudeDelta: 0.009,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        showsCompass={true}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
      >
        
        <Marker
          key="Current Location"
          coordinate={{ latitude: origin.latitude, longitude: origin.longitude }}
          title="Current Location"
          pinColor="blue"
          onPress={() => console.log('Current Location pressed!')}
        />

        {/* Bin Markers */}
        {assignedTasks.map(marker => {
          return(
            <Marker
              key={marker.id}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              title={`Bin ID: ${marker.id}`}
              //description={ `Fill Level: ${marker.fillLevel}` }
              onPress={() => {
                setDestination({ latitude: marker.latitude, longitude: marker.longitude });
                setClickedMarker({ 
                  id: marker.id, 
                  fillLevel: marker.fillLevel
                });
              }}
            >
              <Image
                source={require('../../assets/icons/trash_bin.png')}
                className="h-6 w-6"
              />

            </Marker>)
        })}

          {origin != undefined && destination != undefined ? 
          <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_MAPS_API_KEY}
              strokeWidth={3}
              strokeColor="#00FF00"
              onReady={result => {
                console.log(`Distance: ${result.distance} km`);
                console.log(`Duration: ${result.duration} min.`);       
              }}
          /> : null}

      </MapView>

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