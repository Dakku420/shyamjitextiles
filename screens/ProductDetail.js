import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductDetail = ({ route }) => {
  const { productName, images } = route.params;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const handleNextImage = () => {
    if (selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{productName.replace(/-/g, ' ').toUpperCase()}</Text>
      
      {/* Main Image Display */}
      <View style={styles.mainImageContainer}>
        <Image 
          source={images[selectedImageIndex]} 
          style={[styles.mainImage, { width: screenWidth * 0.9 }]} 
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <TouchableOpacity 
              style={[styles.navButton, styles.prevButton]}
              onPress={handlePrevImage}
              disabled={selectedImageIndex === 0}
            >
              <Icon name="chevron-left" size={24} color="#fff" />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.navButton, styles.nextButton]}
              onPress={handleNextImage}
              disabled={selectedImageIndex === images.length - 1}
            >
              <Icon name="chevron-right" size={24} color="#fff" />
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Image Counter */}
      <Text style={styles.imageCounter}>
        {selectedImageIndex + 1} / {images.length}
      </Text>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <View style={styles.thumbnailContainer}>
          <FlatList
            data={images}
            keyExtractor={(item, index) => `${productName}-${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={[
                  styles.thumbnail,
                  selectedImageIndex === index && styles.selectedThumbnail,
                ]}
                onPress={() => setSelectedImageIndex(index)}
              >
                <Image source={item} style={styles.thumbnailImage} />
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {/* Product Info Section */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>About this Product</Text>
        <Text style={styles.infoText}>
          This is a premium quality product from Shyamji Textiles. We ensure the highest standards of craftsmanship and material excellence in all our products.
        </Text>
        <Text style={styles.infoSubtitle}>Features:</Text>
        <Text style={styles.infoText}>• High-quality fabric</Text>
        <Text style={styles.infoText}>• Durable and long-lasting</Text>
        <Text style={styles.infoText}>• Available in multiple colors</Text>
        <Text style={styles.infoText}>• Perfect for home and wardrobes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  mainImageContainer: {
    position: 'relative',
    height: 380,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginBottom: 15,
  },
  mainImage: {
    height: 360,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  navButton: {
    position: 'absolute',
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: 'rgba(31, 191, 160, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  prevButton: {
    left: 10,
  },
  nextButton: {
    right: 10,
  },
  imageCounter: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    marginBottom: 12,
  },
  thumbnailContainer: {
    height: 90,
    marginBottom: 20,
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  selectedThumbnail: {
    borderColor: '#1FBFA0',
    borderWidth: 3,
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoSection: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    flex: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1FBFA0',
    marginBottom: 10,
  },
  infoSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1FBFA0',
    marginTop: 10,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 6,
  },
});

export default ProductDetail;
