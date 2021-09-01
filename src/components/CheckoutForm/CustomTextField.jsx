import React,{lazy,Suspense} from 'react';
import { useFormContext, Controller } from 'react-hook-form';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';


const TextField = lazy(() => import('@material-ui/core/TextField'));
const Grid = lazy(() => import('@material-ui/core/Grid'));

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Suspense fallback={'loading...'}>
    <Grid item xs={12} sm={6}>
    <Controller 
      render={({ field }) =>
    <TextField {...field}
      label={label} 
      fullWidth  
      required/>}
      control={control}      
      name={name}
      defaultValue={''}
      error={isError}
  />
{/* 
      <Controller
        defaultValue={''}
        as={TextField}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        error={isError}
      /> */}
   </Grid>
    </Suspense>
  );
}

export default FormInput;