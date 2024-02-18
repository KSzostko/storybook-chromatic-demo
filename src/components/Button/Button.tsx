import { Button as MuiButton, ButtonProps } from '@mui/material';

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <MuiButton {...rest}>
      {children}
    </MuiButton>
  );
}
