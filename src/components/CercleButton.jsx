import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
import { AntDesign } from '@expo/vector-icons';

export default function CercleButton(props) {
  // eslint-disable-next-line react/prop-types
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <AntDesign name={name} size={32} color="white" />
    </TouchableOpacity>
  );
}

CercleButton.prototype = {
  children: string.isRequired,
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CercleButton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8, // iosのみ対応
    elevation: 8, // androidのみ対応
  },

  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
