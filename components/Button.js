import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = ({
  size = 'medium',
  variant = 'default',
  text = 'Button text',
  brandColor = null,
  onPress = null,
  icon = null,
  disabled = false,
  loading = false,
}) => {
  const sizes = {
    small: { space: 10, fontSize: 14, iconSize: 4 },
    medium: { space: 14, fontSize: 16, iconSize: 6 },
    large: { space: 18, fontSize: 18, iconSize: 8 },
  };

  let variants = {
    default: { bg: '#d1d5db', text: '#1f2937', iconColor: 'black' },
    brand: { bg: '#4f46e5', text: 'white', iconColor: 'white' },
    primary: { bg: '#3b82f6', text: 'white', iconColor: 'white' },
    secondary: { bg: '#a855f7', text: 'white', iconColor: 'white' },
    danger: { bg: '#ef4444', text: 'white', iconColor: 'white' },
    success: { bg: '#22c55e', text: 'white', iconColor: 'white' },
    warn: { bg: '#fb923c', text: 'white', iconColor: 'white' },
    cancel: { bg: '#e5e7eb', text: '#374151', iconColor: 'white' },
    action: { bg: '#bae6fd', text: '#1d4ed8', iconColor: 'white' },
  };

  if (variant === 'brand' && brandColor) {
    variants[variant].bg = brandColor;
  }

  const Wrapper = !loading && !disabled ? TouchableOpacity : View;

  // Dynamic styles based on props
  const getDynamicContainerStyles = (s, v, d) => {
    return {
      padding: sizes[s].space,
      backgroundColor: variants[v].bg,
      opacity: d ? 0.5 : 1,
    };
  };

  const getDynamicTextStyles = (s, v) => {
    return {
      color: variants[v].text,
      fontSize: sizes[s].fontSize,
    };
  };

  const dynamicContainerStyles = getDynamicContainerStyles(size, variant, disabled);
  const dynamicTextStyles = getDynamicTextStyles(size, variant);

  return (
    <Wrapper
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, dynamicContainerStyles]}
    >
      {loading ? (
        <>
          <ActivityIndicator size="small" color="#FFF" />
          {text && <Text style={[styles.loadingText, dynamicTextStyles]}>{text}</Text>}
        </>
      ) : (
        <View style={styles.buttonContainer}>
          {icon && <View style={styles.buttonIcon}>{icon}</View>}
          <Text style={[styles.buttonText, dynamicTextStyles]}>{text}</Text>
        </View>
      )}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  loadingText: {
    fontWeight: 'semibold',
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    fontWeight: 'semibold',
  },
});

export default Button;