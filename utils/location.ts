import * as Location from 'expo-location';

export const getCurrentLocation = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      throw new Error('Location permission denied');
    }

    const location = await Location.getCurrentPositionAsync({});
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  } catch (error) {
    console.error('Error getting location:', error);
    throw error;
  }
};

export const reverseGeocode = async (latitude: number, longitude: number) => {
  try {
    const result = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    if (result.length > 0) {
      const address = result[0];
      return {
        street: address.street,
        city: address.city,
        region: address.region,
        country: address.country,
        formattedAddress: `${address.street}, ${address.city}, ${address.region}`,
      };
    }
    return null;
  } catch (error) {
    console.error('Error reverse geocoding:', error);
    throw error;
  }
};