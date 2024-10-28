import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { categoryData, productData } from './categories'



const App = () => {
  return (
    <View style={styles.page_container}>
      {/* Status bar */}
      <View style={{ paddingBottom: 25, backgroundColor: '#383434' }} />

      {/* App header */}
      <View style={styles.header_container}>
        <View style={styles.input_header_container}>
          <Image source={require('../assets/icons/search-icon.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
          <TextInput placeholder='Search on Jumia' style={{ fontSize: 18, flex: 1, marginLeft: 12 }} />
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <Image source={require('../assets/icons/cart-icon.png')} style={{ width: 25, height: 25, marginLeft: 20 }} />
        </TouchableOpacity>
      </View>

      {/* Main Content Container */}
      <View style={{ flexDirection: 'row', flex: 1 }}>
        {/* Categories section */}
        <View style={{ width: 100 }}>
          <FlatList
            data={categoryData}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={0.1} style={styles.category_button_container}>
                <Text style={{ paddingHorizontal: 10 }}>{item.category}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Products sections container */}
        <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 15 }}>
          {/* All Products button */}
          <TouchableOpacity activeOpacity={0.7} style={styles.all_products_button}>
            <Text style={{ flex: 1, fontWeight: '400' }}>ALL PRODUCTS</Text>
            <Image source={require('../assets/icons/right-icon.png')} style={{ width: 15, height: 15 }} />
          </TouchableOpacity>
          {/* Appliances section */}
          <View style={{ marginTop: 10, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>APPLIANCES</Text>
            <FlatList
              data={productData.filter(item => item.category === 'Appliances')}
              numColumns={3}
              renderItem={({ item }) => (
                <View key={item.name} style={{ flexDirection: 'column', marginHorizontal: 10 }}>
                  <View style={{ backgroundColor: '#f4f4f4', alignItems: 'center' }}>
                    <Image source={item.image} style={{ width: 50, height: 50 }} />
                  </View>
                  <Text style={{ fontSize: 11 }}>{item.name}</Text>
                </View>
              )}
            />
          </View>
          {/* Kitchen section */}
          <View style={{ marginTop: 10, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>HOME & KITCHEN</Text>
            <FlatList
              data={productData.filter(item => item.category === 'Kitchen')}
              numColumns={3}
              renderItem={({ item }) => (
                <View key={item.name} style={{ flexDirection: 'column', marginHorizontal: 10, marginBottom: 20 }}>
                  <View style={{ backgroundColor: '#f4f4f4', alignItems: 'center' }}>
                    <Image source={item.image} style={{ width: 55, height: 50 }} />
                  </View>
                  <Text style={{ fontSize: 11 }}>{item.name}</Text>
                </View>
              )}
            />
          </View>
          {/* Home section */}
          <View style={{ marginTop: 10, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>HOME</Text>
            <FlatList
              data={productData.filter(item => item.category === 'Home')}
              numColumns={3}
              renderItem={({ item }) => (
                <View key={item.name} style={{ flexDirection: 'column', marginHorizontal: 10, marginBottom: 20 }}>
                  <View style={{ backgroundColor: '#f4f4f4', alignItems: 'center' }}>
                    <Image source={item.image} style={{ width: 55, height: 50 }} />
                  </View>
                  <Text style={{ fontSize: 11 }}>{item.name}</Text>
                </View>
              )}
            />
          </View>
          {/* Office section */}
          <View style={{ marginTop: 10, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>OFFICE EQUIPMENTS</Text>
            <FlatList
              data={productData.filter(item => item.category === 'Office')}
              numColumns={3}
              renderItem={({ item }) => (
                <View key={item.name} style={{ flexDirection: 'column', marginHorizontal: 10, marginBottom: 20 }}>
                  <View style={{ backgroundColor: '#f4f4f4', alignItems: 'center' }}>
                    <Image source={item.image} style={{ width: 55, height: 50 }} />
                  </View>
                  <Text style={{ fontSize: 11 }}>{item.name}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page_container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },

  header_container: {
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },

  input_header_container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 5,
    flex: 1
  },

  category_button_container: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },

  all_products_button: {
    backgroundColor: '#e5e5e5',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 2,
  },
})