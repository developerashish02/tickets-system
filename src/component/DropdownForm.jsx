import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useAssignedTicketMutation } from "../services/ticketsApi";

const DropdownForm = ({ techTeam, ticketId, userId }) => {
  const [assignedTicket, { isLoading, isError, error }] =
    useAssignedTicketMutation();
  const validationSchema = Yup.object().shape({
    dropdown: Yup.string().required("Please select a team member"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(values, "values");
    await assignedTicket(values);
    resetForm();
    setSubmitting(false);
  };

  const initialValues = {
    dropdown: "",
    userId: userId,
    ticketId: ticketId,
  };

  if (isLoading) {
    return <h1>Loading......</h1>;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="mt-4">
            <label
              htmlFor="dropdown"
              className="block text-sm font-bold text-gray-700"
            >
              Select a team member:
            </label>
            <Field
              as="select"
              id="dropdown"
              name="dropdown"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select...</option>
              {techTeam?.map((teamMember) => (
                <option key={teamMember?.id} value={teamMember?.id}>
                  {teamMember?.username} - {teamMember?.email}
                </option>
              ))}
            </Field>
            {errors.dropdown && touched.dropdown && (
              <div className="text-red-500">{errors.dropdown}</div>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>

          {isError && error}
        </Form>
      )}
    </Formik>
  );
};

export default DropdownForm;
