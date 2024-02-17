import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  PanResponder,
  Animated,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';

const TestScreen = () => {
  const [matched, setMatched] = useState(false);
  const [dropZonePosition, setDropZonePosition] = useState({x: 150, y: 200});
  const [pan] = useState(new Animated.ValueXY({x: 0, y: 0}));
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !matched,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
      onPanResponderRelease: () => {
        const match = isMatched();
        setMatched(match);
        if (!match) {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  const isMatched = () => {
    // Implement matching logic for each shape
    if (
      // Check if draggable shape matches circle
      // Example: if the draggable shape is inside the circle
      // Implement similar checks for other shapes
      draggableShapeIsInsideCircle(pan.x._value, pan.y._value)
    ) {
      return true;
    }
    return false;
  };

  const updateDropZonePosition = layout => {
    const {x, y} = layout;
    setDropZonePosition({x, y});
  };

  const resetScreen = () => {
    setMatched(false);
    Animated.spring(pan, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
    }).start();
  };

  // Define function to check if draggable shape is inside circle
  const draggableShapeIsInsideCircle = (x, y) => {
    // Calculate distance between draggable shape and circle center
    const distanceSquared =
      Math.pow(x - dropZonePosition.x, 2) + Math.pow(y - dropZonePosition.y, 2);
    const radiusSquared = Math.pow(50, 2); // Radius of circle (adjust as needed)

    // Check if distance is less than radius (shape is inside circle)
    return distanceSquared <= radiusSquared;
  };

  // Define other shape matching functions similarly

  return (
    <ImageBackground
      source={require('../tinytot1/assets/bg.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        {/* Render your actual shapes and shaded areas here */}
        {/* Example: */}
        <View
          style={[
            styles.circle,
            matched ? styles.matched : null,
            {left: dropZonePosition.x, top: dropZonePosition.y},
          ]}
          onLayout={event => updateDropZonePosition(event.nativeEvent.layout)}
        />
        {/* Render other shapes and shaded areas similarly */}

        {/* Draggable shape */}
        <Animated.View
          style={[
            styles.draggableShape,
            pan.getLayout(),
            matched ? styles.matched : null,
          ]}
          {...(matched ? null : panResponder.panHandlers)}
        />

        {/* Reset button */}
        <TouchableOpacity style={styles.button} onPress={resetScreen}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Example shape styles (replace with your shapes)
  circle: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 0, 0, 0.3)', // Shaded blue color with 30% opacity
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 50,
    position: 'absolute',
  },

  draggableShape: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
  },
  matched: {
    backgroundColor: 'green',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default TestScreen;
