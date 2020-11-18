// In App.js in a new project

import Axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SearchBar, RestaurantDetail, City } from './components';









let originalList = []

const App = () => {
  const [cities, setCities] = useState("")
  const [restaurantsData, setRestaurantsData] = useState([])
  const mapRef = useRef(null)

  const fetchData = async () => {
    const { data } = await Axios.get("http://opentable.herokuapp.com/api/cities",
    );
    setCities(data.cities)
    originalList = [...data.cities]

  }

  useEffect(() => {
    fetchData()
  }, [])

  const onCitySearch = (value) => {
    // console.log(value)
    const filteredCity = originalList.filter(city => {
      const selectedInput = value.toUpperCase();
      const selectedCity = city.toUpperCase();
      return selectedCity.indexOf(selectedInput) > -1;
    })
    setCities(filteredCity)
  }

  const onCitySelect = async (city) => {
    const { data } = await Axios.get("http://opentable.herokuapp.com/api/restaurants?city=" + city)
    setRestaurantsData(data.restaurants)

    const restaurantsCoordinates = restaurantsData.map(res => {
      console.log(res)
      return (
        {
          latitude: res.lat,
          longitude: res.lng
        }
        // lat: 32.397913
        // lng: -99.716776

      )
    })
    mapRef.current.fitToCoordinates(restaurantsCoordinates,{
      edgePadding:{
        top:50,
        right:25,
        bottom:25,
        left:25
      }
    })


  }
  const renderFunction = ({ item }) => {
    return (

      <City value={item} onSelect={() => onCitySelect(item)} />
    )
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MapView
          ref={mapRef}
          style={{ flex: 1 }}
          initialRegion={{

            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,

          }}

        >
          {restaurantsData.map((r, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: r.lat,
                longitude: r.lng,
              }}

            />
          ))}
        </MapView >
        <View style={{ position: "absolute" }}>


          <SearchBar onSearch={onCitySearch} />
          <FlatList

            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(_, index) => index.toString()}
            data={cities}
            renderItem={renderFunction}
          />
        </View>
      </View>

    </SafeAreaView>
  );
}

export default App;