import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, Image, ScrollView } from 'react-native';
import { WishlistContext } from '../context/WishlistContext';
import Footer from '../components/Footer';

const productList = [
  { name: 'bags', images: [require('../assets/products/bags-1.jpg'), require('../assets/products/bags-2.jpg'), require('../assets/products/bags-3.jpg'), require('../assets/products/bags-4.jpg'), require('../assets/products/bags-5.jpg'), require('../assets/products/bags-6.jpg'), require('../assets/products/bags-7.jpg'), require('../assets/products/bags-8.jpg')] },
  { name: 'bedsheet-with-quilted-pillow-cover', images: [require('../assets/products/bedsheet-with-quilted-pillow-cover-1.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-2.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-3.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-4.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-5.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-6.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-7.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-8.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-9.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-10.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-11.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-12.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-13.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-14.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-15.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-16.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-17.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-18.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-19.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-20.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-21.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-22.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-23.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-24.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-25.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-26.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-27.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-28.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-29.jpg'), require('../assets/products/bedsheet-with-quilted-pillow-cover-30.jpg')] },
  { name: 'kids-dohar', images: [require('../assets/products/kids-dohar-1.jpg'), require('../assets/products/kids-dohar-2.jpg'), require('../assets/products/kids-dohar-3.jpg'), require('../assets/products/kids-dohar-4.jpg'), require('../assets/products/kids-dohar-5.jpg'), require('../assets/products/kids-dohar-6.jpg'), require('../assets/products/kids-dohar-7.jpg'), require('../assets/products/kids-dohar-8.jpg'), require('../assets/products/kids-dohar-9.jpg'), require('../assets/products/kids-dohar-10.jpg'), require('../assets/products/kids-dohar-11.jpg'), require('../assets/products/kids-dohar-12.jpg'), require('../assets/products/kids-dohar-13.jpg'), require('../assets/products/kids-dohar-14.jpg'), require('../assets/products/kids-dohar-15.jpg'), require('../assets/products/kids-dohar-16.jpg'), require('../assets/products/kids-dohar-17.jpg'), require('../assets/products/kids-dohar-18.jpg'), require('../assets/products/kids-dohar-19.jpg'), require('../assets/products/kids-dohar-20.jpg')] },
  { name: 'baby-quilt', images: [require('../assets/products/baby-quilt-1.jpg'), require('../assets/products/baby-quilt-2.jpg'), require('../assets/products/baby-quilt-3.jpg'), require('../assets/products/baby-quilt-4.jpg'), require('../assets/products/baby-quilt-5.jpg'), require('../assets/products/baby-quilt-6.jpg'), require('../assets/products/baby-quilt-7.jpg'), require('../assets/products/baby-quilt-8.jpg'), require('../assets/products/baby-quilt-9.jpg'), require('../assets/products/baby-quilt-10.jpg'), require('../assets/products/baby-quilt-11.jpg'), require('../assets/products/baby-quilt-12.jpg'), require('../assets/products/baby-quilt-13.jpg'), require('../assets/products/baby-quilt-14.jpg'), require('../assets/products/baby-quilt-15.jpg'), require('../assets/products/baby-quilt-16.jpg'), require('../assets/products/baby-quilt-17.jpg'), require('../assets/products/baby-quilt-18.jpg'), require('../assets/products/baby-quilt-19.jpg'), require('../assets/products/baby-quilt-20.jpg'), require('../assets/products/baby-quilt-21.jpg'), require('../assets/products/baby-quilt-22.jpg'), require('../assets/products/baby-quilt-23.jpg'), require('../assets/products/baby-quilt-24.jpg'), require('../assets/products/baby-quilt-24.jpg'), require('../assets/products/baby-quilt-25.jpg'), require('../assets/products/baby-quilt-26.jpg'), require('../assets/products/baby-quilt-27.jpg'), require('../assets/products/baby-quilt-28.jpg'), require('../assets/products/baby-quilt-29.jpg'), require('../assets/products/baby-quilt-30.jpg'), require('../assets/products/baby-quilt-31.jpg'), require('../assets/products/baby-quilt-32.jpg')] },
  { name: 'TNT-sofa-throw', images: [require('../assets/products/TNT-sofa-throw-1.jpg'), require('../assets/products/TNT-sofa-throw-2.jpg'), require('../assets/products/TNT-sofa-throw-3.jpg'), require('../assets/products/TNT-sofa-throw-4.jpg'), require('../assets/products/TNT-sofa-throw-5.jpg'), require('../assets/products/TNT-sofa-throw-6.jpg'), require('../assets/products/TNT-sofa-throw-7.jpg'), require('../assets/products/TNT-sofa-throw-8.jpg'), require('../assets/products/TNT-sofa-throw-9.jpg'), require('../assets/products/TNT-sofa-throw-10.jpg'), require('../assets/products/TNT-sofa-throw-11.jpg'), require('../assets/products/TNT-sofa-throw-12.jpg'), require('../assets/products/TNT-sofa-throw-13.jpg'), require('../assets/products/TNT-sofa-throw-14.jpg'), require('../assets/products/TNT-sofa-throw-15.jpg'), require('../assets/products/TNT-sofa-throw-16.jpg'), require('../assets/products/TNT-sofa-throw-17.jpg'), require('../assets/products/TNT-sofa-throw-18.jpg'), require('../assets/products/TNT-sofa-throw-19.jpg'), require('../assets/products/TNT-sofa-throw-20.jpg')] },
  { name: 'Towel', images: [require('../assets/products/towel-3.jpg'), require('../assets/products/towel-4.jpg'), require('../assets/products/towel-5.jpg'), require('../assets/products/towel-6.jpg'), require('../assets/products/towel-7.jpg'), require('../assets/products/towel-8.jpg'), require('../assets/products/towel-9.jpg'), require('../assets/products/towel-10.jpg')] },
  { name: 'Table-Runner', images: [require('../assets/products/table-placement-and-napkins-and-runner-set-blue.jpg'), require('../assets/products/table-placement-and-napkins-and-runner-set.jpg'), require('../assets/products/pink-flower-table-runner.jpg'), require('../assets/products/table-placement-and-napkins-and-runner-set-yellow.jpg')] },
];

