import { Game } from "../hooks/useGames";
import {
  Card,
  Image,
  CardBody,
  Heading,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";
import Emojis from "./Emojis";

export interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card borderRadius={10} overflow="hidden" onClick={onOpen} cursor="pointer">
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emojis rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
