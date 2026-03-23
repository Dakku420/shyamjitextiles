# Shyam Ji Textiles - E-Commerce Website

A modern, responsive e-commerce website built with **React Native** and **Expo** for selling premium textiles including bedsheets, wardrobes, handkerchiefs, and more.

## 🌟 Features

### Homepage
- **Hero Section**: Eye-catching banner with call-to-action button
- **Featured Products**: Showcase of top products with horizontal scrolling
- **Product Categories**: Grid-based category browsing with icons
- **Why Choose Us**: Highlight key benefits and features
- **Contact CTA**: Easy access to contact page

### Product Browsing
- **Category Selection**: Browse products by category
- **Product Catalog**: Grid layout (responsive - 2-4 columns based on screen size)
- **Product Details**: Image gallery with navigation arrows and thumbna il previews
- **Image Counter**: Shows current image position in gallery

### User Experience
- **Smart Navigation**: Desktop navigation bar with mobile hamburger menu
- **Search Bar**: Quick product search functionality
- **Responsive Design**: Optimized for web, tablet, and mobile devices
- **Shopping Cart**: Wishlist functionality for saving favorite products
- **Contact Form**: Email integration for customer inquiries

### Footer
- **About Section**: Company information
- **Quick Links**: Easy navigation shortcuts
- **Contact Information**: Phone, email, and location details
- **Social Media**: Links to social media platforms
- **Copyright**: Legal information and branding

## 📦 Product Categories

1. **Bags** - Stylish and durable bags
2. **Bedsheets** - Premium bedsheets with quilted pillow covers
3. **Kids Dohar** - Comfortable quilts for kids
4. **Baby Quilts** - Soft and cozy quilts for babies
5. **TNT Sofa Throws** - Decorative sofa throws
6. **Table Runner** - Elegant table runners and placemats
7. **Towels** - High-quality towels
8. **Kids Bathrobe** - Comfortable bathrobes for children

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Expo CLI** (optional, for better development experience)

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd shyamjitextiles-main
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

### Running on Different Platforms

- **Web**: 
  ```bash
  npm start -- --web
  ```
  The website will open at `http://localhost:8081` (or `http://localhost:8082` if port 8081 is busy)

- **Android**:
  ```bash
  npm start -- --android
  ```

- **iOS**:
  ```bash
  npm start -- --ios
  ```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile Devices**: Optimized layout for phones (< 600px width)
- **Tablets**: Enhanced layout for tablets (600px - 900px)
- **Desktop**: Full-featured layout for larger screens (> 900px)

### Key Responsive Features:
- Hamburger menu on mobile devices
- Dynamic grid layouts (2-3-4 columns based on screen size)
- Touch-friendly buttons and interactive elements
- Optimized image sizes for different screen resolutions

## 🎨 Design Highlights

- **Brand Color**: Rich Dark Red (#8B0000)
- **Modern UI**: Clean and minimalist design
- **Typography**: Clear hierarchy with readable fonts
- **Icons**: FontAwesome icons for visual clarity
- **Animations**: Smooth transitions and hover effects
- **Cards**: Elegant card-based product display

## 📁 Project Structure

```
shyamjitextiles-main/
├── screens/
│   ├── Home.js           # Homepage with featured products
│   ├── ProductCatalogue.js # Product listing page
│   ├── ProductDetail.js   # Individual product details
│   ├── Product.js         # Product modal viewer
│   ├── Cart.js            # Shopping cart/wishlist
│   └── Contact.js         # Contact form
├── components/
│   ├── Header.js          # Navigation header
│   └── Footer.js          # Footer with company info
├── assets/
│   ├── products/          # Product images
│   ├── logo/              # Company logo
│   └── background.jpg     # Background image
├── App.js                 # Main application entry point
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🔧 Technologies Used

- **React Native**: Cross-platform mobile development framework
- **Expo**: Development platform and build service
- **React Navigation**: Navigation and routing
- **FontAwesome Icons**: Icon library
- **StyleSheet**: React Native styling
- **EmailJS**: Email service integration

## 📧 Email Integration

The contact form uses **EmailJS** for sending emails. Make sure the following environment variables are configured:

- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_USER_ID`

Update these in the Contact.js file for proper email functionality.

## 🎯 Key Components

### Header
- Responsive navigation bar
- Search functionality
- Wishlist icon with badge
- Mobile-friendly hamburger menu

### Home
- Hero section with background image
- Featured products carousel
- Category grid with icons
- Benefits section
- Contact CTA

### ProductCatalogue
- Grid-based product listing
- Responsive column layout
- Quick view functionality
- Product count display

### ProductDetail
- Image gallery with navigation
- Thumbnail preview strip
- Image counter
- Product information section
- Multiple image viewing options

### Footer
- Company information
- Quick links
- Contact details
- Social media links
- Copyright notice

## 🔐 Security Notes

- Email API keys are embedded (consider moving to backend for production)
- Form validation for user inputs
- Safe navigation handling

## 🚀 Deployment

### For Web Deployment:

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel/Netlify**:
   - Push to GitHub
   - Connect to Vercel or Netlify
   - Automatic deployment on push

### For Mobile Apps:

3. **Build APK/IPA**:
   ```bash
   eas build --platform android
   eas build --platform ios
   ```

## 📞 Support

For questions or issues:
- **Email**: shyamjitextiles@gmail.com
- **Phone**: +91 8094556508
- **Location**: India

## 📄 License

This project is proprietary and created for Shyam Ji Textiles. All rights reserved.

## 🙏 Acknowledgments

- Built with React Native and Expo
- Icons from FontAwesome
- Enhanced with modern design patterns
- Customer-focused features

---

**Last Updated**: March 2025  
**Version**: 1.0.0
