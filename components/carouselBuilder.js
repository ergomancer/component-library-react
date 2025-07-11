const needsRollover = function (cards, start, count) {
  if (start + count > cards.length) return true;
  return false;
};

const repopulate = function (cards, count) {
  return [...cards, ...cards.slice(0, count)];
};

const getContent = function (cards, start, count) {
  if (needsRollover(cards, start, count))
    cards = repopulate(cards, count);
  let result = cards.slice(start, start + count);
  return result;
};

const newStart = function (length, start, side) {
  switch (side) {
    case "right": {
      return start == length - 1 ? 0 : start + 1;
    }
    case "left": {
      return start == 0 ? length - 1 : start - 1;
    }
  }
};

export { getContent, newStart };
//module.exports = getContent;
