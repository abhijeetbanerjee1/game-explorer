import { Game } from "../entities/Game";
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
import { Link } from "react-router-dom";

export interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Link to={"/games/" + game.slug}>
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
      </Link>
    </Card>
  );
};

export default GameCard;
