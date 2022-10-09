import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container } from './styles';

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  const { COLORS } = useTheme();

  return <Container placeholderTextColor={COLORS.GRAY_300} {...rest} />;
}
