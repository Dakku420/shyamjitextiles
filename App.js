import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './screens/Home';
import Product from './screens/Product';
import ProductCatalogue from './screens/ProductCatalogue';
import Cart from './screens/Cart';
import ContactUs from './screens/Contact'; // Ensure this file is correctly named


const Stack = createNativeStackNavigator();
const backgroundImage = require('./assets/background.jpg');

// Higher-order component to wrap screens with the header and footer
const withHeaderFooter = (Component) => (props) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F1E8' }}>
    <ImageBackground source={backgroundImage} style={styles.headerBackground} resizeMode="cover">
      <Header />
    </ImageBackground>

    <View style={{ flex: 1, overflow: 'hidden' }}>
      <Component {...props} />
    </View>

    <Footer />
  </SafeAreaView>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={withHeaderFooter(Home)} />
        <Stack.Screen name="Product" component={withHeaderFooter(Product)} />
        <Stack.Screen name="ProductCatalogue" component={withHeaderFooter(ProductCatalogue)} />
        <Stack.Screen name="Cart" component={withHeaderFooter(Cart)} />
        <Stack.Screen name="ContactUs" component={withHeaderFooter(ContactUs)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    width: '100%',
    paddingTop: 30,
    paddingBottom: 10,
  },
}); 