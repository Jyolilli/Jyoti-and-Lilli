import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../App";

type FormValue = {
  firstName: string;
  lastName: string;
  password: string;
  comment: string;
  developer: boolean;
  yearsExperience: number;
};

export const InputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    //gives a TS definition into the custom hook for validating all input if it is part of the form or not
    defaultValues: {
      firstName: "Lilli",
      lastName: "Baaske",
      password: "**myP@ssworD",
      comment: "forms: sigh",
      developer: true,
      yearsExperience: 2,
    },
  });
  console.log(errors);

  const [submitting, setSubmitting] = useState<boolean>(false);

  // const handleFormSubmit = (data: FormValue) => {
  //   setSubmitting(true);
  //   console.log({ data });
  // };
  /*
  const BookTrips: React.FC<BookTripsProps> = ({ cartItems }) => {
    const [bookTrips, { data }] = useMutation<BookTripsTypes.BookTrips, BookTripsTypes.BookTripsVariables>(
      BOOK_TRIPS,
      {
        variables: { name: cartItems },
      }
    );
*/
  return (
    <form
      onSubmit={handleSubmit(() => {
        setSubmitting(true);
      })}
    >
      <label htmlFor="firstName">First Name:</label>
      <input
        {...register("firstName", { required: "This field is required" })}
        id="firstName"
      />
      {/* pulls in all the register props with the spread operator */}
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="lastName">Last Name:</label>
      <input {...register("lastName")} id="lastName" />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        {...register("password", {
          minLength: { value: 8, message: "must be minimum of 8 char" },
          // validate: (value) => {
          //   return [/[a-z]/, /[A-Z]/, /[0-9]/, /[â-zA-Z0-9]/].every((pattern) =>
          //     pattern.test(value)
          //   );
          // },
        })}
        id="password"
      />
      <label htmlFor="comment">Comment:</label>
      <input
        {...register("comment", {
          maxLength: { value: 40, message: "you exceeded the maximum length" },
        })}
        id="comment"
      />
      {errors.comment && <p>{errors.comment.message}</p>}
      <label htmlFor="developer">Are you a developer?:</label>
      <input type="checkbox" {...register("developer")} id="developer" />
      <label htmlFor="yearsExperience">for how many years?:</label>
      <input
        {...register("yearsExperience", { valueAsNumber: true })}
        id="yearsExperience"
      />
      <button
        disabled={submitting}
        onClick={handleSubmit((data) => {
          console.log(data);
        })}
      >
        submit
      </button>
    </form>
  );
};
