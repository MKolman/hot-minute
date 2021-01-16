function getProbabilities(bombProbability: number): number[] {
  const nonBomb = (1 - bombProbability) / 3;
  return [nonBomb, nonBomb, nonBomb, bombProbability];
}
function normalize(arr: number[]): number[] {
  const sum = arr.reduce((total: number, cur: number) => total + cur, 0);
  return arr.map((cur: number) => cur / sum);
}

function fixProbability(probability: number[], history: number[]): number[] {
  const totalPicks = history.reduce((sum: number, cur: number) => sum + cur, 0);
  const tmpProbability = probability;
  if (totalPicks > 0) {
    for (let i = 0; i < probability.length; i += 1) {
      tmpProbability[i] = Math.max(0, 2 * tmpProbability[i] - history[i] / (totalPicks + 2));
    }
  }
  return normalize(tmpProbability);
}
type Store = {
  state: {
    activityHistory: number[];
    bombProbability: number;
  };
  commit: (a: string, b: number) => void;
};

function pick(store: Store): number {
  const probability = fixProbability(
    getProbabilities(store.state.bombProbability),
    store.state.activityHistory,
  );
  let choice = Math.random();
  for (let i = 0; i < probability.length; i += 1) {
    if (probability[i] >= choice) {
      store.commit('updateActivityHistory', i);
      return i;
    }
    choice -= probability[i];
  }
  // Fallback return. This should never happen
  console.warn('Was unable to pick activity the proper way. Choosing randomly.', probability);
  return Math.floor(Math.random() * probability.length);
}

export default pick;