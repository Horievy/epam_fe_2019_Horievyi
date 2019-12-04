const complexFunction = function (firstArgument, secondArgument) {
  return firstArgument + secondArgument;
};

const cachedFunction = cache(complexFunction);

function cache(func) {
  const cacheStorage = [];

  return (firstArgument, secondArgument) => {
    const itemFromCache = cacheStorage.find((item) => item.firstArgument === firstArgument && item.secondArgument === secondArgument);

    if (itemFromCache) {
      return itemFromCache;
    }

    const answer = func(firstArgument, secondArgument);
    cacheStorage.push({
      firstArgument,
      secondArgument,
      answer,
    });

    return cacheStorage[cacheStorage.length - 1];
  };
}

cachedFunction(2, 8);
cachedFunction('ff', 'bb');
cachedFunction('ff', 'bb');
cachedFunction(55, 10);
cachedFunction(2, 8);
cachedFunction(20, 20);