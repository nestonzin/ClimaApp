import { Flex, Image } from "@chakra-ui/react";
import background from "../../assets/background.gif";
import bgz from "../../assets/bgz.gif";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex
      flexDirection={["column"]}
      minH="100vh"
      w="100%"
      bgImage={bgz}
      backgroundRepeat={["no-repeat"]}
      bgSize={["cover"]}
      bgPosition={["center"]}
    >
      {children}
    </Flex>
  );
};
