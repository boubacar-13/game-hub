import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/api-url";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              {" "}
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                width="32px"
                borderRadius={8}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
function useGenre(): { data: any; error: any; isLoading: any } {
  throw new Error("Function not implemented.");
}
