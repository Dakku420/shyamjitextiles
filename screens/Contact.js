import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  ImageBackground,
  Linking,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '',
  });

  const [buttonText, setButtonText] = useState('Submit Query');
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    const { name, email, phone, requirement } = formData;

    if (!name || !email || !phone || !requirement) {
      Platform.OS === 'web' ? window.alert('Please fill in all fields.') : Alert.alert('Missing Fields', 'Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
      Platform.OS === 'web' ? window.alert('Please enter a valid email address.') : Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!phoneRegex.test(phone)) {
      Platform.OS === 'web' ? window.alert('Please enter exactly a 10-digit phone number (e.g. 9876543210).') : Alert.alert('Invalid Phone Number', 'Please enter a 10-digit phone number.');
      return;
    }

    // 1. Trigger success UI immediately before EmailJS background load
    setSuccessModalVisible(true);
    setButtonText('Query Submitted');
    setTimeout(() => setButtonText('Submit Query'), 3000);
    setFormData({ name: '', email: '', phone: '', requirement: '' });

    // 3. Attempt EmailJS in background via official SDK to fix web CORS headers
    try {
      const templateParams = {
        from_name: name,
        reply_to: email,
        phone: phone,
        message: requirement,
      };

      emailjs.send(
        'service_39xssrf',
        'template_gbr4b2e',
        templateParams,
        'fnr5Np_7rM7tjBmgX'
      ).then((response) => {
        console.log('Background EmailJS SUCCESS:', response.status, response.text);
      }).catch((error) => {
        console.error('Background EmailJS FAILED:', error);
      });
    } catch (error) {
      console.log('Background EmailJS Sync error:', error);
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '918094556508';
    const message = 'Hello, I have a query!';
    let url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    Linking.openURL(url).catch(() => Alert.alert('WhatsApp not installed'));
  };

  const openInstagram = () => {
    const username = 'shyamjitextiles25';
    const url = `https://www.instagram.com/${username}`;
    Linking.openURL(url);
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.overlay}>
          <Text style={styles.title}>📨 Contact Us</Text>

          <TextInput
            placeholder="Your Name"
            placeholderTextColor="#666"
            style={styles.input}
            value={formData.name}
            onChangeText={(value) => handleChange('name', value)}
          />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#666"
            style={styles.input}
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(value) => handleChange('email', value)}
          />
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#666"
            style={styles.input}
            keyboardType="phone-pad"
            value={formData.phone}
            onChangeText={(value) => handleChange('phone', value)}
          />
          <TextInput
            placeholder="What do you want? (Your Requirement)"
            placeholderTextColor="#666"
            style={[styles.input, styles.textArea]}
            multiline
            numberOfLines={5}
            value={formData.requirement}
            onChangeText={(value) => handleChange('requirement', value)}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 40, marginHorizontal: -20, marginBottom: -20 }}>
          <Footer />
        </View>
        {/* Social Media Float */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={openWhatsApp}>
            <Icon name="whatsapp" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={openInstagram}>
            <Icon name="instagram" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {isSuccessModalVisible && (
        <View style={styles.absoluteModalOverlay}>
          <View style={styles.modalContent}>
            <Icon name="check-circle" size={60} color="#4CAF50" style={{ marginBottom: 20 }} />
            <Text style={styles.modalTitle}>Query Submitted!</Text>
            <Text style={styles.modalMessage}>Thank you! Your query has been successfully routed to our team.</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setSuccessModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    padding: 25,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1FBFA0',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
    color: '#000',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#1FBFA0',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  socialContainer: {
    position: 'absolute',
    bottom: 25,
    right: 20,
    flexDirection: 'column',
    gap: 15,
  },
  iconButton: {
    backgroundColor: '#1FBFA0',
    width: 55,
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  absoluteModalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    width: '80%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  modalButton: {
    backgroundColor: '#8B0000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Contact;
