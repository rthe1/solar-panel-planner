import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


import { FormDisplayContext } from '../context/FormDisplayContext';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 50,
  width: 50,
  margin: 2,
}));

export default function ResponsiveStack() {

  const { roofLength, width } = useContext(FormDisplayContext);

  if (roofLength >= 200 && width >= 200) {
    return (
      <div>
        STATS FOR 200 X 200
      </div>
    )
  }


  if (roofLength >= 100 && width >= 100) {
    return (
      <div>
        STATS FOR 100 X 100
      </div>
    )
  }





  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}
