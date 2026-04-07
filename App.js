import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'; 

// --- IMPORT TẤT CẢ MÀN HÌNH ---
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import SignInScreen from './screens/SignInScreen';
import NumberScreen from './screens/NumberScreen';
import VerificationScreen from './screens/VerificationScreen';
import SelectLocationScreen from './screens/SelectLocationScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ExploreScreen from './screens/ExploreScreen';
import BeveragesScreen from './screens/BeveragesScreen';
import CartScreen from './screens/CartScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import SearchScreen from './screens/SearchScreen';
import FilterScreen from './screens/FilterScreen';
import AccountScreen from './screens/AccountScreen'; // Đảm bảo bạn đã tạo file này

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// --- 1. ĐỊNH NGHĨA THANH MENU DƯỚI CÙNG (BOTTOM TAB) ---
function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#53B175',
        tabBarInactiveTintColor: '#181725',
        tabBarStyle: { height: 70, paddingBottom: 10 },
      }}
    >
      <Tab.Screen 
        name="Shop" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({color}) => <Entypo name="shop" size={24} color={color} /> }}
      />
      
      <Tab.Screen 
        name="Explore" 
        component={ExploreScreen} 
        options={{ tabBarIcon: ({color}) => <Feather name="search" size={24} color={color} /> }}
      />

      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ tabBarIcon: ({color}) => <Ionicons name="cart-outline" size={26} color={color} /> }}
      />

      <Tab.Screen 
        name="Favourite" 
        component={FavoriteScreen} 
        options={{ tabBarIcon: ({color}) => <Ionicons name="heart-outline" size={26} color={color} /> }}
      />

      <Tab.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{ tabBarIcon: ({color}) => <Feather name="user" size={24} color={color} /> }}
      />
    </Tab.Navigator>
  );
}

// --- 2. LUỒNG ĐI CHÍNH CỦA APP (STACK NAVIGATION) ---
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        {/* Nhóm 1: Auth Flow (Luồng xác thực) */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Number" component={NumberScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        
        {/* Nhóm 2: Main App (5 Tab chính) */}
        <Stack.Screen name="MainTab" component={MainTab} /> 
        
        {/* Nhóm 3: Detail & Listing Flow (Màn hình con/chi tiết) */}
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Beverages" component={BeveragesScreen} /> 
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Filters" component={FilterScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}