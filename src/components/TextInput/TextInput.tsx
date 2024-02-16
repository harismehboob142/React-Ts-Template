import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { TextInput as MantineTextInput } from "@mantine/core";

interface ITextInputProps {
  name: string;
  control: any;
  [key: string]: any;
}

const TextInput = ({ name, control, ...restProps }: ITextInputProps) => {
  return (
    <Fragment>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <MantineTextInput
              {...field}
              {...restProps}
              error={error?.message}
            />
          </>
        )}
      />
    </Fragment>
  );
};

export default TextInput;
