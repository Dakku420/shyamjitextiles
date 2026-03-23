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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '',
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    const { name, email, phone, requirement } = formData;

    if (!name || !email || !phone || !requirement) {
      Alert.alert('Missing Fields', 'Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!phoneRegex.test(phone)) {
      Alert.alert('Invalid Phone Number', 'Please enter a 10-digit phone number.');
      return;
    }

    Alert.alert(
      'Confirm Submission',
      'Are you sure you want to submit your query?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Submit',
          onPress: async () => {
            try {
              const sendEmail = async (templateId, templateParams) => {
                const payload = {
                  service_id: 'service_wp2id3c',
                  template_id: templateId,
                  user_id: 'fnr5Np_7rM7tjBmgX',
                  template_params: templateParams,
                };

                const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(payload),
                });

                if (!response.ok) {
                  throw new Error('Email sending failed');
                }
              };

              await sendEmail('template_customer', {
                to_name: name,
                reply_to: email,
                message: `Thank you for reaching out to Shyam Ji Textile. We have received your query and will get back to you soon.\n\nYour Query: ${requirement}`,
              });

              await sendEmail('template_admin', {
                from_name: name,
                reply_to: email,
                phone: phone,
                message: requirement,
              });

              Alert.alert('Success', 'Your query has been sent successfully!');
              setFormData({ name: '', email: '', phone: '', requirement: '' });
            } catch (error) {
              console.error('EmailJS error:', error);
              Alert.alert('Error', 'Something went wrong while sending your message. Please try again later.');
            }
          },
        },
      ]
    );
  };

  const openWhatsApp = () => {
    const phoneNumber = '918233554755';
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
            <Text style={styles.buttonText}>Submit Query</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.floatingIcons}>
        <TouchableOpacity style={styles.iconButton} onPress={openInstagram}>
          <Icon name="instagram" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={openWhatsApp}>
          <Icon name="whatsapp" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
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
  floatingIcons: {
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
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default Contact;
