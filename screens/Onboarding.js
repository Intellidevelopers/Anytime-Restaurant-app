import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';
import colors from '../components/colors';

const { width } = Dimensions.get('window');

const onboardingData = [
  {
    id: '1',
    title: 'Place Order',
    description: 'Find your favorite dishes and place an order in just a few taps!',
    image: require('../assets/images/pana.png'),
  },
  {
    id: '2',
    title: 'Fast Delivery',
    description: 'Get your food delivered to your doorstep quickly and safely!',
    image: require('../assets/images/amico.png'),
  },
  {
    id: '3',
    title: 'Enjoy Your Meal',
    description: 'Sit back, relax, and enjoy your delicious meal!',
    image: require('../assets/images/dinner.png'),
  },
];

const Onboarding = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  const handleContinue = () => {
    if (flatListRef.current) {
      const nextSlideIndex = activeSlide + 1;
      if (nextSlideIndex < onboardingData.length) {
        flatListRef.current.scrollToOffset({ offset: nextSlideIndex * width, animated: true });
        setActiveSlide(nextSlideIndex); // Update activeSlide after scroll
      }
    }
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setActiveSlide(index); // Update activeSlide when user scrolls manually
        }}
      />
      <View style={styles.pagination}>
        {onboardingData.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const dotScale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.5, 0.8],
            extrapolate: 'clamp',
          });
          const dotOpacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  transform: [{ scale: dotScale }],
                  opacity: dotOpacity,
                },
              ]}
            />
          );
        })}
      </View>
      {activeSlide === onboardingData.length - 1 ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')} // Replace with navigation logic
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.navigationButtons}>
          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.skip}
            onPress={() => navigation.navigate('Login')} // Replace with navigation logic
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    slide: {
      width,
      alignItems: 'center',
      justifyContent: 'center', // Ensures vertical centering
      paddingHorizontal: 20,
    },
    image: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 24,
      fontWeight: '900',
      marginVertical: 20,
      color: '#333',
      textAlign: 'center', // Ensures title is centered
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      color: '#666',
      paddingHorizontal: 10,
      fontWeight: '500',
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
      gap: 5,
    },
    dot: {
      width: 20,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#FF6600',
      marginHorizontal: 5,
    },
    navigationButtons: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: '#FF6600',
      paddingVertical: 15,
      paddingHorizontal: 50,
      borderRadius: 15,
      marginVertical: 10,
      marginBottom: 40,
      width: '95%',
      alignItems: 'center',
      alignSelf: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    skip: {
      marginTop: -10,
      marginBottom: 40,
    },
    skipText: {
      color: colors.text,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  