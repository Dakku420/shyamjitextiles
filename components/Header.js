import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const [menuVisible, setMenuVisible] = useState(false);

  const navItems = [
    { label: 'Home', screen: 'Home' },
    { label: 'Products', screen: 'Product' },
    { label: 'Wishlist', screen: 'Cart' },
    { label: 'Contact', screen: 'ContactUs' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.logoSection}>
          <Image 
            source={require('../assets/logo/logo.png')} 
            style={styles.logo} 
          />
          <View style={styles.titleSection}>
            <Text style={styles.companyName}>Shyam Ji</Text>
            <Text style={styles.companySubtitle}>TEXTILES</Text>
          </View>
        </View>

        <View style={styles.navigationSection}>
          {screenWidth > 600 && (
            <View style={styles.navBarDesktop}>
              {navItems.map((item) => (
                <TouchableOpacity 
                  key={item.screen}
                  onPress={() => navigation.navigate(item.screen)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.navLink}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <TouchableOpacity 
            style={styles.cartButton}
            onPress={() => navigation.navigate('Cart')}
          >
            <Icon name="heart" size={20} color="#1FBFA0" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>0</Text>
            </View>
          </TouchableOpacity>

          {screenWidth <= 600 && (
            <TouchableOpacity 
              style={styles.menuToggle}
              onPress={() => setMenuVisible(!menuVisible)}
            >
              <Icon name="bars" size={22} color="#333" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {screenWidth <= 600 && menuVisible && (
        <View style={styles.mobileNav}>
          {navItems.map((item, index) => (
            <TouchableOpacity
              key={item.screen}
              style={[
                styles.mobileNavItem,
                index !== navItems.length - 1 && styles.borderBottom
              ]}
              onPress={() => {
                navigation.navigate(item.screen);
                setMenuVisible(false);
              }}
              activeOpacity={0.6}
            >
              <Text style={styles.mobileNavText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#F5F1E8',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F5F1E8',
    borderBottomWidth: 1,
    borderBottomColor: '#E8DCC8',
  },
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginRight: 10,
  },
  titleSection: {
    justifyContent: 'center',
  },
  companyName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1FBFA0',
    letterSpacing: 0.5,
  },
  companySubtitle: {
    fontSize: 10,
    fontWeight: '600',
    color: '#999',
    letterSpacing: 1,
    marginTop: 2,
  },
  navigationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  navBarDesktop: {
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
    marginRight: 8,
  },
  navLink: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1FBFA0',
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  cartButton: {
    position: 'relative',
    padding: 8,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#FF6B6B',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  menuToggle: {
    padding: 8,
  },
  mobileNav: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E8DCC8',
  },
  mobileNavItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8DCC8',
  },
  mobileNavText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1FBFA0',
  },
});

export default Header;
