import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}
const Rating = ({ metacritic }: Props) => {
  let rating = metacritic > 90 ? "green" : "red";
  return <Badge colorScheme={rating}>{metacritic}</Badge>;
};

export default Rating;
