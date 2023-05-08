import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="cyan"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
