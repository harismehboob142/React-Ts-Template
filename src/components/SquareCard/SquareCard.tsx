import { Box, Center, Image, Text } from "@mantine/core";
import React from "react";

interface ISquareCard {
  image: string;
  text: string;
}

const SquareCard = ({ image, text }: ISquareCard) => {
  return (
    <Box w={110} h={150}>
      <Box
        w={108}
        h={88}
        sx={{
          borderRadius: "15px",
          border: "rgba(217, 217, 217, 0.01)",
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.25);",
          display: "flex", // Added for vertical centering
          alignItems: "center", // Added for vertical centering
          justifyContent: "center", // Added for horizontal centering
        }}
      >
        <Center>
          <Image src={image} mt="auto" />
        </Center>
      </Box>
      <Text fw={500} fz={15} align="center" ff="Montserrat">
        {text}
      </Text>
    </Box>
  );
};

export default SquareCard;
