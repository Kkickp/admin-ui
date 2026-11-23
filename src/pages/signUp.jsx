import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";

function SignUp(props) {
  return (
    <AuthLayout>
      <FormSignUp onNavigate={props.onNavigate} />
    </AuthLayout>
  );
}

export default SignUp;
