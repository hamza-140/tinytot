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
  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const handlePanResponderMove = (event, gestureState) => {
    console.log('Current X coordinate:', gestureState.moveX);
    console.log('Current Y coordinate:', gestureState.moveY);

    Animated.event(
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
    )(event, gestureState);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: handlePanResponderMove,
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
    const distanceSquared =
      Math.pow(pan.x._value - dropZonePosition.x, 2) +
      Math.pow(pan.y._value - dropZonePosition.y, 2);
    const radiusSquared = Math.pow(50, 2);

    return distanceSquared <= radiusSquared;
  };

  const updateDropZonePosition = layout => {
    const {x, y} = layout;
    setDropZonePosition({x, y});
  };

  const resetScreen = () => {
    setMatched(false);
    pan.setValue({x: 0, y: 0});
  };

  return (
    <ImageBackground
      source={require('../tinytot-master/assets/bg.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <View
          style={[
            styles.circle,
            matched ? styles.matched : null,
            {left: dropZonePosition.x, top: dropZonePosition.y},
          ]}
          onLayout={event => updateDropZonePosition(event.nativeEvent.layout)}
        />

        <Animated.View
          style={[
            styles.draggableCircle,
            pan.getLayout(),
            matched ? styles.matched : null,
          ]}
          {...panResponder.panHandlers}
        />

        <TouchableOpacity style={styles.button} onPress={resetScreen}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      //{' '}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    position: 'relative',
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 50,
    position: 'absolute',
  },
  draggableCircle: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 50,
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
