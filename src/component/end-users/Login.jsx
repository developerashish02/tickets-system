import {
  initialValuesForSignIn,
  initialValuesForSignUp,
} from "../../utils/constants";
import { useFormik } from "formik";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSignInQuery, useSignUpMutation } from "../../services/SignUpApi";
import {
  validationSchemaForSignIn,
  validationSchemaForSignUp,
} from "../../utils/validations";
import * as Yup from "yup";
import Loading from "../Loading";

const Login = () => {
  const {
    isError,
    isSuccess,
    data: users,
    isLoading,
    error,
  } = useSignInQuery();

  const [signIn, setSignIn] = useState(true);
  const [createUser] = useSignUpMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: signIn ? initialValuesForSignIn : initialValuesForSignUp,
    validationSchema: Yup.object(
      signIn ? validationSchemaForSignIn : validationSchemaForSignUp
    ),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const { email, username, password, role } = values;
      if (!signIn) {
        const emailExist =
          isSuccess && users.some((user) => user.email === email);

        const userNameExist =
          isSuccess && users.some((user) => user.username === username);

        if (emailExist) {
          formik.setFieldError("email", "Email already exists");
        }

        if (userNameExist) {
          formik.setFieldError("username", "Username already exists");
        }

        if (emailExist || userNameExist) {
          setSubmitting(false);
          return;
        }

        await createUser(values);
        const userString = JSON.stringify(values);
        localStorage.setItem("user", userString);

        if (role === "user") {
          navigate("/");
        }

        if (role === "tech-support") {
          navigate("/tech-dashboard");
        }

        if (role === "admin") {
          navigate("/admin");
        }

        setSubmitting(false);
        resetForm();
      } else {
        const userDetails =
          isSuccess &&
          users?.some(
            (user) => user?.email === email && user?.password === password
          );

        console.log(userDetails, "userDetails");

        if (!userDetails) {
          formik.setFieldError(
            "password",
            "User not found. Please check your credentials and try again."
          );
          setSubmitting(false);
          return;
        }

        const user =
          isSuccess &&
          users.find(
            (user) => user?.email === email && user?.password === password
          );

        const userString = JSON.stringify(user);
        localStorage.setItem("user", userString);

        const { role } = user;

        if (role === "user") {
          navigate("/");
        }

        if (role === "tech-support") {
          navigate("/tech-dashboard");
        }

        if (role === "admin") {
          navigate("/admin");
        }
      }

      setSubmitting(false);
      resetForm();
    },
  });

  if (isLoading) {
    return <Loading />;
  }

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
                placeholder="ashishGaikwad"
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
              {formik.errors.role && formik.touched.role && (
                <div className="text-red-500">{formik.errors.role}</div>
              )}

              {isError && (
                <div className="text-red-500">
                  {error?.code - error?.message}
                </div>
              )}
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
