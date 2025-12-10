import type { Opinion } from "models/Opinion";

const RandomPickShort = (
  items: Opinion[],
  count: number,
  longLimit = 250
): Opinion[] => {
  // Select short opinions only
  const shortItems = items.filter(
    (item) => (item.opinion || "").length <= longLimit
  );

  const max = Math.min(shortItems.length, count);
  const shuffled = [...shortItems].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, max);
};

export default RandomPickShort;
