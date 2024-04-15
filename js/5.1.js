export function defaultFilter(images) {
  return images;
}

export function randomFilter(images) {
  let shuffled = images.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10);
}

export function discussedFilter(images) {
  return images.slice().sort((a, b) => b.comments.length - a.comments.length);
}
