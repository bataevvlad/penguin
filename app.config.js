module.exports = {
  expo: {
    name: 'penguin',
    slug: 'penguin',
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    version: require('./package.json').version,
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'penguin',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#20242D',
    },
    ios: {
      config: {
        usesNonExemptEncryption: false,
      },
      supportsTablet: true,
      bundleIdentifier: 'com.penguin',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.penguin',
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-font',
        {
          fonts: [
            'node_modules/@penguin/core/src/styles/icons/font/assets/fonts',
            'node_modules/@expo-google-fonts/inter',
          ],
        },
      ],
    ],
    experiments: {
      reactCompiler: false,
      typedRoutes: false,
    },
    extra: {
      router: {
        origin: false,
      },
    },
    owner: 'penguin',
    runtimeVersion: {
      policy: 'appVersion',
    },
  },
};
