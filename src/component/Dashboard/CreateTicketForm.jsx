import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  "ticket-name": "",
  priority: "low",
  file: null,
  description: "",
  date: new Date().toISOString().substr(0, 10), // Calculate today's date
};

const validationSchema = Yup.object({
  "ticket-name": Yup.string().required("Ticket name is required"),
  priority: Yup.string().required("Priority status is required"),
  file: Yup.mixed().notRequired(),
  description: Yup.string().required("Description is required"),
  date: Yup.date().required("Date is required"),
});

const CreateTicketForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Handle form submission logic here
    console.log("Form values:", values);
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
            Create Ticket
            <i className="fa-solid fa-arrow-right-to-bracket ml-2"></i>
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateTicketForm;
