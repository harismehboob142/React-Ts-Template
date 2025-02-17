import { IconCheck } from "@tabler/icons-react";
import { Button, Flex, Image, Modal, Text } from "@mantine/core";

interface IConfirmationModalProps {
  opened: boolean;
  onClose: () => void;
  text?: string;
  title: string;
  icon?: string;
}

const ConfirmationModal = ({
  opened,
  onClose,
  text,
  title,
  icon,
}: IConfirmationModalProps) => {
  return (
    <Modal
      centered
      radius={30}
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
    >
      {icon ? <Image src={icon} width={80} mx="auto" /> : <IconCheck />}
      <Flex direction="column" align="center" gap="xl" p="xl">
        <Text align="center" fw={700} fz={20}>
          {title}
        </Text>
        <Text align="center" fw={500} fz={16}>
          {text}
        </Text>

        <Button variant="dark" fullWidth onClick={onClose}>
          Okay
        </Button>
      </Flex>
    </Modal>
  );
};

export default ConfirmationModal;
