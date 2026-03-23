# Quick Setup Guide - Shyam Ji Textiles Website

## ⚡ Fast Start (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm start -- --web
```

The website will automatically open at:
- **Primary**: `http://localhost:8081`
- **Alternative** (if port busy): `http://localhost:8082`

## 🌐 Accessing the Website

Once the server is running, you can:

1. **Open in Browser**: The development server automatically opens your default browser
2. **Mobile Testing**: Use Expo app on your phone:
   - Scan the QR code displayed in terminal
   - View on iOS or Android

## 📋 Available Commands

```bash
# Start web version
npm start -- --web

# Start with Android emulator
npm start -- --android

# Start with iOS simulator
npm start -- --ios

# Clean start (clear cache)
npm start -- --web --clear

# Install specific package
npm install package-name
```

## 🎨 Website Features to Test

### Home Page
- ✅ Featured Products carousel
- ✅ Category grid browsing
- ✅ "Why Choose Us" section
- ✅ Contact CTA button

### Product Browsing
- ✅ Click on any category
- ✅ View products in responsive grid
- ✅ Toggle between 2-3 column layout on resize

### Product Details
- ✅ View full image gallery
- ✅ Navigate with arrow buttons
- ✅ Click thumbnails to jump to image
- ✅ See product information

### Header Navigation
- ✅ Click menu items to navigate
- ✅ Mobile: Tap hamburger menu on small screens
- ✅ Wishlist icon in header

### Contact
- ✅ Fill contact form
- ✅ Submit query (emails configured)
- ✅ Form validation

### Footer
- ✅ View company information
- ✅ Contact details
- ✅ Social media links

## 🔧 Troubleshooting

### Port Already in Use
```bash
# If port 8081 is busy, Expo automatically uses 8082
# Or kill the process using port 8081
# Windows: netstat -ano | findstr :8081
# macOS/Linux: lsof -i :8081
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear cache and rebuild
npm start -- --web --clear
```

## 📱 Responsive Viewport Sizes

Test these widths in DevTools:
- **Mobile**: 375px - 480px
- **Tablet**: 600px - 900px
- **Desktop**: 1024px+

## 🚀 Performance Tips

1. **Clear Cache**: Use `npm start -- --web --clear`
2. **Browser DevTools**: Open DevTools to check for errors
3. **Network Tab**: Monitor image loading
4. **Console Tab**: Check for warnings or errors

## 📸 Screenshots

The website includes:
- Product images in `/assets/products/`
- Company logo in `/assets/logo/`
- Background image in `/assets/`

## 🎯 Next Steps

After testing locally:

1. **Customization**:
   - Update company info in Header/Footer
   - Modify colors in style sheets
   - Add more product images

2. **Deployment**:
   - Build for production: `npm run build`
   - Deploy to Vercel, Netlify, or AWS

3. **Optimization**:
   - Optimize images
   - Implement backend API
   - Add database integration

## 📞 Support Resources

- **Expo Docs**: https://docs.expo.dev/
- **React Native Docs**: https://reactnative.dev/
- **React Navigation**: https://reactnavigation.org/

---

**Happy Testing!** 🎉
