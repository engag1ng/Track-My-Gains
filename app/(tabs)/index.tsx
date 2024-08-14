import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet, Platform, Pressable, Text, ScrollView, View} from 'react-native';

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
        <View style={{flexDirection: 'row'}}>
          <ThemedText style={styles.heading}>Templates</ThemedText>
          <Pressable style={{width: 25, height: 25, backgroundColor: '#A1CEDC', borderRadius: 4, left: 200}}>
            <Ionicons name='add' size={25}/>
          </Pressable>
        </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  headerImage: {
    color: '#0A7EA4',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  heading: {
    flexDirection: 'row',
    gap: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
