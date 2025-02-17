import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { Checkbox as MantineCheckbox } from "@mantine/core";

interface ICheckboxProps {
  name: string;
  control: any;
  label: string;
  [key: string]: any;
}

const Checkbox = ({ name, control, label, ...restProps }: ICheckboxProps) => {
  return (
    <Fragment>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <MantineCheckbox
            {...field}
            {...restProps}
            label={label}
            checked={field.value} // Mantine's Checkbox requires the `checked` prop for controlled components
            error={error?.message} // Display validation error (if any)
          />
        )}
      />
    </Fragment>
  );
};

export default Checkbox;
