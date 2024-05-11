import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import {
  useAddReplyToTicketMutation,
  useGetUserTicketQuery,
  useMarkAsResolvedMutation,
} from "../services/ticketsApi";
import useGetUser from "../Hooks/useGetUser";

const ReplayForm = ({ moreInfo }) => {
  const { isResolved, id } = moreInfo;
  const [addReplyToTicket, { isLoading }] = useAddReplyToTicketMutation();
  const user = useGetUser();

  console.log(user, "user");

  const [markAsResolved] = useMarkAsResolvedMutation();

  const initialValues = {
    file: "",
    description: "",
    ticketId: id,
    date: new Date().toISOString().substr(0, 10),
    userName: user?.username,
  };

  const validationSchema = Yup.object({
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("calling component");
    const { userId } = moreInfo;
    const reply = { userId, ...values };
    await addReplyToTicket(reply);
    setSubmitting(false);
    resetForm();
  };

  const handleResolved = () => {
    markAsResolved(id);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="my-2">
            <label htmlFor="description">Issue Description</label>
            <Field
              as="textarea"
              name="description"
              className="py-3 px-3 w-full border border-gray-400 rounded-md my-2"
              placeholder="Describe the issue"
            />
            <ErrorMessage name="description" />
          </div>
          <div className="my-2">
            <label htmlFor="file">Upload File</label>
            <Field
              type="file"
              name="file"
              accept=".pdf,.doc,.docx,.txt"
              className="py-3 px-3 w-full border border-gray-400 rounded-md my-2"
              placeholder="customer email"
            />
            <ErrorMessage name="file" />
          </div>

          <div>
            {!isResolved && (
              <button
                onClick={handleResolved}
                type="test"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Mark as resolved
                <i className="fa-solid fa-arrow-right-to-bracket ml-2"></i>
              </button>
            )}
            <button
              type="submit"
              className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Replay
              <i className="fa-solid fa-arrow-right-to-bracket ml-2"></i>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ReplayForm;
