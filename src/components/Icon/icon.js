import React from 'react';
import { iconsList } from './icons-list';

export const Icon = ({ name }) => {
  const IconComponent = iconsList[name];
  return <IconComponent />;
};
