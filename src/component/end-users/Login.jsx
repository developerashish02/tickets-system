// import simile from "../../assets/img/smiling,png";
import { initialValues } from "../../utils/constants";
import { useFormik } from "formik";
import { validationSchema } from "../../utils/validations";
import { useState } from "react";
import { useSignUpMutation } from "../../services/signUpApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [createUser, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      if (!signIn) {
        const user = await createUser(values);
        const userString = JSON.stringify(user);
        localStorage.setItem("user", userString);
        resetForm();
        setSubmitting(false);
        navigate("/");
      }
    },
  });

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="w-full sm:w-96 bg-white rounded-xl py-6 px-9 mt-12">
        <div className="text-[#FAB005] font-bold uppercase tracking-[0.3rem] text-base font-[Poppins] text-center">
          WELCOME BACK
        </div>

        <form onSubmit={formik.handleSubmit} className="mt-12 space-y-4">
          {!signIn && (
            <div className="space-y-2">
              <label htmlFor="username" className="text-[#183153]">
                User Name
              </label>
              <input
                type="text"
                id="username"
                {...formik.getFieldProps("username")}
                className="border-2 border-gray-500 py-3 w-full rounded-xl pl-4"
                placeholder="Ashish Gaikwad"
              />
              {formik.errors.username && formik.touched.username && (
                <div className="text-red-500">{formik.errors.username}</div>
              )}
            </div>
          )}
          <div className="space-y-2">
            <label htmlFor="email" className="text-[#183153]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
              className="border-2 border-gray-500 py-3 w-full rounded-xl pl-4"
              placeholder="work.ashish.gaikwad@gmail.com"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-[#183153]">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
              className="border-2 border-gray-500 py-3 w-full rounded-xl pl-4"
              placeholder="password"
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>

          {!signIn && (
            <div className="space-y-2">
              <label htmlFor="role" className="text-[#183153]">
                Role
              </label>

              <select
                id="role"
                name="role"
                {...formik.getFieldProps("role")}
                className="border-2 border-gray-500 py-3 w-full rounded-xl pl-4"
                placeholder="role"
              >
                <option value="user">User</option>
                <option value="tech-support">Tech Support</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 px-2 bg-[#FAB005] font-[Poppins] text-base font-semibold rounded-xl border-2 border-black border-b-8"
          >
            {signIn ? "Sign In" : "Sign Up"}
            <i className="fa-solid fa-arrow-right-to-bracket ml-2"></i>
          </button>
        </form>

        <div
          onClick={() => {
            setSignIn(!signIn);
            formik.resetForm();
          }}
        >
          {signIn ? (
            <p className="p-2 mt-2 ">
              Don't have an account?{" "}
              <span className="font-semibold underline cursor-pointer">
                Sign up and get sta!rted
              </span>
            </p>
          ) : (
            <p className="font-semibold underline cursor-pointer p-2 mt-2 ">
              Already have an account? Sign In
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
