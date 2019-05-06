import React from 'react';
import useToggle from '../hooks/useToggle';

const ToggleSwitch = () => {
  const [isEnabled, setEnabled] = useToggle(false);
  return [isEnabled, setEnabled];
}