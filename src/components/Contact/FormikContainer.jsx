import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, Stack } from "@mui/material";

const initialValues = {
  name: "",
  email: "",
  message: "",
  subject: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required !"),
  subject: Yup.string().required("Required !"),
  email: Yup.string().email("invalid email format").required("Required !"),
  message: Yup.string().required("Required !"),
});
function FormikContainer() {
  const handleSubmit = () => console.log("");

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {(formik) => {
        return (
          <Form>
            <Stack justifyContent="space-between">
              <FormikControl control="input" name="name" type="name" />
              <FormikControl control="input" name="email" type="email" />
              <FormikControl control="input" name="subject" type="subject" />
              <FormikControl control="textarea" name="message" />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "var(--second-font)",
                  bgcolor: "rgba(0,0,0,.5)",
                  "&:hover": {
                    bgcolor: "var(--primary-color)",
                    color: "black",
                  },
                  m: "15px 0",
                  p: "10px",
                  borderRadius: "10px",
                }}>
                submit
              </Button>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
