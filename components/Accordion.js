import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import 'nativewind';

const defaultProps = {
  title: 'Accordion',
  size: 'medium',
  variant: 'default',
  titleIcon: null,
  expandIcon: null,
  children: <Text className="p-4">This is accordion children and it can be anything Ex: Text, View.......</Text>,
};

const TitleIcon = ({ icon, size, color }) => {
  if (!icon) { return null; }
  return React.cloneElement(icon, { size, color });
};

const ExpandIcon = ({ icon, size, color }) => {
  if (!icon) { return null; }
  return React.cloneElement(icon, { size, color });
};

const Accordion = ({ title, size, variant, titleIcon, expandIcon, children }) => {
  const [expanded, setExpanded] = useState(false);
  // const height = useSharedValue(0);
  const rotate = useSharedValue('0deg');

  title = title || defaultProps.title;
  size = size || defaultProps.size;
  variant = variant || defaultProps.variant;
  titleIcon = titleIcon || defaultProps.titleIcon;
  expandIcon = expandIcon || defaultProps.expandIcon;
  children = children || defaultProps.children;

  const sizes = {
    small: { space: 'p-3', fontSize: 'text-sm', iconSize: 4 },
    medium: { space: 'p-4', fontSize: 'text-base', iconSize: 6 },
    large: { space: 'p-5', fontSize: 'text-lg', iconSize: 8 },
  };

  const variants = {
    default: { bg: 'bg-gray-300', text: 'text-gray-700', iconColor: '#000000' },
    brand: { bg: 'bg-brand', text: 'text-white', iconColor: '#FFFFFF' },
    primary: { bg: 'bg-blue-500', text: 'text-white', iconColor: '#FFFFFF' },
    secondary: { bg: 'bg-purple-500', text: 'text-white', iconColor: '#FFFFFF' },
    danger: { bg: 'bg-red-500', text: 'text-white', iconColor: '#FFFFFF' },
    success: { bg: 'bg-green-500', text: 'text-white', iconColor: '#FFFFFF' },
    warn: { bg: 'bg-orange-400', text: 'text-white', iconColor: '#FFFFFF' },
    cancel: { bg: 'bg-gray-200', text: 'text-gray-700', iconColor: '#FFFFFF' },
    action: { bg: 'bg-sky-200', text: 'text-blue-700', iconColor: '#FFFFFF' },
  };

  const toggleAccordion = () => {
    setExpanded(!expanded);
    // height.value = expanded ? withTiming(0) : withTiming(140);
    rotate.value = expanded ? withTiming('0deg') : withTiming('90deg');
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: expanded > 0 ? 1 : 0,
    overflow: 'hidden',
  }));

  const expandIconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: rotate.value }],
  }));

  return (
    <View className="border border-gray-300 rounded-md overflow-hidden mb-2">
      <Pressable
        className={`flex-row justify-between items-center ${sizes[size].space} ${variants[variant].bg}`}
        onPress={toggleAccordion}>
        <View className="flex-row items-center">
          {titleIcon && (
            <View className="mr-2">
              <TitleIcon icon={titleIcon} size={sizes[size].iconSize} color={variants[variant].iconColor} />
            </View>
          )}
          <Text
            className={`${variants[variant].text} ${sizes[size].fontSize} font-semibold`}>
            {title}
          </Text>
        </View>
        {expandIcon && (
          <Animated.View style={expandIconStyle}>
            <ExpandIcon icon={expandIcon} size={sizes[size].iconSize} color={variants[variant].iconColor} />
          </Animated.View>
        )}
      </Pressable>

      <Animated.View style={animatedStyle} className={`bg-white ${expanded ? 'max-h-auto' : 'h-0'} duration-300 ease-in-out`}>
        {children}
      </Animated.View>
    </View>
  );
};

export default Accordion;
