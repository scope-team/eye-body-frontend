import { Dimensions, Platform } from 'react-native';
import SafeArea from 'react-native-safe-area';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const DEFAULT_PAADING = 80;

const Layout = {
  window: {
    width: WIDTH,
    height: HEIGHT,
  },

  screen: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },

  insets: {
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
  },

  responsive: number => (WIDTH / 375) * number,
};

export function initLayoutInsets() {
  SafeArea.getSafeAreaInsetsForRootView().then(res => {
    if (res && res.safeAreaInsets) {
      Layout.insets = res.safeAreaInsets;
    }
  });
}

export default Layout;
