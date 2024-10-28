interface CompromiseToken {
  text: string;
  pre: string;
  post: string;
  tags: Set<string>;
  normal: string;
  index: [number, number];
  id: string;
  chunk: string;
  dirty: boolean;
  switch: string;
}

export type { CompromiseToken };
