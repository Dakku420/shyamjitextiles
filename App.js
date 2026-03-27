import React, { useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, ImageBackground, SafeAreaView, Animated, PanResponder, Dimensions, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './screens/Home';
import Product from './screens/Product';
import ProductCatalogue from './screens/ProductCatalogue';
import Cart from './screens/Cart';
import Wishlist from './screens/Wishlist';
import ContactUs from './screens/Contact'; // Ensure this file is correctly named


const Stack = createNativeStackNavigator();
const backgroundImage = require('./assets/background.jpg');

// Higher-order component to wrap screens with the header and footer
const withHeaderFooter = (Component) => (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F1E8' }}>
      <ImageBackground source={backgroundImage} style={styles.headerBackground} resizeMode="cover">
        <Header />
      </ImageBackground>

      <View style={{ flex: 1 }}>
        <Component {...props} />
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <WishlistProvider>
        <CartProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={withHeaderFooter(Home)} />
              <Stack.Screen name="Product" component={withHeaderFooter(Product)} />
              <Stack.Screen name="ProductCatalogue" component={withHeaderFooter(ProductCatalogue)} />
              <Stack.Screen name="Cart" component={withHeaderFooter(Cart)} />
              <Stack.Screen name="Wishlist" component={withHeaderFooter(Wishlist)} />
              <Stack.Screen name="ContactUs" component={withHeaderFooter(ContactUs)} />
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
      </WishlistProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    width: '100%',
    paddingTop: 30,
    paddingBottom: 10,
  },
  pullArea: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
  },
  pullIndicator: {
    width: 60,
    height: 6,
    backgroundColor: '#1FBFA0',
    borderRadius: 3,
    opacity: 0.6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  pullHint: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F5F1E8',
  },
}); 