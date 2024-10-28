export const LOOK = "look";
export const FEEL = "feel";
export const GET = "get";
export const GO = "go";
export const USE = "use";
export const SAY = "say";
export const ASK = "ask";
export const DO = "do";
export const OPEN = "open";
export const PUT = "put";

const VERB_SYNONYMS = {
  [LOOK]: { synonyms: [LOOK, "see", "observe", "look at", "view"] },
  [FEEL]: { synonyms: [FEEL, "touch", "touch"] },
  [GET]: { synonyms: [GET, "take", "grab", "pick up"] },
  [GO]: { synonyms: [GO, "move", "walk", "proceed"] },
  [USE]: { synonyms: [USE, "utilize", "employ", "apply"] },
  [SAY]: { synonyms: [SAY, "speak", "tell", "announce"] },
  [ASK]: { synonyms: [ASK, "request", "inquire", "query"] },
  [DO]: { synonyms: [DO, "perform", "execute", "carry out"] },
  [OPEN]: { synonyms: [OPEN, "unlock", "unlock"] },
  [PUT]: { synonyms: [PUT, "place", "put"] },
};

export const VERB_LIST = Object.keys(VERB_SYNONYMS).concat(
  Object.values(VERB_SYNONYMS).flatMap((synonymList) => synonymList.synonyms)
);

const normalizeVerb = (word: string): string | false => {
  for (const [key, synonymList] of Object.entries(VERB_SYNONYMS)) {
    if (synonymList.synonyms.includes(word.toLowerCase())) {
      return key;
    }
  }
  return false;
};

export { normalizeVerb };
