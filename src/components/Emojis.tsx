import starstruck from "../assets/star-struck.webp";
import smiley from "../assets/smiley.webp";
import neutralface from "../assets/neutral_face.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emojis = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: neutralface, alt: "meh" },
    4: { src: smiley, alt: "recommended" },
    5: { src: starstruck, alt: "exceptional" },
  };
  return <Image {...emojiMap[rating]} boxSize="30px" marginTop={2} />;
};

export default Emojis;
