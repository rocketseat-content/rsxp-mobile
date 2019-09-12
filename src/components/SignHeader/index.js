import React, { useState, useEffect } from 'react';
import { Animated, Dimensions, Platform, Keyboard } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const { height, width } = Dimensions.get('window');

import { Container, Mask, Logo, Rocket } from './styles';

export default function SignHeader() {
  const [keyboardShow, setKeyboardShow] = useState(false);

  const [mainPercent] = useState(new Animated.Value(1));
  const [auxPercent] = useState(new Animated.Value(0));
  const [rocketPercent] = useState(new Animated.Value(1));

  const keyboardListener =
    Platform.OS === 'ios'
      ? {
          show: 'keyboardWillShow',
          hide: 'keyboardWillHide'
        }
      : {
          show: 'keyboardDidShow',
          hide: 'keyboardDidHide'
        };

  useEffect(() => {
    Keyboard.addListener(keyboardListener.show, () => setKeyboardShow(true));
    Keyboard.addListener(keyboardListener.hide, () => setKeyboardShow(false));

    return () => {
      Keyboard.removeAllListeners(keyboardListener.show, () =>
        setKeyboardShow(true)
      );
      Keyboard.removeAllListeners(keyboardListener.hide, () =>
        setKeyboardShow(false)
      );
    };
  }, []);

  useEffect(() => {
    if (keyboardShow) {
      Animated.timing(mainPercent, {
        toValue: 0.8,
        duration: 300
      }).start();

      Animated.timing(auxPercent, {
        toValue: 1,
        duration: 300
      }).start();

      Animated.timing(rocketPercent, {
        toValue: 0,
        duration: 300
      }).start();
    } else {
      Animated.timing(mainPercent, {
        toValue: 1,
        duration: 300
      }).start();

      Animated.timing(auxPercent, {
        toValue: 0,
        duration: 300
      }).start();

      Animated.timing(rocketPercent, {
        toValue: 1,
        duration: 300
      }).start();
    }
  }, [keyboardShow]);

  return (
    <Container
      style={{
        flex: mainPercent
      }}
    >
      <Mask
        style={{
          marginTop: Animated.multiply(auxPercent, -70),
          top: -100 + getStatusBarHeight()
        }}
      />
      <Logo
        style={{
          width: Animated.multiply(mainPercent, 150),
          height: Animated.multiply(mainPercent, 80),

          left: Animated.multiply(mainPercent, width * 0.14),
          top: Animated.multiply(mainPercent, height * 0.13)
        }}
      />
      <Rocket
        style={{
          top: Animated.add(
            Animated.multiply(rocketPercent, 50),
            getStatusBarHeight() + 15
          ),
          width: Animated.multiply(mainPercent, 180),
          height: Animated.multiply(mainPercent, 260)
        }}
      />
    </Container>
  );
}
