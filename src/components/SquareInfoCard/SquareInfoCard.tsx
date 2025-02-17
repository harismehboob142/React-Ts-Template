import { Box, Center, Loader, Text } from "@mantine/core";

interface ISquareInfoCard {
  title: string;
  value: string;
  isLoading?: boolean;
}

const SquareInfoCard = ({ title, value, isLoading }: ISquareInfoCard) => {
  return (
    <Box
      w="100%"
      h="100%"
      bg="#F8F8F8"
      py="lg"
      px="lg"
      sx={{ borderRadius: "15px" }}
    >
      <Text align="center" fw={400} fz={26} c="#0569E3" ff="Teko">
        {title}
      </Text>
      {isLoading ? (
        <Center>
          <Loader variant="dots" />
        </Center>
      ) : (
        <Text align="center" fw={500} fz={36} c="#818181" ff="Montserrat">
          {value}
        </Text>
      )}
    </Box>
  );
};

export default SquareInfoCard;
