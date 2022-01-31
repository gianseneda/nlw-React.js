import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
      dashgo
      <Text as="span" ml="4" color="pink.500">
        .
      </Text>
    </Text>
  );
}
