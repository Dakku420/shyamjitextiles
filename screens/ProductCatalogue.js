import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const products = {
  bags: [
    { id: 1, name: 'Bag 1', image: require('../assets/products/bags-1.jpg') },
    { id: 2, name: 'Bag 2', image: require('../assets/products/bags-2.jpg') },
    { id: 3, name: 'Bag 3', image: require('../assets/products/bags-3.jpg') },
    { id: 4, name: 'Bag 4', image: require('../assets/products/bags-4.jpg') },
    { id: 5, name: 'Bag 5', image: require('../assets/products/bags-5.jpg') },
    { id: 6, name: 'Bag 6', image: require('../assets/products/bags-6.jpg') },
    { id: 7, name: 'Bag 7', image: require('../assets/products/bags-7.jpg') },
    { id: 8, name: 'Bag 8', image: require('../assets/products/bags-8.jpg') },
  ],
  'bedsheet-with-quilted-pillow-cover': [
    { id: 1, name: 'Bedsheet with Pillow Cover 1', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-1.jpg') },
    { id: 2, name: 'Bedsheet with Pillow Cover 2', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-2.jpg') },
    { id: 3, name: 'Bedsheet with Pillow Cover 3', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-3.jpg') },
    { id: 4, name: 'Bedsheet with Pillow Cover 4', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-4.jpg') },
    { id: 5, name: 'Bedsheet with Pillow Cover 5', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-5.jpg') },
    { id: 6, name: 'Bedsheet with Pillow Cover 6', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-6.jpg') },
    { id: 7, name: 'Bedsheet with Pillow Cover 7', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-7.jpg') },
    { id: 8, name: 'Bedsheet with Pillow Cover 8', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-8.jpg') },
    { id: 9, name: 'Bedsheet with Pillow Cover 9', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-9.jpg') },
    { id: 10, name: 'Bedsheet with Pillow Cover 10', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-10.jpg') },
    { id: 11, name: 'Bedsheet with Pillow Cover 11', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-11.jpg') },
    { id: 12, name: 'Bedsheet with Pillow Cover 12', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-12.jpg') },
    { id: 13, name: 'Bedsheet with Pillow Cover 13', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-13.jpg') },
    { id: 14, name: 'Bedsheet with Pillow Cover 14', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-14.jpg') },
    { id: 15, name: 'Bedsheet with Pillow Cover 15', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-15.jpg') },
    { id: 16, name: 'Bedsheet with Pillow Cover 16', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-16.jpg') },
    { id: 17, name: 'Bedsheet with Pillow Cover 17', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-17.jpg') },
    { id: 18, name: 'Bedsheet with Pillow Cover 18', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-18.jpg') },
    { id: 19, name: 'Bedsheet with Pillow Cover 19', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-19.jpg') },
    { id: 20, name: 'Bedsheet with Pillow Cover 20', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-20.jpg') },
    { id: 21, name: 'Bedsheet with Pillow Cover 21', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-21.jpg') },
    { id: 22, name: 'Bedsheet with Pillow Cover 22', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-22.jpg') },
    { id: 23, name: 'Bedsheet with Pillow Cover 23', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-23.jpg') },
    { id: 24, name: 'Bedsheet with Pillow Cover 24', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-24.jpg') },
    { id: 25, name: 'Bedsheet with Pillow Cover 25', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-25.jpg') },
    { id: 26, name: 'Bedsheet with Pillow Cover 26', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-26.jpg') },
    { id: 27, name: 'Bedsheet with Pillow Cover 27', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-27.jpg') },
    { id: 28, name: 'Bedsheet with Pillow Cover 28', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-28.jpg') },
    { id: 29, name: 'Bedsheet with Pillow Cover 29', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-29.jpg') },
    { id: 30, name: 'Bedsheet with Pillow Cover 30', image: require('../assets/products/bedsheet-with-quilted-pillow-cover-30.jpg') },
    // More bedsheets...
  ],
  'kids-dohar': [
    { id: 1, name: 'Kids Dohar 1', image: require('../assets/products/kids-dohar-1.jpg') },
    { id: 2, name: 'Kids Dohar 2', image: require('../assets/products/kids-dohar-2.jpg') },
    { id: 1, name: 'Kids Dohar 3', image: require('../assets/products/kids-dohar-3.jpg') },
    { id: 2, name: 'Kids Dohar 4', image: require('../assets/products/kids-dohar-4.jpg') },
    { id: 1, name: 'Kids Dohar 5', image: require('../assets/products/kids-dohar-5.jpg') },
    { id: 2, name: 'Kids Dohar 6', image: require('../assets/products/kids-dohar-6.jpg') },
    { id: 1, name: 'Kids Dohar 7', image: require('../assets/products/kids-dohar-7.jpg') },
    { id: 2, name: 'Kids Dohar 8', image: require('../assets/products/kids-dohar-8.jpg') },
    { id: 1, name: 'Kids Dohar 9', image: require('../assets/products/kids-dohar-9.jpg') },
    { id: 2, name: 'Kids Dohar 10', image: require('../assets/products/kids-dohar-10.jpg') },
    { id: 1, name: 'Kids Dohar 11', image: require('../assets/products/kids-dohar-11.jpg') },
    { id: 2, name: 'Kids Dohar 12', image: require('../assets/products/kids-dohar-12.jpg') },
    { id: 1, name: 'Kids Dohar 13', image: require('../assets/products/kids-dohar-13.jpg') },
    { id: 2, name: 'Kids Dohar 14', image: require('../assets/products/kids-dohar-14.jpg') },
    { id: 1, name: 'Kids Dohar 15', image: require('../assets/products/kids-dohar-15.jpg') },
    { id: 2, name: 'Kids Dohar 16', image: require('../assets/products/kids-dohar-16.jpg') },
    { id: 1, name: 'Kids Dohar 17', image: require('../assets/products/kids-dohar-17.jpg') },
    { id: 2, name: 'Kids Dohar 18', image: require('../assets/products/kids-dohar-18.jpg') },
    { id: 2, name: 'Kids Dohar 18', image: require('../assets/products/kids-dohar-19.jpg') },
    { id: 2, name: 'Kids Dohar 18', image: require('../assets/products/kids-dohar-20.jpg') },
    // More kids dohar...
  ],
  'baby-quilt': [
    { id: 1, name: 'Baby Quilt 1', image: require('../assets/products/baby-quilt-1.jpg') },
    { id: 2, name: 'Baby Quilt 2', image: require('../assets/products/baby-quilt-2.jpg') },
    { id: 3, name: 'Baby Quilt 3', image: require('../assets/products/baby-quilt-3.jpg') },
    { id: 4, name: 'Baby Quilt 4', image: require('../assets/products/baby-quilt-4.jpg') },
    { id: 5, name: 'Baby Quilt 5', image: require('../assets/products/baby-quilt-5.jpg') },
    { id: 6, name: 'Baby Quilt 6', image: require('../assets/products/baby-quilt-6.jpg') },
    { id: 7, name: 'Baby Quilt 7', image: require('../assets/products/baby-quilt-7.jpg') },
    { id: 8, name: 'Baby Quilt 8', image: require('../assets/products/baby-quilt-8.jpg') },
    { id: 9, name: 'Baby Quilt 9', image: require('../assets/products/baby-quilt-9.jpg') },
    { id: 10, name: 'Baby Quilt 10', image: require('../assets/products/baby-quilt-10.jpg') },
    { id: 11, name: 'Baby Quilt 11', image: require('../assets/products/baby-quilt-11.jpg') },
    { id: 12, name: 'Baby Quilt 12', image: require('../assets/products/baby-quilt-12.jpg') },
    { id: 13, name: 'Baby Quilt 13', image: require('../assets/products/baby-quilt-13.jpg') },
    { id: 14, name: 'Baby Quilt 14', image: require('../assets/products/baby-quilt-14.jpg') },
    { id: 15, name: 'Baby Quilt 15', image: require('../assets/products/baby-quilt-15.jpg') },
    { id: 16, name: 'Baby Quilt 16', image: require('../assets/products/baby-quilt-16.jpg') },
    { id: 17, name: 'Baby Quilt 17', image: require('../assets/products/baby-quilt-17.jpg') },
    { id: 18, name: 'Baby Quilt 18', image: require('../assets/products/baby-quilt-18.jpg') },
    { id: 19, name: 'Baby Quilt 19', image: require('../assets/products/baby-quilt-19.jpg') },
    { id: 20, name: 'Baby Quilt 20', image: require('../assets/products/baby-quilt-20.jpg') },
    { id: 21, name: 'Baby Quilt 21', image: require('../assets/products/baby-quilt-21.jpg') },
    { id: 22, name: 'Baby Quilt 22', image: require('../assets/products/baby-quilt-22.jpg') },
    { id: 23, name: 'Baby Quilt 23', image: require('../assets/products/baby-quilt-23.jpg') },
    { id: 24, name: 'Baby Quilt 24', image: require('../assets/products/baby-quilt-24.jpg') },
    { id: 25, name: 'Baby Quilt 25', image: require('../assets/products/baby-quilt-25.jpg') },
    { id: 26, name: 'Baby Quilt 26', image: require('../assets/products/baby-quilt-26.jpg') },
    { id: 27, name: 'Baby Quilt 27', image: require('../assets/products/baby-quilt-27.jpg') },
    { id: 28, name: 'Baby Quilt 28', image: require('../assets/products/baby-quilt-28.jpg') },
    { id: 29, name: 'Baby Quilt 29', image: require('../assets/products/baby-quilt-29.jpg') },
    { id: 30, name: 'Baby Quilt 30', image: require('../assets/products/baby-quilt-30.jpg') },
    { id: 31, name: 'Baby Quilt 31', image: require('../assets/products/baby-quilt-31.jpg') },
    { id: 32, name: 'Baby Quilt 32', image: require('../assets/products/baby-quilt-32.jpg') },

    // More baby quilts...
  ],
  'TNT-sofa-throw': [
    { id: 1, name: 'TNT Sofa Throw 1', image: require('../assets/products/TNT-sofa-throw-1.jpg') },
    { id: 2, name: 'TNT Sofa Throw 2', image: require('../assets/products/TNT-sofa-throw-2.jpg') },
    { id: 3, name: 'TNT Sofa Throw 3', image: require('../assets/products/TNT-sofa-throw-3.jpg') },
    { id: 4, name: 'TNT Sofa Throw 4', image: require('../assets/products/TNT-sofa-throw-4.jpg') },
    { id: 5, name: 'TNT Sofa Throw 5', image: require('../assets/products/TNT-sofa-throw-5.jpg') },
    { id: 6, name: 'TNT Sofa Throw 6', image: require('../assets/products/TNT-sofa-throw-6.jpg') },
    { id: 7, name: 'TNT Sofa Throw 7', image: require('../assets/products/TNT-sofa-throw-7.jpg') },
    { id: 8, name: 'TNT Sofa Throw 8', image: require('../assets/products/TNT-sofa-throw-8.jpg') },
    { id: 9, name: 'TNT Sofa Throw 9', image: require('../assets/products/TNT-sofa-throw-9.jpg') },
    { id: 10, name: 'TNT Sofa Throw 10', image: require('../assets/products/TNT-sofa-throw-10.jpg') },
    { id: 11, name: 'TNT Sofa Throw 11', image: require('../assets/products/TNT-sofa-throw-11.jpg') },
    { id: 12, name: 'TNT Sofa Throw 12', image: require('../assets/products/TNT-sofa-throw-12.jpg') },
    { id: 13, name: 'TNT Sofa Throw 13', image: require('../assets/products/TNT-sofa-throw-13.jpg') },
    { id: 14, name: 'TNT Sofa Throw 14', image: require('../assets/products/TNT-sofa-throw-14.jpg') },
    { id: 15, name: 'TNT Sofa Throw 15', image: require('../assets/products/TNT-sofa-throw-15.jpg') },
    { id: 16, name: 'TNT Sofa Throw 16', image: require('../assets/products/TNT-sofa-throw-16.jpg') },
    { id: 17, name: 'TNT Sofa Throw 17', image: require('../assets/products/TNT-sofa-throw-17.jpg') },
    { id: 18, name: 'TNT Sofa Throw 18', image: require('../assets/products/TNT-sofa-throw-18.jpg') },
    { id: 19, name: 'TNT Sofa Throw 19', image: require('../assets/products/TNT-sofa-throw-19.jpg') },
    { id: 20, name: 'TNT Sofa Throw 20', image: require('../assets/products/TNT-sofa-throw-20.jpg') },
    // More sofa throws...
  ],
  'Towel': [
    
    { id: 3, name: 'Towel 3', image: require('../assets/products/towel-3.jpg') },
    { id: 4, name: 'Towel 4', image: require('../assets/products/towel-4.jpg') },
    { id: 5, name: 'Towel 5', image: require('../assets/products/towel-5.jpg') },
    { id: 6, name: 'Towel 6', image: require('../assets/products/towel-6.jpg') },
    { id: 7, name: 'Towel 7', image: require('../assets/products/towel-7.jpg') },
    { id: 8, name: 'Towel 8', image: require('../assets/products/towel-8.jpg') },
    { id: 9, name: 'Towel 9', image: require('../assets/products/towel-9.jpg') },
    { id: 10, name: 'Towel 10', image: require('../assets/products/towel-10.jpg') },
    // More sofa throws...
  ],
  'Table-Runner': [
    { id: 1, name: 'pink-flower-table-runner', image: require('../assets/products/pink-flower-table-runner.jpg') },
    { id: 2, name: 'table-placement-and-napkins-and-runner-set-blue', image: require('../assets/products/table-placement-and-napkins-and-runner-set-blue.jpg') },
    { id: 2, name: 'table-placement-and-napkins-and-runner-set-white', image: require('../assets/products/table-placement-and-napkins-and-runner-set.jpg') },
    { id: 2, name: 'table-placement-and-napkins-and-runner-set-yellow', image: require('../assets/products/table-placement-and-napkins-and-runner-set-yellow.jpg') },
    // More sofa throws...
  ],
  
};

const ProductCatalogue = ({ route, navigation }) => {
  const { product } = route.params;  // Get the product category passed from the Home screen
  const productList = products[product] || [];  // Fetch the products based on the category
  const screenWidth = Dimensions.get('window').width;
  const numColumns = screenWidth > 600 ? 3 : 2;
  const columnWrapperStyle = {
    justifyContent: 'space-around',
    marginBottom: 10,
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.productCard, { width: (screenWidth - 40) / numColumns - 8 }]}
      onPress={() => {
        // Navigate to Product detail view with images
        const allImages = productList
          .filter(p => p.name.toLowerCase().includes(item.name.toLowerCase().split(' ')[0]))
          .map(p => p.image);
        
        navigation.navigate('Product', { 
          productName: product, 
          images: allImages.length > 0 ? allImages : [item.image] 
        });
      }}
    >
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.replace(/-/g, ' ').toUpperCase()}</Text>
      <Text style={styles.productCount}>{productList.length} Products Available</Text>

      <FlatList
        data={productList}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        numColumns={numColumns}
        columnWrapperStyle={columnWrapperStyle}
        renderItem={renderProductItem}
        scrollEnabled={true}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F5F1E8',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  productCount: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 4,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    backgroundColor: '#f0f0f0',
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    minHeight: 28,
  },
  viewButton: {
    backgroundColor: '#1FBFA0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default ProductCatalogue;
