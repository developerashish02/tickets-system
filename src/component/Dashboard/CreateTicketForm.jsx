import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  useCreateTicketMutation,
  useGetUsersTicketsQuery,
} from "../../services/ticketsApi";
import useGetUser from "../../Hooks/useGetUser";

const validationSchema = Yup.object({
  "ticket-name": Yup.string().required("Ticket name is required"),
  priority: Yup.string().required("Priority status is required"),
  description: Yup.string().required("Description is required"),
  date: Yup.date().required("Date is required"),
  userId: Yup.string().required("user id is required"),
});

const CreateTicketForm = () => {
  const user = useGetUser();

  const initialValues = {
    "ticket-name": "",
    priority: "low",
    file: "",
    description: "",
    date: new Date().toISOString().substr(0, 10),
    userId: user?.data?.id || user?.id,
  };
  console.log(user, "user details");
  const [createTicket, { isError, isSuccess, data, isLoading }] =
    useCreateTicketMutation();
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("Form values:", values);
    await createTicket(values);
    console.log(data, "Api data");
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className="bg-white m-4 px-8 py-6 rounded-md shadow-lg ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="flex gap-4">
            <div className="my-2 w-6/12">
              <label htmlFor="ticket-name">Ticket Name</label>
              <br />
              <Field
                type="text"
                name="ticket-name"
                className="py-3 px-3  border border-gray-400 rounded-md my-2 w-full"
                placeholder="Type ticket name"
              />
              <ErrorMessage
                name="ticket-name"
                className="text-red-500 font-bold"
              />
            </div>
            <div className="my-2 w-6/12">
              <label htmlFor="email">Priority Status</label>
              <br />
              <Field
                as="select"
                name="priority"
                className="py-3 px-3  border border-gray-400 rounded-md my-2 w-full"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Field>
              <ErrorMessage name="priority" />
            </div>
          </div>
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
          <button
            type="submit"
            className="py-3 px-2 bg-[#FAB005] font-[Poppins] text-base font-semibold rounded-xl border-2 border-black border-b-4 "
          >
            {isLoading ? "Create Ticket..." : "Create Ticket"}
            <i className="fa-solid fa-arrow-right-to-bracket ml-2"></i>
          </button>
          {isError && <p>Something went wrong</p>}
        </Form>
      </Formik>
    </div>
  );
};

export default CreateTicketForm;
