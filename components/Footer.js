import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
  const screenWidth = Dimensions.get('window').width;
  const isDesktop = screenWidth > 768;

  const quickLinks = [
    { id: 1, title: 'About Us', icon: 'info-circle' },
    { id: 2, title: 'Products', icon: 'shopping-bag' },
    { id: 3, title: 'FAQ', icon: 'question-circle' },
  ];

  const handlePhonePress = () => {
    Linking.openURL('tel:+918094556508');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:shyamjitextiles@gmail.com');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://instagram.com/shyamjitextiles');
  };

  return (
    <View style={styles.footer}>
      {/* Top Section - Company Info */}
      <View style={styles.topSection}>
        <View style={styles.companyInfo}>
          <Text style={styles.companyName}>Shyam Ji TEXTILES</Text>
          <Text style={styles.companyTagline}>Premium comfort, crafted for you</Text>
        </View>
      </View>

      {/* Main Content Sections */}
      <View style={[styles.footerContent, isDesktop && styles.footerContentDesktop]}>
        {/* Quick Links */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Links</Text>
          {quickLinks.map((link) => (
            <TouchableOpacity key={link.id} style={styles.linkItem}>
              <Icon name={link.icon} size={11} color="#1FBFA0" style={styles.linkIcon} />
              <Text style={styles.linkText}>{link.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <TouchableOpacity onPress={handlePhonePress} style={styles.contactItem}>
            <Icon name="phone" size={11} color="#1FBFA0" style={styles.contactIcon} />
            <Text style={styles.contactValue}>+91 8094556508</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmailPress} style={styles.contactItem}>
            <Icon name="envelope" size={11} color="#1FBFA0" style={styles.contactIcon} />
            <Text style={styles.contactValue}>shyamjitextiles@gmail.com</Text>
          </TouchableOpacity>
        </View>

        {/* Social */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Follow</Text>
          <View style={styles.socialLinksContainer}>
            <TouchableOpacity style={styles.socialIcon}>
              <Icon name="facebook" size={14} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleInstagramPress} style={styles.socialIcon}>
              <Icon name="instagram" size={14} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Icon name="twitter" size={14} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.footerBottom}>
        <Text style={styles.copyrightText}>
          © 2025 Shyam Ji Textiles. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#F5F1E8',
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginTop: 0,
  },
  topSection: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E8DCC8',
  },
  companyInfo: {
    alignItems: 'flex-start',
  },
  companyName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1FBFA0',
    letterSpacing: 0.5,
  },
  companyTagline: {
    fontSize: 10,
    color: '#999',
    marginTop: 3,
    fontStyle: 'italic',
  },
  footerContent: {
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  footerContentDesktop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#1FBFA0',
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  linkIcon: {
    marginRight: 6,
    width: 10,
  },
  linkText: {
    color: '#333',
    fontSize: 11,
    fontWeight: '500',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  contactIcon: {
    marginRight: 6,
    width: 10,
  },
  contactValue: {
    color: '#333',
    fontSize: 11,
    fontWeight: '500',
  },
  socialLinksContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  socialIcon: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#1FBFA0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  footerBottom: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E8DCC8',
  },
  copyrightText: {
    color: '#666',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Footer;
