import { CompromiseToken } from "../interfaces/CompromiseToken";
import { ParsedCommand } from "../types/ParsedCommand";
import nlp from "compromise";
import { store } from "../store";
import { ParseError } from "../types/ParseError";
import { VERB_LIST } from "../const/verbs";
import { REGISTRY } from "../const/items";
import { PREPOSITIONS } from "../const/preopositions";

function countWords(str: string) {
  // Split the string by spaces and filter out any empty strings that may result from multiple spaces
  return str.split(" ").filter(Boolean).length;
}

// Function to parse the command
function parseCommand(input: string): ParsedCommand | ParseError {
  // Normalize the input
  const doc = nlp(input.toLowerCase());

  const verbs = VERB_LIST.map((verb) => verb.toLowerCase()).sort(
    (a, b) => countWords(b) - countWords(a)
  );
  const nouns = REGISTRY.get()
    .map((item) => item.name.toLowerCase())
    .concat(
      REGISTRY.get()
        .map((item) => item.synonyms || [])
        .flat()
    )
    .concat(["north", "south", "east", "west", "floor"])
    .sort((a, b) => countWords(b) - countWords(a));

  const preps = PREPOSITIONS.map((preposition) => preposition.toLowerCase())
    .map((preposition) => preposition.toLowerCase())
    .sort((a, b) => countWords(b) - countWords(a));

  verbs.forEach((verb) => doc.match(verb).tag("Verb"));
  nouns.forEach((noun) => doc.match(noun).tag("Noun"));

  // Extract the verb
  const verbPhrase = doc.match("#Verb+").out("text");

  // Remove the verb from the doc to simplify extraction of objects
  doc.remove(verbPhrase);

  // Split the remaining text by prepositions
  let tokens = doc.out("text").split(new RegExp(`\\b(${preps.join("|")})\\b`));

  // Trim tokens
  tokens = tokens
    .map((token: string) => token.trim())
    .filter((token: string) => token.length > 0);

  let directObject = "";
  let indirectObject = "";

  if (tokens.length > 0) {
    directObject = tokens[0];
  }
  if (tokens.length > 1) {
    indirectObject = tokens.slice(1).join(" ");
  }

  // Attempt to match direct and indirect objects to known nouns
  directObject = matchNoun(directObject, nouns);
  indirectObject = matchNoun(indirectObject, nouns);

  return {
    verb: verbPhrase,
    directObject: directObject,
    indirectObject: indirectObject,
  };
}

// Helper function to match noun phrases
function matchNoun(phrase: string, nouns: string[]) {
  // Check for multi-word nouns first
  for (const noun of nouns) {
    if (phrase.includes(noun)) {
      return noun;
    }
  }
  // Return the phrase as is if no match found
  return phrase;
}

export { parseCommand };
