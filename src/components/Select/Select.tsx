import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { IconChevronDown } from "@tabler/icons-react";
import { Select as MantineSelect } from "@mantine/core";

interface ITextInputProps {
  name: string;
  control: any;
  data: any;
  [key: string]: any;
}

const Select = ({ name, control, data, ...restProps }: ITextInputProps) => {
  return (
    <Fragment>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <MantineSelect
              rightSection={<IconChevronDown size="1rem" stroke={2} />}
              {...field}
              {...restProps}
              error={error?.message}
              data={data}
            />
          </>
        )}
      />
    </Fragment>
  );
};

export default Select;
