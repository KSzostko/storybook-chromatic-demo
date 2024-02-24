import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#fff',
}));