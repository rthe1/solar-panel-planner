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
  height: 10,
  width: 10,
  margin: 2,
}));

export default function ResponsiveStack() {

  const { roofLength, width } = useContext(FormDisplayContext);

  let rows = Math.floor(width / 31.5) 

  let row = [];

  let columns = Math.floor(roofLength / 31.5) - 1

  let column = [];


  for (let i = 0; i < columns; i++) {
    column.push(<div><Item>*</Item></div>)
  }

  for (let i = 0; i < rows; i++) {
    row.push(<div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {column}
      </Stack>
    </div>)
  }

  return (<div>
    <div>{row}</div>
  </div>);
}
