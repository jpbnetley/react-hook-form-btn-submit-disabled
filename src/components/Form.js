import React from "react";
import { useForm } from "react-hook-form";
import { valid, inValid } from '../api/simulate'

export default function Form() {
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  
  const onSubmitValid = async data => {
    try {
    console.log('clicked')
    const res = await valid(data)
    console.log("res", res);
    } catch (e) {
      console.error(e)
    }
  }

  const onSubmitInvalid = async data => {
    try {
    console.log('clicked')
    const res = await inValid()
    console.log("res", res);
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmitValid" */}
      <form onSubmit={handleSubmit(onSubmitValid)}>
      <h1>Valid submit</h1>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input  defaultValue="test" {...register("exampleRequired")} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" disabled={isSubmitting}/>
    </form>
    
    <form onSubmit={handleSubmit(onSubmitInvalid)}>
        <h1>Invalid submit</h1>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue="test" {  ...register("exampleRequired")} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" disabled={isSubmitting}/>
    </form>
    
    
    </div>

  );
}