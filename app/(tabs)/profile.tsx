import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Ionicons size={310} name="home" style={styles.headerImage}/>}>
      <ThemedView style={styles.titleContainer}>
        <Image source={{ uri:'https://reactnative.dev/img/tiny_logo.png' }} style={{width: 50, height: 50}} />
        <ThemedText type="title">*Insert Username*</ThemedText>
      </ThemedView>
      <ThemedText>Started on *Insert Date*.</ThemedText>
      <ThemedText>Completed workouts: *Insert number*</ThemedText>
      <ThemedText>Your strongest exercise: *Insert exercise*; PR: *Insert pr weight*</ThemedText>
      <ThemedText>Last Month:</ThemedText>
      <Image source={require('../../Calendar Mockup.png')} style={{width: 330, height: 210}} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#0A7EA4',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
