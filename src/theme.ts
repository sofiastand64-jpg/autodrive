import { useColorScheme } from 'react-native';

export const useTheme = () => {
  const isDark = useColorScheme() === 'dark';

  return {
    isDark,
    colors: {
      background: isDark ? '#121212' : '#F5F5F7',
      card: isDark ? '#1E1E1E' : '#FFFFFF',
      text: isDark ? '#FFFFFF' : '#222222',
      subtext: isDark ? '#AAAAAA' : '#888888',
      border: isDark ? '#333333' : '#EEEEEE',
      primary: '#E63329',
      hero: '#1A1A2E', // Баннер всегда тёмный
    }
  };
};
