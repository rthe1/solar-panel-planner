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

  let tiles = Math.floor(roofLength/31.5) * Math.floor(width/31.5) 
  tiles = tiles - Math.floor(width/31.5)
  
  return (
    <div>
      <Stack>
      {tiles}
      </Stack>
    </div>
  );
}
