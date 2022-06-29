import React from "react";
import { Form } from "react-bootstrap";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import Button from "../../components/Button";

export default function FormSignIn({
  form,
  handleChange,
  handleSubmit,
  isLoading,
}) {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={"Masukan Email"}
        label={"Email"}
        name="email"
        value={form.email}
        type="text"
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={"Masukan Password"}
        label={"Password"}
        name="password"
        value={form.password}
        type="password"
        onChange={handleChange}
      />
      <Button variant="primary" action={handleSubmit} loading={isLoading}>
        Submit
      </Button>
    </Form>
  );
}
