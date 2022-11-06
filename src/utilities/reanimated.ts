const {
  Easing: EasingV1,
  EasingNode: EasingV2,
} = require('react-native-reanimated');

export const Easing = EasingV2 || EasingV1;

const {
  interpolateNode: interpolateV1,
  interpolateNode: interpolateV2,
} = require('react-native-reanimated');

export const interpolateNode = interpolateV2 || interpolateV1;
