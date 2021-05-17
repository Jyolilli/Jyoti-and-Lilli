import React, {useState} from "react";
import { useForm } from "react-hook-form";

type FormValue = {
  firstName: string;
  lastName: string;
  comment: string;
  developer: boolean;
  yearsExperience: number;
};

export const InputForm = () => {
  const { register, handleSubmit, formState: { errors} } = useForm<FormValue>();
  //gives a TS definition into the custom hook for validating all input if it is part of the form or not
 

  console.log(errors)

  // const onSubmit = handleSubmit((data) => {
  //   console.log(data)
  // });
  // firstName and lastName will have correct type
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <label htmlFor="firstName">First Name:</label>
      <input {...register("firstName", {required: "This field is required"})} id="firstName" />
      {/* pulls in all the register props with the spread operator */}
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="lastName">Last Name:</label>
      <input {...register("lastName")} id="lastName" />
      <label htmlFor="comment">Comment:</label>
      <input {...register("comment", {maxLength:{value: 4, message: "you exceeded the maximum length"}})} id="comment" />
      {errors.comment && <p>{errors.comment.message}</p>}
      <label htmlFor="developer">Are you a developer?:</label>
      <input {...register("developer")} id="developer" />
      <label htmlFor="yearsExperience">for how many years?:</label>
      <input {...register("yearsExperience", {valueAsNumber: true})} id="yearsExperience" />
      
      <button onClick = {handleSubmit((data) => {
        console.log(data);
      })}>submit</button>
      {/* <button
        type="button"
        onClick={() => {
          setValue("lastName", "luo"); // ✅
          // setValue("firstName", true); // ❌: true is not string
          //   errors.bill; // ❌: property bill does not exist
        }}
      >
        SetValue
      </button> */}
    </form>
  );
}
