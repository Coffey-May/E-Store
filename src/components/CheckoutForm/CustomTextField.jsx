import React,{memo} from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


// const TextField = lazy(() => import('@material-ui/core/TextField'));
// const Grid = lazy(() => import('@material-ui/core/Grid'));

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
{/* <Controller
 defaultValue={''}
 error={isError}
          control={control}
	 name={name}
	render={({ field }) => <TextField fullWidth label={label} required />}
      /> */}
        <Controller
        as={TextField}
        name={name}
        control={control}
        label={label}
        fullWidth
        defaultValue={''}
        required={required}
        error={isError}
      />
   
   </Grid>
  );
}

export default memo(FormInput);

