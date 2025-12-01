const RandomPick = <T,>(items: T[], count: number): T[] => {
  const max = Math.min(items.length, count);
  const shuffled = [...items].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, max);
};

export default RandomPick;
