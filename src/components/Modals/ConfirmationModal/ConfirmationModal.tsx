import {
  Box,
  Button,
  Flex,
  Image,
  Loader,
  Modal,
  Text,
  Title,
} from "@mantine/core";

interface IConfirmationModalProps {
  opened: boolean;
  onClose: () => void;
  text?: string;
  onClick: () => void;
  isLoading?: boolean;
  title: string;
  bullets?: string[];
  textEnd?: string;
  icon?: string;
  btnText?: string;
  closeBtnText?: string;
}

const ConfirmationModal = ({
  opened,
  onClose,
  text,
  onClick,
  isLoading,
  title,
  textEnd,
  bullets,
  icon,
  btnText,
  closeBtnText,
}: IConfirmationModalProps) => {
  return (
    <Modal
      centered
      radius={30}
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
    >
      <Image src={icon || "/assets/icons/delete.svg"} width={55} mx="auto" />
      <Flex direction="column" align="center" gap="xl" p="xl">
        <Text align="center" fw={700} fz={20}>
          {title}
        </Text>
        <Box>
          <Text align="center" fw={500} fz={16}>
            {text}
          </Text>
          {bullets && (
            <Text align="left" fw={500} fz={16}>
              <ul>{bullets && bullets?.map((bullet) => <li>{bullet}</li>)}</ul>
            </Text>
          )}
          {textEnd && (
            <Text align="center" fw={500} fz={16}>
              {textEnd}
            </Text>
          )}
        </Box>
        <Flex w="90%" gap="xl">
          <Button
            variant="dark"
            fullWidth
            onClick={onClick}
            leftIcon={
              isLoading ? (
                <Loader color="white" size="sm" variant="dots" />
              ) : (
                <></>
              )
            }
          >
            {btnText || "Yes, I confirm"}
          </Button>
          <Button variant="light" fullWidth onClick={onClose}>
            {closeBtnText || "No"}
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ConfirmationModal;
