const f = (counter, isCounterTrue, updateCounter, bodyFun) => {
  while (isCounterTrue(counter)) {
    bodyFun(counter);

    counter = updateCounter(counter);
  }

  return counter;
};

export const fakeLoop = f;
