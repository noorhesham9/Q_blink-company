import { Field } from "formik";
import { Stack, TextField } from "@mui/material";
function Input(Props) {
  const { name, ...rest } = Props;
  return (
    <Stack className="form-control">
      <Field
        name={name}
        id={name}
        {...rest}
        as={TextField}
        required
        label={`Your ${name}`}
        sx={{
          m: "15px 0",
          width: "100%",
          "& label": { color: "white" },
          "& input": {
            color: "white",
            bgcolor: "rgba(0,0,0,.5)",
            borderRadius: "10px",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--primary-color)",
          },
          "& .MuiOutlinedInput-root:focus-within .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "var(--primary-color)",
            },
        }}
      />
    </Stack>
  );
}

export default Input;