const Wishlist = () => {
  const { wishlist, removeFromWishlist, getWishlistCount } = useContext(WishlistContext);

  const handleRemoveItem = (category, index) => {
    removeFromWishlist(category, index);
    Alert.alert('Success', 'Item removed from wishlist');
  };

  const getProductImage = (category, index) => {
    const product = productList.find((p) => p.name === category);
    if (product && product.images && product.images[index]) {
      return product.images[index];
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>❤️ Your Wishlist ({getWishlistCount()} items)</Text>

      {/* If wishlist is empty */}
      {wishlist.length === 0 ? (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Text style={styles.emptyText}>Your wishlist is empty. Add some items you love!</Text>
          <View style={{ flex: 1 }} />
          <Footer />
        </ScrollView>
      ) : (
        <>
          <FlatList
            data={wishlist}
            keyExtractor={(item) => `${item.category}-${item.index}-${item.addedAt}`}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image
                  source={getProductImage(item.category, item.index)}
                  style={styles.itemImage}
                />
                <View style={styles.itemContent}>
                  <Text style={styles.itemCategory}>{item.category.replace(/-/g, ' ').toUpperCase()}</Text>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemDate}>
                    Added: {new Date(item.addedAt).toLocaleDateString()}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => handleRemoveItem(item.category, item.index)}
                >
                  <Text style={styles.removeButtonText}>✕</Text>
                </TouchableOpacity>
              </View>
            )}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
            extraData={wishlist}
            ListFooterComponent={<Footer />}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8B0000',
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 40,
    textAlign: 'center',
    lineHeight: 24,
  },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    resizeMode: 'cover',
  },
  itemContent: {
    flex: 1,
  },
  itemCategory: {
    fontSize: 11,
    fontWeight: '700',
    color: '#999',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  itemName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  itemDate: {
    fontSize: 12,
    color: '#999',
  },
  removeButton: {
    backgroundColor: '#8B0000',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Wishlist;