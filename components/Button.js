import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

const defaultProps = {
  size: 'medium',
  variant: 'default',
  disabled: false,
  loading: false,
  text: 'Button',
  onPress: null,
  icon: null,
};

const Button = ({
  size,
  variant,
  disabled,
  loading,
  text,
  onPress,
  icon,
}) => {
  size = size || defaultProps.size;
  variant = variant || defaultProps.variant;
  disabled = disabled || defaultProps.disabled;
  loading = loading || defaultProps.loading;
  text = text || defaultProps.text;
  icon = icon || defaultProps.icon;
  text = text || defaultProps.text;
  icon = icon || defaultProps.icon;
  text = text || defaultProps.text;
  onPress = onPress || defaultProps.onPress;

  const sizes = {
    small: { space: 'p-3', fontSize: 'text-sm md:text-base', iconSize: 4 },
    medium: { space: 'p-4', fontSize: 'text-base md:text-lg', iconSize: 6 },
    large: { space: 'p-5', fontSize: 'text-lg md:text-xl', iconSize: 8 },
  };

  const variants = {
    default: { bg: 'bg-gray-300', text: 'text-gray-700', iconColor: '#000000' },
    brand: { bg: 'bg-brand', text: 'text-white', iconColor: '#FFFFFF' },
    primary: { bg: 'bg-blue-500', text: 'text-white', iconColor: '#FFFFFF' },
    secondary: { bg: 'bg-purple-500', text: 'text-white', iconColor: '#FFFFFF' },
    danger: { bg: 'bg-red-500', text: 'text-white', iconColor: '#FFFFFF' },
    success: { bg: 'bg-green-500', text: 'text-white', iconColor: '#FFFFFF' },
    cancel: { bg: 'bg-gray-200', text: 'text-gray-700', iconColor: '#FFFFFF' },
    action: { bg: 'bg-sky-200', text: 'text-blue-700', iconColor: '#FFFFFF' },
  };

  const Wrapper = !loading && !disabled ? TouchableOpacity : View;

  return (
    <Wrapper
      onPress={onPress}
      disabled={disabled}
      className={`flex flex-row items-center justify-center rounded-md
        ${sizes[size].space} ${variants[variant].bg} ${disabled && 'opacity-50'}`}
    >
      {loading ? (
        <>
          <ActivityIndicator size="small" color="#FFF" />
          {text && <Text className={`${sizes[size].fontSize} ${variants[variant].text} font-semibold ml-2`}>{text}</Text>}
        </>
      ) : (
        <View className="flex flex-row items-center">
          {icon && <View className="mr-2">{icon}</View>}
          <Text className={`${sizes[size].fontSize} ${variants[variant].text} font-semibold`}>{text}</Text>
        </View>
      )}
    </Wrapper>
  );
};

export default Button;
