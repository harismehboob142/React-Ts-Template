import { IconDotsVertical, IconEye, IconFileZip } from "@tabler/icons-react";
import {
  ActionIcon,
  Avatar,
  Card,
  Group,
  Menu,
  rem,
  Text,
} from "@mantine/core";
import { IUser } from "@/modules/Admins/containers/AdminContainer/AdminContainer";
import { capitalizeFirstLetter } from "@/utils";
import { ROLES } from "@/constants/Roles";

interface IUserCard {
  data: {
    email: string;
    name: string;
    role: string;
    id: string;
    adminRole: "admin" | "editor" | "manager" | "";
  };
  setUserToEdit: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  EditAdminModalToggle: {
    readonly open: () => void;
    readonly close: () => void;
    readonly toggle: () => void;
  };
  DeleteAdminModalToggle: {
    readonly open: () => void;
    readonly close: () => void;
    readonly toggle: () => void;
  };
}

const UserCard = ({
  data,
  setUserToEdit,
  EditAdminModalToggle,
  DeleteAdminModalToggle,
}: IUserCard) => {
  const handleUserEdit = () => {
    setUserToEdit(data);
    EditAdminModalToggle.open();
  };
  const handleUserDelete = () => {
    setUserToEdit(data);
    DeleteAdminModalToggle.open();
  };
  return (
    // <></>
    <Card withBorder shadow="sm" radius="md" w={200}>
      <Card.Section>
        <Group position="apart">
          <div></div>
          {data?.adminRole == ROLES.ADMIN && (
            <Menu withinPortal position="bottom-end" shadow="sm">
              <Menu.Target>
                <ActionIcon>
                  <IconDotsVertical size="1rem" />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item
                  icon={<IconFileZip size={rem(14)} />}
                  onClick={handleUserEdit}
                >
                  Edit
                </Menu.Item>
                <Menu.Item
                  icon={<IconEye size={rem(14)} />}
                  onClick={handleUserDelete}
                >
                  Delete
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          )}
        </Group>
      </Card.Section>
      <Card.Section mt={data.adminRole !== ROLES.ADMIN ? 10 : 0}>
        <Avatar
          src="/assets/images/userAvatar.png"
          size={100}
          radius="50%"
          mr="auto"
          ml="auto"
        />
      </Card.Section>
      <Card.Section my="lg">
        <Text fw={400} fz={18} align="center">
          {capitalizeFirstLetter(data.name)}
        </Text>
        <Text fw={400} fz={14} align="center" opacity={"50%"}>
          {capitalizeFirstLetter(data.role)}
        </Text>
        <Text fw={400} fz={14} align="center" my="lg">
          {data.email}
        </Text>
      </Card.Section>
    </Card>
  );
};

export default UserCard;
