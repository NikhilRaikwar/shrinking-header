# BitGuardAI - Clerk Authentication Setup

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Optional: Custom URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## Getting Your Clerk Keys

1. Go to [clerk.com](https://clerk.com) and create an account
2. Create a new application
3. Go to the "API Keys" section in your dashboard
4. Copy the "Publishable Key" and "Secret Key"
5. Replace the placeholder values in your `.env.local` file

## Features Implemented

### ✅ Authentication Flow
- **Connect Wallet Button** → Opens Clerk sign-in modal
- **Sign In/Sign Up** → Modal-based authentication
- **Dashboard Access** → Protected route requiring authentication
- **User Profile** → Integrated with Clerk user data
- **Sign Out** → Proper logout functionality

### ✅ UI Integration
- **BitGuardAI Logo** → Replaced in sidebar and header
- **Dark Theme** → Consistent with your design
- **Responsive Design** → Works on all devices
- **Modal Authentication** → No page redirects, smooth UX

### ✅ Dashboard Features
- **Protected Routes** → Only authenticated users can access
- **User Data Integration** → Real user data from Clerk
- **Interactive Components** → Charts, tables, sidebar
- **Professional Design** → Security-focused interface

## How to Test

1. **Start the development server**:
   ```bash
   pnpm dev
   ```

2. **Visit the landing page** at `http://localhost:3000`

3. **Click "Connect Wallet"** → Should open Clerk sign-in modal

4. **Sign up or sign in** → Use any authentication method

5. **Access Dashboard** → Should redirect to `/dashboard` after authentication

6. **Test Sign Out** → Click user avatar → Sign out → Should return to landing page

## Troubleshooting

### Common Issues

1. **"Module not found" errors**:
   - Make sure you've installed Clerk: `pnpm add @clerk/nextjs`

2. **Authentication not working**:
   - Check your environment variables are correct
   - Ensure you're using the right keys (test vs production)

3. **Dashboard not accessible**:
   - Make sure you're signed in
   - Check the middleware is working correctly

4. **Styling issues**:
   - Clear your browser cache
   - Restart the development server

### Environment Variables Check

Make sure your `.env.local` file:
- Is in the project root (same level as `package.json`)
- Has no spaces around the `=` sign
- Has the correct key names (case-sensitive)
- Doesn't have quotes around the values

## Next Steps

1. **Customize the Dashboard** → Add your specific features
2. **Add More Protected Routes** → Create additional secure pages
3. **Customize User Experience** → Modify the authentication flow
4. **Add Role-Based Access** → Implement user roles and permissions
5. **Deploy to Production** → Set up production Clerk keys

## Support

If you encounter any issues:
1. Check the [Clerk Documentation](https://clerk.com/docs)
2. Verify your environment variables
3. Check the browser console for errors
4. Ensure all dependencies are installed correctly 