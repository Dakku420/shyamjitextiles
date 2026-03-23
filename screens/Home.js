import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, FlatList, Image, Dimensions, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const [email, setEmail] = useState('');
  
  const categories = [
    { name: 'Bedsheets', id: 'bedsheet-with-quilted-pillow-cover', icon: 'bed' },
    { name: 'Baby Quilts', id: 'baby-quilt', icon: 'child' },
    { name: 'Kids Dohar', id: 'kids-dohar', icon: 'heart' },
    { name: 'Sofa Throws', id: 'TNT-sofa-throw', icon: 'home' },
    { name: 'Towels', id: 'Towel', icon: 'shower' },
    { name: 'Table Runners', id: 'Table-Runner', icon: 'th-list' },
    { name: 'Bags', id: 'bags', icon: 'shopping-bag' },
  ];

  const featuredProducts = [
    { id: 1, name: 'Premium Bed Sheet Set', category: 'bedsheet-with-quilted-pillow-cover', price: '₹2,499', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-1.jpg') },
    { id: 2, name: 'Luxury Baby Quilt', category: 'baby-quilt', price: '₹1,799', image: require('../assets/products/baby-quilt-1.jpg') },
    { id: 3, name: 'Soft Kids Dohar', category: 'kids-dohar', price: '₹1,299', image: require('../assets/products/kids-dohar-1.jpg') },
    { id: 4, name: 'Premium Towel Collection', category: 'Towel', price: '₹899', image: require('../assets/products/towel-3.jpg') },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section with Image Overlay */}
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.heroSection}
        resizeMode="cover"
      >
        <View style={styles.heroOverlay} />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Crafted with Care,{'\n'}Made for Comfort</Text>
          <Text style={styles.heroSubtitle}>Premium textiles for your family, since generations</Text>
          <TouchableOpacity 
            style={styles.contactButton}
            onPress={() => navigation.navigate('ContactUs')}
          >
            <Text style={styles.contactButtonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Featured Products Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Collections</Text>
        <FlatList
          data={featuredProducts}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.productCardHorizontal}
              onPress={() => navigation.navigate('ProductCatalogue', { product: item.category })}
              activeOpacity={0.7}
            >
              <Image source={item.image} style={styles.productImageHorizontal} />
              <View style={styles.productCardOverlay}>
                <Text style={styles.productNameHorizontal}>{item.name}</Text>
                <Text style={styles.priceHorizontal}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Categories Grid */}
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Browse By Category</Text>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          numColumns={3}
          scrollEnabled={false}
          columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => navigation.navigate('ProductCatalogue', { product: item.id })}
              activeOpacity={0.7}
            >
              <View style={styles.categoryIconContainer}>
                <Icon name={item.icon} size={32} color="#1FBFA0" />
              </View>
              <Text style={styles.categoryLabel}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About Shyam Ji Textiles</Text>
        <Text style={styles.aboutText}>
          We are a trusted textile manufacturer dedicated to providing premium quality products for your home and family. With decades of experience and a commitment to excellence, we deliver comfort, durability, and style in every product.
        </Text>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>20+</Text>
            <Text style={styles.statLabel}>Years</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>50K+</Text>
            <Text style={styles.statLabel}>Happy Customers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>100%</Text>
            <Text style={styles.statLabel}>Quality Assured</Text>
          </View>
        </View>
      </View>

      {/* Call to Action */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to Experience Premium Comfort?</Text>
        <TouchableOpacity 
          style={styles.ctaPrimaryButton}
          onPress={() => navigation.navigate('Product')}
        >
          <Text style={styles.ctaPrimaryButtonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1E8',
  },
  heroSection: {
    height: 420,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
  },
  heroContent: {
    alignItems: 'center',
    zIndex: 1,
    paddingHorizontal: 20,
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 52,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.95)',
    textAlign: 'center',
    marginBottom: 28,
    fontWeight: '300',
  },
  contactButton: {
    backgroundColor: '#1FBFA0',
    paddingVertical: 13,
    paddingHorizontal: 40,
    borderRadius: 4,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  section: {
    paddingHorizontal: 15,
    paddingVertical: 28,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    letterSpacing: 0.3,
  },
  productCardHorizontal: {
    width: 200,
    height: 240,
    marginRight: 14,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#f8f8f8',
  },
  productImageHorizontal: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productCardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  productNameHorizontal: {
    fontSize: 13,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  priceHorizontal: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1FBFA0',
  },
  categoriesSection: {
    paddingHorizontal: 15,
    paddingVertical: 28,
    backgroundColor: '#F5F1E8',
  },
  categoryCard: {
    width: '31%',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E8DCC8',
  },
  categoryIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F0F8F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    lineHeight: 16,
  },
  aboutSection: {
    paddingHorizontal: 15,
    paddingVertical: 32,
    backgroundColor: '#fff',
  },
  aboutText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 24,
    fontWeight: '400',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    marginHorizontal: 6,
    backgroundColor: '#F5F1E8',
    borderRadius: 4,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1FBFA0',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
  },
  ctaSection: {
    paddingHorizontal: 15,
    paddingVertical: 32,
    backgroundColor: '#F5F1E8',
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaPrimaryButton: {
    backgroundColor: '#1FBFA0',
    paddingVertical: 13,
    paddingHorizontal: 44,
    borderRadius: 4,
  },
  ctaPrimaryButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default Home;