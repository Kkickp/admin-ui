import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";

function SignIn(props) {
  return (
    <AuthLayout>
      <FormSignIn onNavigate={props.onNavigate} />
    </AuthLayout>
  );
}

export default SignIn;
