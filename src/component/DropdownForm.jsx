import React from "react";
import { Field, Form, Formik } from "formik";

const DropdownForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={{ dropdown: "" }} onSubmit={onSubmit}>
      <Form>
        <div className="mt-4">
          <label
            htmlFor="dropdown"
            className="block text-sm font-medium text-gray-700"
          >
            Select an option:
          </label>
          <Field
            as="select"
            id="dropdown"
            name="dropdown"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Field>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default DropdownForm;
