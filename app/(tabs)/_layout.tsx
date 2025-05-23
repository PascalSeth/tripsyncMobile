import { Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import { HapticTab } from '../../components/HapticTab';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#9E9E9E',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <View style={{ 
            backgroundColor: 'white', 
            height: '100%',
   
          }} />
        ),
        tabBarStyle: {
          height: 80,
          borderTopWidth: 0,
          borderTopColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ 
                width: 24, 
                height: 24, 
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {focused ? (
                  <View style={{ 
                    backgroundColor: '#E8E8E8', 
                    borderRadius: 12, 
                    padding: 4,
                    width: 32,
                    height: 32,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Text style={{ fontSize: 16 }}>🏠</Text>
                  </View>
                ) : (
                  <Text style={{ fontSize: 16 }}>🏠</Text>
                )}
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ 
                width: 24, 
                height: 24, 
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {focused ? (
                  <View style={{ 
                    backgroundColor: '#E8E8E8', 
                    borderRadius: 12, 
                    padding: 4,
                    width: 32,
                    height: 32,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Text style={{ fontSize: 16 }}>💼</Text>
                  </View>
                ) : (
                  <Text style={{ fontSize: 16 }}>💼</Text>
                )}
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(discover)"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ 
              backgroundColor: '#E5E5E5',
              width: 42, 
              height: 42, 
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 5,
              marginTop: -15,
              borderWidth: 3,
              borderColor: 'white',
              borderRadius: 8,
              transform: [{ rotate: '45deg' }]
            }}>
              <View style={{ transform: [{ rotate: '-45deg' }] }}>
                <Text style={{ fontSize: 16 }}>🔎</Text>
              </View>
            </View>
          </View>
          ),
        }}
      />
      <Tabs.Screen
        name="offer"
        options={{
          title: 'Offer',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ 
                width: 24, 
                height: 24, 
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {focused ? (
                  <View style={{ 
                    backgroundColor: '#E8E8E8', 
                    borderRadius: 12, 
                    padding: 4,
                    width: 32,
                    height: 32,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Text style={{ fontSize: 16 }}>🏷️</Text>
                  </View>
                ) : (
                  <Text style={{ fontSize: 16 }}>🏷️</Text>
                )}
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ 
                width: 24, 
                height: 24, 
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {focused ? (
                  <View style={{ 
                    backgroundColor: '#E8E8E8', 
                    borderRadius: 12, 
                    padding: 4,
                    width: 32,
                    height: 32,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Text style={{ fontSize: 16 }}>👤</Text>
                  </View>
                ) : (
                  <Text style={{ fontSize: 16 }}>👤</Text>
                )}
              </View>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}