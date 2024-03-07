import React, { ReactNode } from 'react';
import styles from './styles.module.css';
import { SvgIconComponent, WaterDrop } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: 'primary' | 'secondary' | 'tertiary';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label?: string;
  /**
   * Icon
   */
  icon?: SvgIconComponent;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'primary',
  size = 'medium',
  label,
  icon,
  ...props
}: ButtonProps) => {
  const getTypeClassName = {
    'primary': styles['tk-button--primary'],
    'secondary': styles['tk-button--secondary'],
    'tertiary': styles['tk-button--tertiary'],
  };

  const getIconSize = {
    'small': 16,
    'medium': 20,
    'large': 20,
  }

  return (
    <button
      type="button"
      className={[
        styles['tk-button'],
        styles[`tk-button--${size}`],
        getTypeClassName[type],
        (icon && label) && styles['tk-button--has-icon'],
        (icon && !label) && styles['tk-button--only-icon'],
      ].join(' ')}
      {...props}
    >
      {icon && (
        <SvgIcon
          component={icon}
          sx={{fontSize: getIconSize[size]}}
          inheritViewBox
        />
      )}
      {label && (
        <span className={styles['tk-button__label']}>{label}</span>
      )}
    </button>
  );
};
