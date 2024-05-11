import { Alert as MuiAlert, AlertProps } from '@mui/material';

export function Alert(props: AlertProps) {
  return (
    <MuiAlert {...props} />
  );
}