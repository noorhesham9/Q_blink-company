import { Field } from "formik";
import { Box, TextField } from "@mui/material";
function TextArea(Props) {
  const { name, ...rest } = Props;
  return (
    <Box className="form-control ">
      <Field
        as={TextField}
        name={name}
        id={name}
        required
        {...rest}
        sx={{
          width: "100%",
          "& label": { color: "white" },
          "& textArea": {
            color: "white",
            borderRadius: "10px",
          },
          bgcolor: "rgba(0,0,0,.5)",
          m: "15px 0",
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--primary-color)",
          },
          "& .MuiOutlinedInput-root:focus-within .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "var(--primary-color)",
            },
        }}
        label="A few words about the project"
        multiline
        rows={3}
      />
    </Box>
  );
}

export default TextArea;
