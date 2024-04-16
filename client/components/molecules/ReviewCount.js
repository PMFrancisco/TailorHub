import { Text } from "../atoms/Text";

export const ReviewCount = ({ count }) => (
    <Text variant="commentCount">{`(${count} comentarios)`}</Text>
  );