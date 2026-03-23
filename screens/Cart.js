import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';

const Wishlist = () => {
  // Sample wishlist data (You can update it to be fetched from a backend or local storage)
  const [wishlist, setWishlist] = useState([
    { id: 'bags', name: 'Bags' },
    { id: 'bedsheet-with-quilted-pillow-cover', name: 'Bedsheets with Quilted Pillow Cover' },
    { id: 'baby-quilt', name: 'Baby Quilts' },
    { id: 'kids-dohar', name: 'Kids Dohars' },
    { id: 'sofa-throws', name: 'Sofa Throws' },
  ]);

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item from your wishlist?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setWishlist(wishlist.filter(item => item.id !== id));
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Wishlist</Text>

      {/* If wishlist is empty */}
      {wishlist.length === 0 ? (
        <Text style={styles.emptyText}>Your wishlist is empty</Text>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromWishlist(item.id)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8B0000',
  },
  emptyText: {
    fontSize: 18,
    color: '#8B0000',
    marginTop: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    color: '#8B0000',
  },
  removeButton: {
    backgroundColor: '#8B0000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Wishlist;
