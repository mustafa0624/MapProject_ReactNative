// In App.js in a new project

import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import MapView from 'react-native-maps';
import { SearchBar, RestaurantDetail, City } from './components';









let originalList = []

const App = () => {
  const [cities, setCities] = useState("")

  const fetchData = async () => {
    const { data } = await Axios.get("http://opentable.herokuapp.com/api/cities",
    );
    setCities(data.cities)
    originalList = [...data.cities]
    // console.log(data.cities)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onCitySearch =(value)=>{
    // console.log(value)
    const filteredCity= originalList.filter(city=>{
      const selectedInput = value.toUpperCase();
      const selectedCity = city.toUpperCase();
      return selectedCity.indexOf(selectedInput) > -1;
    })
    setCities(filteredCity)
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={{ position: "absolute" }}>


          <SearchBar onSearch={onCitySearch} />
          <FlatList
            
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(_, index) => index.toString()}
            data={cities}
            renderItem={({ item }) => <City value={item} />}
          />
        </View>
      </View>

    </SafeAreaView>
  );
}

export default App;