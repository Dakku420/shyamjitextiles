import React, { useState } from 'react';

import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Modal, ScrollView, ImageBackground } from 'react-native';

const productList = [
  { name: 'bags', images: [require('../assets/products/bags-1.jpg'), require('../assets/products/bags-2.jpg'), require('../assets/products/bags-3.jpg'), require('../assets/products/bags-4.jpg'), require('../assets/products/bags-5.jpg'), require('../assets/products/bags-6.jpg'), require('../assets/products/bags-7.jpg'), require('../assets/products/bags-8.jpg')] },
  { name: 'bedsheet-with-quilted-pillow-cover', images: [require('../assets/products/bedsheet-with-quilted-pillow-cover-1.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-2.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-3.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-4.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-5.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-6.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-7.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-8.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-9.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-10.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-11.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-12.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-13.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-14.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-15.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-16.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-17.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-18.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-19.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-20.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-21.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-22.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-23.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-24.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-25.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-26.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-27.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-28.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-29.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-30.jpg')] },
  { name: 'kids-dohar', images: [require('../assets/products/kids-dohar-1.jpg'), require('../assets/products/kids-dohar-2.jpg'), require('../assets/products/kids-dohar-3.jpg'), require('../assets/products/kids-dohar-4.jpg'), require('../assets/products/kids-dohar-5.jpg'), require('../assets/products/kids-dohar-6.jpg'), require('../assets/products/kids-dohar-7.jpg'), require('../assets/products/kids-dohar-8.jpg'), require('../assets/products/kids-dohar-9.jpg'), require('../assets/products/kids-dohar-10.jpg'), require('../assets/products/kids-dohar-11.jpg'), require('../assets/products/kids-dohar-12.jpg'), require('../assets/products/kids-dohar-13.jpg'), require('../assets/products/kids-dohar-14.jpg'), require('../assets/products/kids-dohar-15.jpg'), require('../assets/products/kids-dohar-16.jpg'), require('../assets/products/kids-dohar-17.jpg'), require('../assets/products/kids-dohar-18.jpg'), require('../assets/products/kids-dohar-19.jpg'), require('../assets/products/kids-dohar-20.jpg')] },
  { name: 'baby-quilt', images: [require('../assets/products/baby-quilt-1.jpg'), require('../assets/products/baby-quilt-2.jpg'),require('../assets/products/baby-quilt-3.jpg'),require('../assets/products/baby-quilt-4.jpg'),require('../assets/products/baby-quilt-5.jpg'),require('../assets/products/baby-quilt-6.jpg'),require('../assets/products/baby-quilt-7.jpg'),require('../assets/products/baby-quilt-8.jpg'),require('../assets/products/baby-quilt-9.jpg'),require('../assets/products/baby-quilt-10.jpg'),require('../assets/products/baby-quilt-11.jpg'),require('../assets/products/baby-quilt-12.jpg'),require('../assets/products/baby-quilt-13.jpg'),require('../assets/products/baby-quilt-14.jpg'),require('../assets/products/baby-quilt-15.jpg'),require('../assets/products/baby-quilt-16.jpg'),require('../assets/products/baby-quilt-17.jpg'),require('../assets/products/baby-quilt-18.jpg'),require('../assets/products/baby-quilt-19.jpg'),require('../assets/products/baby-quilt-20.jpg'),require('../assets/products/baby-quilt-21.jpg'),require('../assets/products/baby-quilt-22.jpg'),require('../assets/products/baby-quilt-23.jpg'),require('../assets/products/baby-quilt-24.jpg'),require('../assets/products/baby-quilt-24.jpg'),require('../assets/products/baby-quilt-25.jpg'),require('../assets/products/baby-quilt-26.jpg'),require('../assets/products/baby-quilt-27.jpg'),require('../assets/products/baby-quilt-28.jpg'),require('../assets/products/baby-quilt-29.jpg'),require('../assets/products/baby-quilt-30.jpg'),require('../assets/products/baby-quilt-31.jpg'),require('../assets/products/baby-quilt-32.jpg') ] },
  { name: 'TNT-sofa-throw', images: [require('../assets/products/TNT-sofa-throw-1.jpg'), require('../assets/products/TNT-sofa-throw-2.jpg'), require('../assets/products/TNT-sofa-throw-3.jpg'), require('../assets/products/TNT-sofa-throw-4.jpg'), require('../assets/products/TNT-sofa-throw-5.jpg'), require('../assets/products/TNT-sofa-throw-6.jpg'), require('../assets/products/TNT-sofa-throw-7.jpg'), require('../assets/products/TNT-sofa-throw-8.jpg'), require('../assets/products/TNT-sofa-throw-9.jpg'), require('../assets/products/TNT-sofa-throw-10.jpg'), require('../assets/products/TNT-sofa-throw-11.jpg'), require('../assets/products/TNT-sofa-throw-12.jpg'), require('../assets/products/TNT-sofa-throw-13.jpg'), require('../assets/products/TNT-sofa-throw-14.jpg'), require('../assets/products/TNT-sofa-throw-15.jpg'), require('../assets/products/TNT-sofa-throw-16.jpg'), require('../assets/products/TNT-sofa-throw-17.jpg'), require('../assets/products/TNT-sofa-throw-18.jpg'), require('../assets/products/TNT-sofa-throw-19.jpg'), require('../assets/products/TNT-sofa-throw-20.jpg')] },
  { name: 'Towel', images: [ require('../assets/products/towel-3.jpg'), require('../assets/products/towel-4.jpg'), require('../assets/products/towel-5.jpg'), require('../assets/products/towel-6.jpg'), require('../assets/products/towel-7.jpg'), require('../assets/products/towel-8.jpg'), require('../assets/products/towel-9.jpg'), require('../assets/products/towel-10.jpg')] },
  { name: 'Table-Runner', images: [require('../assets/products/table-placement-and-napkins-and-runner-set-blue.jpg'),require('../assets/products/table-placement-and-napkins-and-runner-set.jpg'), require('../assets/products/pink-flower-table-runner.jpg'),require('../assets/products/table-placement-and-napkins-and-runner-set-yellow.jpg')] },
  
];

const Product = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePress = (item) => {
    setSelectedProduct(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧵 Explore Our Products</Text>
      <FlatList
        data={productList}
        keyExtractor={(item) => item.name}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => handlePress(item)}
            >
              <Image source={item.images[0]} style={styles.image} />
              <Text style={styles.label}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />

      {/* Modal to display all images */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.imageContainer}>
            {selectedProduct && selectedProduct.images.map((image, index) => (
              <Image key={index} source={image} style={styles.modalImage} />
            ))}
          </ScrollView>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
    overflow: 'hidden',
    height: 300,
  },
  image: {
    width: '90%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  label: {
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: '#8B0000',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    margin: 10,
    borderRadius: 10,
  },
  closeButton: {
    backgroundColor: '#8B0000',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  closeText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Product;
