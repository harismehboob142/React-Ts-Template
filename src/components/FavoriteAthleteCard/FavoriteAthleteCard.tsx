import { Avatar, Box, Button, Progress, Text } from "@mantine/core";

interface IFavoriteAthleteCard {
  name: string;
  school: string;
  progress: number;
  rank: number;
  onSupport: () => void;
}

const FavoriteAthleteCard = ({
  name,
  school,
  progress,
  rank,
  onSupport,
}: IFavoriteAthleteCard) => {
  return (
    <Box w={160} h={270}>
      <Box
        w={160}
        h={270}
        sx={{
          borderRadius: "15px",
          border: "1px solid rgba(231, 231, 231, 1)",
          //   boxShadow: "0 5px 10px rgba(0, 0, 0, 0.25);",
          display: "flex", // Added for vertical centering
          flexDirection: "column",
          alignItems: "center", // Added for vertical centering
          justifyContent: "space-evenly", // Added for horizontal centering
        }}
      >
        <Avatar src="/assets/icons/user1.svg" size="lg" />
        <Text fw={600} fz={15} c="#0569E3" ff="Montserrat">
          {name}
        </Text>
        <Text fw={600} fz={15} ff="Montserrat" c="#626262" align="center">
          {school}
        </Text>
        <Progress value={progress} w="80%" size="lg" />
        <Text fw={600} fz={12} ff="Montserrat" c="#303030" align="center">
          ${rank} to silver medal
        </Text>
        {/* <Button radius={15} onClick={onSupport}>
          {" "}
        </Button> */}
      </Box>
    </Box>
  );
};

export default FavoriteAthleteCard;
