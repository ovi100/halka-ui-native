import React from 'react';
import {Modal as RNModal, Text, TouchableOpacity, View} from 'react-native';
import {width} from '../utils';
import {CloseCircle} from '../icons';

const Modal = ({
  isOpen,
  isNormal = true,
  showCloseButton = true,
  children,
  modalHeader = '',
  onPress = null,
}) => {

  return (
    <RNModal
      visible={isOpen}
      animationType="fade"
      statusBarTranslucent
      transparent>
      <View className="bg-zinc-900/40 flex-1 items-center justify-center px-3">
        <View
          className={`relative ${width > 480 ? 'w-[95%]' : 'w-full'} ${
            !isNormal ? 'top-3 h-[92%]' : 'h-auto'
          } bg-white rounded-md p-5`}>
          {modalHeader && (
            <View className="modal-header flex-row items-center">
              <Text className="flex-1 text-black text-base sm:text-lg md:text-2xl text-center font-semibold">
                {modalHeader}
              </Text>
              {showCloseButton && (
                <TouchableOpacity onPress={onPress}>
                  <CloseCircle color="#f87171" />
                </TouchableOpacity>
              )}
            </View>
          )}
          <View className={`modal-content ${modalHeader ? 'mt-3' : 'mt-0'}`}>
            {children}
          </View>
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
