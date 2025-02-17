import { useForm } from "react-hook-form";
import { SuspendFormResolver } from "@/utils";
import Select from "@/components/Select/Select";
import TextInput from "@/components/TextInput/TextInput";
import { Button, Flex, Image, Loader, Modal, Text } from "@mantine/core";
import { REPORT_REASON } from "@/constants";

interface IConfirmationModalProps {
  opened: boolean;
  onClose: () => void;
  isLoading?: boolean;
  handleSuspendSubmit: (formValues: IFormValues) => void;
  title?: string;
  suspendForWeekToggle?: any;
}

export interface IFormValues {
  days: number;
  reason: string;
}

const SuspendModal = ({
  title,
  opened,
  onClose,
  isLoading,
  handleSuspendSubmit,
  suspendForWeekToggle,
}: IConfirmationModalProps) => {
  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({
    resolver: SuspendFormResolver,
  });
  console.log("errors", errors);
  const handleSubmit = (formValues: IFormValues) => {
    console.log("suspend form values", formValues);
    handleSuspendSubmit(formValues);
  };
  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Modal
        centered
        radius={30}
        opened={opened}
        onClose={onClose}
        withCloseButton={false}
      >
        <Image src="/assets/icons/delete.svg" width={80} mx="auto" />
        <Flex direction="column" align="center" gap="xl" p="xl">
          <Text align="center" fw={700} fz={20}>
            {title || "Suspend Supporter"}
          </Text>
          <Flex direction="column" gap={"md"}>
            <Text align="center" fw={500} fz={16}>
              Please select a time range for suspending the selected user.
            </Text>
            <Button
              fullWidth
              h={"50px !important"}
              bg="#002763"
              onClick={() => {
                suspendForWeekToggle.open();
              }}
            >
              Suspend 7 days
            </Button>
            <Text align="center">or</Text>
            <TextInput
              type="number"
              control={control}
              name="days"
              placeholder="Enter suspend days (up to 365 days)"
            />
            <Select
              data={REPORT_REASON}
              control={control}
              name="reason"
              placeholder="Select reason"
            />
          </Flex>
          <Flex w="90%" gap="xl">
            <Button
              type="submit"
              variant="dark"
              fullWidth
              rightIcon={isLoading ? <Loader size="sm" /> : <></>}
              onClick={onSubmit(handleSubmit)}
            >
              Submit
            </Button>
            <Button variant="light" fullWidth onClick={onClose}>
              Cancel
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </form>
  );
};

export default SuspendModal;
