export const testers: Testers = [
  {
    id: "705665813994012695",
    name: "conrad",
  },
  {
    id: "291050399509774340",
    name: "matt",
  },
  {
    id: "204616460797083648",
    name: "ven",
  },
];

export function isTester(id: string): { id: string; name: string } | undefined {
  return testers.find((user) => user.id === id);
}

export type Testers = [
  {
    id: "705665813994012695";
    name: "conrad";
  },
  {
    id: "291050399509774340";
    name: "matt";
  },
  {
    id: "204616460797083648";
    name: "ven";
  }
];
