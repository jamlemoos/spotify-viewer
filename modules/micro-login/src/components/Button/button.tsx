import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';

export enum ButtonVariant {
  PRIMARY = 'primary',
  GHOST = 'ghost',
}

export interface CustomButtonProps extends MUIButtonProps {
  variantType: ButtonVariant;
  icon?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variantType,
  size = 'medium',
  icon,
  children,
  ...props
}) => {
  const buttonStyles = {
    [ButtonVariant.PRIMARY]: {
      backgroundColor: '#57b660',
      color: '#000000',
      '&:hover': {
        backgroundColor: '#6fd174',
      },
    },
    [ButtonVariant.GHOST]: {
      backgroundColor: 'transparent',
      color: '#ffffff',
      border: '1px solid #ffffff',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
    },
  };

  const sizeStyles = {
    small: {
      borderRadius: '8px',
      width: '100px',
      fontSize: '12px',
      padding: '6px 12px',
      fontWeight: '400',
    },
    medium: {
      borderRadius: '25px',
      width: '180px',
      fontSize: '18px',
      padding: '10px 20px',
      fontWeight: '700',
    },
    large: {
      borderRadius: '25px',
      width: '250px',
      fontSize: '18px',
      padding: '10px 20px',
      fontWeight: '700',
    },
  };

  const typographyStyles = {
    fontFamily: 'Rubik, sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    textTransform: 'capitalize',
  };

  return (
    <Button
      startIcon={icon}
      sx={{
        ...sizeStyles[size || 'medium'],
        ...buttonStyles[variantType],
        ...typographyStyles,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
