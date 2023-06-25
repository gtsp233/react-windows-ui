import React, { ReactNode } from 'react'

export interface NavPageContainerProps {
  animateTransition ?: boolean;
  hasPadding ?: boolean;
  overscroll ?: boolean;
  children ?: ReactNode;
}
declare const NavPageContainer: React.FC<NavPageContainerProps>

export default NavPageContainer