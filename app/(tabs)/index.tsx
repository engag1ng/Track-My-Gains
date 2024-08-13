import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet, Platform, Pressable, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Ionicons size={310} name="heart" style={styles.headerImage}/>}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome back *Insert Username*!</ThemedText>
        <HelloWave />
      </ThemedView>
      <Pressable style={{width: 200, height: 32, backgroundColor: '#A1CEDC', borderRadius: 4}}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'black'}}>Start Empty Workout</Text>
      </Pressable>
      <ThemedView>
        <ThemedText style={styles.heading}>Templates</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerImage: {
    color: '#0A7EA4',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
