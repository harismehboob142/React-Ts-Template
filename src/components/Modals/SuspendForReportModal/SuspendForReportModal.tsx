import { useForm } from "react-hook-form";
import { REPORT_REASON } from "@/constants";
import { showTableDate, showTime, SuspendFormResolver } from "@/utils";
import Select from "@/components/Select/Select";
import TextInput from "@/components/TextInput/TextInput";
import { IReport } from "@/modules/Reports/containers/ReportsContainer/ReportsContainer";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Image,
  Loader,
  Modal,
  Space,
  Stack,
  Text,
} from "@mantine/core";

interface IConfirmationModalProps {
  opened: boolean;
  onClose: () => void;
  isLoading?: boolean;
  handleSuspendSubmit: (formValues: IFormValues) => void;
  suspendForWeekToggle: any;
  data: any;
}

export interface IFormValues {
  days: number;
  reason: string;
}

const SuspendForReportModal = ({
  opened,
  onClose,
  isLoading,
  data,
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
  console.log("data is ", data);
  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Modal
        centered
        radius={30}
        opened={opened}
        onClose={onClose}
        withCloseButton={false}
      >
        <Box px="lg">
          <Group position="apart">
            <Text fw={700} fz={20}>
              Report Details
            </Text>
            <Group>
              <Stack spacing={0} justify="center" align="center">
                <Text fw={500} fz={13}>
                  Date
                </Text>
                <Text fw={400} fz={12} c="#718EBF">
                  {data?.date}
                </Text>
              </Stack>
              <Stack spacing={0} justify="center" align="center">
                <Text fw={500} fz={13}>
                  Time
                </Text>
                <Text fw={400} fz={12} c="#718EBF">
                  {data?.time}
                </Text>
              </Stack>
            </Group>
          </Group>
          <Space h="xl" />
          <Grid>
            <Grid.Col span={6}>
              <Stack>
                <Box>
                  <Text fw={500} fz={13}>
                    Reason
                  </Text>
                  <Text fw={400} fz={12} c="#718EBF">
                    {data.reason}
                  </Text>
                </Box>
                <Box>
                  <Text fw={500} fz={13}>
                    Reported User
                  </Text>
                  <Group>
                    <Text fw={400} fz={12} c="#718EBF">
                      {data.firstName}
                    </Text>
                    <Badge variant="filled">{data?.reportedRole}</Badge>
                  </Group>
                </Box>
              </Stack>
            </Grid.Col>
            <Grid.Col span={6}>
              <Box>
                <Text fw={500} fz={13}>
                  Reported By
                </Text>
                <Group>
                  <Text fw={400} fz={12} c="#718EBF">
                    {data.reportedBy}
                  </Text>

                  <Badge variant="outline">{data?.reporterRole}</Badge>
                </Group>
              </Box>
            </Grid.Col>
          </Grid>
          <Box mt="sm">
            <Text fw={500} fz={13}>
              Description
            </Text>
            <Text fw={400} fz={12} c="#718EBF">
              {data.description}
            </Text>
            <Space h="sm" />
            <Box>
              <Text fw={500} fz={13}>
                Evidence
              </Text>
              <Space h="sm" />
              <Group>
                {data?.images?.map((image: any) => (
                  <Image src={image} width={40} />
                ))}
              </Group>
            </Box>
          </Box>
          <Flex direction="column" gap="xl" py="lg">
            <Flex direction="column" gap={"md"}>
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
        </Box>
      </Modal>
    </form>
  );
};

export default SuspendForReportModal;
