import { useForm } from "react-hook-form";
import { ILoginFormResolver } from "../../../../types";
import { Form, TextInput } from "../../../../components";
import { Button, Flex, Group, Image, Stack } from "@mantine/core";

const LoginContainer = () => {
  const { control, handleSubmit: onSubmit } = useForm<ILoginFormResolver>({});

  const handleLogin = (values: { email: string }) => {
    console.log("Login", values);
  };
  return (
    <Stack justify="center" align="center" h="100vh" w="100vw">
      <Form onSubmit={onSubmit(handleLogin)}>
        <Flex w={500} direction="column" gap={35}>
          <Image
            src="/assets/icons/PunchlistLogo.svg"
            mah={103}
            maw={384}
            sx={{ alignSelf: "center" }}
          />
          <TextInput
            control={control}
            name="email"
            type="email"
            placeholder="Email"
            variant="filled"
            required
          />
          <Button type="submit">Login</Button>
          <Group mt={25} sx={{ justifyContent: "center" }}>
            <Button
              leftIcon={<Image src="/assets/icons/google.svg" alt="img" />}
            >
              Google
            </Button>
            <Button
              leftIcon={<Image src="/assets/icons/apple.svg" alt="img" />}
            >
              Apple
            </Button>
          </Group>
        </Flex>
      </Form>
    </Stack>
  );
};

export default LoginContainer;
