import React, { ReactNode } from 'react'

export interface AlertProps {
  isVisible ?: boolean;
  title ?: string;
  message ?: string;
  children ?: ReactNode;
  setTheme ?: "system" | "default";
  onBackdropPress ?: () => void;
}
declare const Alert: React.FC<AlertProps>

export default Alert