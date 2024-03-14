import {
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  HStack,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack>
          <Skeleton boxSize="32px" borderRadius={8} />
          <SkeletonText noOfLines={1} width="100px" />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
