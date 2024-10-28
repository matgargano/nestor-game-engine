function testJSON(text: unknown) {
  if (typeof text !== "string") return false;
  try {
    JSON.parse(text);
    return true;
  } catch (e) {
    return false;
  }
}

export default testJSON;
