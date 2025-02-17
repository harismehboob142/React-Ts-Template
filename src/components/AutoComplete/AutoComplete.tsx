import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { Autocomplete as MantineAutocomplete } from "@mantine/core";

interface IAutocompleteProps {
  name: string;
  control: any;
  [key: string]: any;
}

const Autocomplete = ({
  name,
  control,
  data,
  ...restProps
}: IAutocompleteProps) => {
  return (
    <Fragment>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <MantineAutocomplete
              data={data}
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

export default Autocomplete;
