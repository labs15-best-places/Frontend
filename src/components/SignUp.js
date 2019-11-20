import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/signup.js";
import Error from "./Error";
import {
  Container,
  Form,
  Button,
  Input,
  SocialButton,
  Text,
  StyledLink
} from "../styles/index";

function SignUp({ signup, history, error }) {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });
  const onSubmit = async data => {
    const response = await signup(data);

    if (response === "Successful") {
      history.push("/");
    } else {
      console.log(response);
    }
  };

  return (
    <Container>
      {error && <Error error={error} />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {errors.name &&
          "Your name is required and must be at least 2 characters."}
        <Input
          type="text"
          placeholder="Name"
          name="name"
          ref={register({ required: true, minLength: 2 })}
        />
        {errors.email && "Your email is required"}
        <Input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.password && "Your password is required"}
        <Input
          type="Password"
          placeholder="password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.location && "Your location is required"}
        <Input
          type="text"
          placeholder="Location"
          name="location"
          ref={register({ required: true, minLength: 2 })}
        />
        <Container textAlign="center">
          {/* <SocialButton Google>Continue with Google</SocialButton>
          <SocialButton Facebook>Continue with Facebook</SocialButton> */}
          <Button type="submit" disabled={!formState.isValid}>
            Join BPTL
          </Button>
          <Text color="primary">Already have an account?</Text>
          <StyledLink to="/login">Log In</StyledLink>
        </Container>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    error: state.signupError
  };
};

export default withRouter(connect(mapStateToProps, { signup })(SignUp));
