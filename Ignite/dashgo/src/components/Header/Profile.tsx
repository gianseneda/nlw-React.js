import { Avatar, Flex, Box, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gian Seneda</Text>
        <Text color="gray.300" fontSize="small">
          gian_seneda@hotmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Gian Seneda"
        src="https://github.com/gianseneda.png"
      />
    </Flex>
  );
}
