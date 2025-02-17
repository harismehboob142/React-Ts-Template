import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { PasswordInput as MantinePasswordInput } from "@mantine/core";

interface ITextInputProps {
  name: string;
  control: any;
  [key: string]: any;
}

const PasswordInput = ({ name, control, ...restProps }: ITextInputProps) => {
  return (
    <Fragment>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <MantinePasswordInput
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

export default PasswordInput;
