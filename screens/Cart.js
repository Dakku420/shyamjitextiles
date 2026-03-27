import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, Image, Modal, TextInput, ScrollView, Linking, Platform } from 'react-native';
import emailjs from '@emailjs/browser';
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';
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

const Cart = () => {
  const { wishlist } = useContext(WishlistContext);
  const { cart, removeFromCart, updateQuantity, getCartCount, getCartTotal, clearCart } = useContext(CartContext);

  const [isCheckoutModalVisible, setCheckoutModalVisible] = useState(false);
  const [checkoutData, setCheckoutData] = useState({ name: '', email: '', phone: '', address: '' });
  const [utrNumber, setUtrNumber] = useState('');
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const handleCheckoutSubmit = () => {
    if (!checkoutData.name || !checkoutData.email || !checkoutData.phone || !checkoutData.address) {
      Platform.OS === 'web' ? window.alert('Please fill in all details including your Email.') : Alert.alert('Error', 'Please fill in all details including your Email.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(checkoutData.email)) {
      Platform.OS === 'web' ? window.alert('Please enter a valid email address.') : Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!utrNumber || utrNumber.trim().length < 8) {
      Platform.OS === 'web' ? window.alert('Please complete the UPI payment and enter the accurate Transaction / UTR Reference number to verify your order.') : Alert.alert('Payment Verification Required', 'Please complete the UPI payment and enter the exact 12-digit Transaction / UTR Reference number to verify your order.');
      return;
    }

    let orderDetails = `Payment Method: UPI (Online Pre-paid)\n`;
    orderDetails += `Transaction UTR No: ${utrNumber}\n`;
    orderDetails += `Delivery Address: ${checkoutData.address}\n\n`;
    orderDetails += `Order Summary:\n`;
    cart.forEach((item, i) => {
      orderDetails += `${i + 1}. ${item.quantity}x ${item.name} (${item.category})\n`;
    });
    orderDetails += `\nTotal Items: ${getCartCount()}`;
    orderDetails += `\nFinal Amount: ₹${getCartTotal().toLocaleString('en-IN')}`;

    const templateParams = {
      from_name: checkoutData.name,
      reply_to: checkoutData.email,
      phone: checkoutData.phone,
      message: orderDetails,
    };

    // 1. Send Order to Store Admin
    emailjs.send(
      'service_39xssrf',
      'template_gbr4b2e',
      templateParams,
      'fnr5Np_7rM7tjBmgX'
    ).catch(err => console.log('Admin Email failed:', err));

    // 2. Send Receipt to Customer
    emailjs.send(
      'service_39xssrf',
      'template_k3r0tnn',
      templateParams,
      'fnr5Np_7rM7tjBmgX'
    ).catch(err => console.log('Customer Email failed:', err));

    // Show native success popup overlay
    setCheckoutModalVisible(false);
    setSuccessModalVisible(true);
    setCheckoutData({ name: '', email: '', phone: '', address: '' });
    setUtrNumber('');
    clearCart();
  };

  const handleWhatsAppCheckout = () => {
    const phoneNumber = '918094556508';
    let message = 'Hello Shyam Ji Textiles! I would like to place an order for:\n\n';
    cart.forEach((item, i) => {
      message += `${i + 1}. ${item.quantity}x ${item.name} (${item.category})\n`;
    });
    message += `\nTotal Items: ${getCartCount()}\nPlease process my order.`;

    let url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    Linking.openURL(url)
      .then(() => clearCart())
      .catch(() => Alert.alert('Error', 'Make sure WhatsApp is installed'));
  };

  const handleRemoveItem = (category, index) => {
    removeFromCart(category, index);
    Alert.alert('Success', 'Item removed from cart');
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
      <Text style={styles.header}>� Your Cart ({getCartCount()} items)</Text>

      {/* If cart is empty */}
      {cart.length === 0 ? (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Text style={styles.emptyText}>Your cart is empty. Add some items for checkout!</Text>
          <View style={{ flex: 1 }} />
          <Footer />
        </ScrollView>
      ) : (
        <>
          <FlatList
            data={cart}
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

                  {/* Quantity Controls */}
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => updateQuantity(item.category, item.index, item.quantity - 1)}
                    >
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => updateQuantity(item.category, item.index, item.quantity + 1)}
                    >
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
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
            extraData={cart}
            ListFooterComponent={
              <>
                <View style={styles.checkoutContainer}>
                  <Text style={styles.totalText}>Total Items: {getCartCount()}</Text>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                    <TouchableOpacity
                      style={[styles.checkoutButton, { flex: 1, backgroundColor: '#25D366' }]}
                      onPress={handleWhatsAppCheckout}
                    >
                      <Text style={styles.checkoutButtonText}>📱 WhatsApp Order</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.checkoutButton, { flex: 1 }]}
                      onPress={() => setCheckoutModalVisible(true)}
                    >
                      <Text style={styles.checkoutButtonText}>💳 Normal Checkout</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ marginTop: 30 }}>
                  <Footer />
                </View>
              </>
            }
          />
        </>
      )}

      {/* Success Confirmation Overlay */}
      {isSuccessModalVisible && (
        <View style={styles.absoluteModalOverlay}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 60, marginBottom: 20 }}>✅</Text>
            <Text style={styles.modalTitle}>Order Confirmed!</Text>
            <Text style={styles.modalMessage}>Thank you! Your order has been securely placed and payment details received.</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setSuccessModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Close & Return</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Checkout Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isCheckoutModalVisible}
        onRequestClose={() => setCheckoutModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Checkout Details</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your name"
                placeholderTextColor="#999"
                value={checkoutData.name}
                onChangeText={(text) => setCheckoutData({ ...checkoutData, name: text })}
              />

              <Text style={styles.inputLabel}>Email Address</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your email to receive receipt"
                placeholderTextColor="#999"
                keyboardType="email-address"
                value={checkoutData.email}
                onChangeText={(text) => setCheckoutData({ ...checkoutData, email: text })}
              />

              <Text style={styles.inputLabel}>Phone Number</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter 10 digit number"
                placeholderTextColor="#999"
                keyboardType="numeric"
                value={checkoutData.phone}
                onChangeText={(text) => setCheckoutData({ ...checkoutData, phone: text })}
              />

              <Text style={styles.inputLabel}>Delivery Address</Text>
              <TextInput
                style={[styles.inputField, { height: 80, textAlignVertical: 'top' }]}
                placeholder="Complete address with pincode"
                placeholderTextColor="#999"
                multiline
                numberOfLines={3}
                value={checkoutData.address}
                onChangeText={(text) => setCheckoutData({ ...checkoutData, address: text })}
              />

              <Text style={styles.inputLabel}>Payment (UPI / QR Code)</Text>
              <View style={styles.upiContainer}>
                <Text style={styles.upiInstructions}>Scan to Pay or use our UPI ID:</Text>
                <Text style={styles.upiId} selectable={true}>yashagrawal80942@ybl</Text>
                <Image
                  source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=yashagrawal80942@ybl&pn=Shyam%20Ji%20Textiles&cu=INR' }}
                  style={styles.qrCode}
                />
                <Text style={styles.upiWarning}>Please confirm the total amount with our team and complete the payment before placing the order.</Text>
              </View>

              <Text style={styles.inputLabel}>Transaction / UTR Number *</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter 12-digit UPI Reference No."
                placeholderTextColor="#999"
                keyboardType="numeric"
                value={utrNumber}
                onChangeText={setUtrNumber}
              />

              <View style={styles.summaryContainer}>
                <Text style={styles.summaryText}>Total Items to order: {getCartCount()}</Text>
                <Text style={styles.finalAmountText}>Final Amount: ₹{getCartTotal().toLocaleString('en-IN')}</Text>
              </View>

              <View style={styles.modalActions}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalCancelBtn]}
                  onPress={() => setCheckoutModalVisible(false)}
                >
                  <Text style={styles.modalCancelBtnText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalSubmitBtn]}
                  onPress={handleCheckoutSubmit}
                >
                  <Text style={styles.modalSubmitBtnText}>Place Order</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    backgroundColor: '#ddd',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 15,
    minWidth: 30,
    textAlign: 'center',
  },
  checkoutContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    minHeight: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  inputField: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    marginBottom: 16,
    color: '#000',
  },
  summaryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4CAF50',
    marginVertical: 10,
    textAlign: 'center',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 10,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalCancelBtn: {
    backgroundColor: '#ffdddd',
    marginRight: 10,
  },
  modalSubmitBtn: {
    backgroundColor: '#4CAF50',
    marginLeft: 10,
  },
  modalCancelBtnText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryContainer: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginVertical: 15,
  },
  finalAmountText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1FBFA0',
    marginTop: 5,
  },
  modalSubmitBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  absoluteModalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modalMessage: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  paymentOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 10,
  },
  paymentOption: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  paymentOptionSelected: {
    borderColor: '#25D366',
    backgroundColor: '#e8f5e9',
    borderWidth: 2,
  },
  paymentOptionText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  paymentOptionTextSelected: {
    color: '#25D366',
    fontWeight: 'bold',
  },
  upiContainer: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  upiInstructions: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    fontWeight: '600',
  },
  upiId: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 15,
  },
  qrCode: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  upiWarning: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
});

export default Cart;
