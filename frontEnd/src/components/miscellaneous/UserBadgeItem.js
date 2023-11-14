import { CloseIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/layout";

const UserBadgeItem = ({ user, user1, handleFunction, admin }) => {

  return (
    <Badge
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFunction}
    >
      {admin === user1._id ? `${user._id === user1._id ? 'YOU' : user1.name}[A]` : user._id === user1._id ? 'YOU' : user1.name}

      {/* {admin === user._id && <span> (Admin)</span>} */}
      <CloseIcon pl={1} />
    </Badge>
  );
};

export default UserBadgeItem;
