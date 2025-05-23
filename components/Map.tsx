import Mapbox from '@rnmapbox/maps';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { getCurrentLocation } from '../utils/location';

Mapbox.setAccessToken(process.env.MAPBOX_ACCESS_TOKEN!);

interface MapProps {
  onLocationSelect?: (coords: { latitude: number; longitude: number }) => void;
}

export default function Map({ onLocationSelect }: MapProps) {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    loadInitialLocation();
  }, []);

  const loadInitialLocation = async () => {
    try {
      const currentLocation = await getCurrentLocation();
      setLocation(currentLocation);
    } catch (error) {
      console.error('Error loading location:', error);
    }
  };

  if (!location) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map}>
        <Mapbox.Camera
          zoomLevel={14}
          centerCoordinate={[location.longitude, location.latitude]}
        />
        <Mapbox.PointAnnotation
          id="userLocation"
          coordinate={[location.longitude, location.latitude]}
        />
      </Mapbox.MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});