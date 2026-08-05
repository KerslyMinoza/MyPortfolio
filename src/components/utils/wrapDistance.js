/**
 * Distance the short way round a loop of `total` items: how far `distance` is
 * from zero, and which side of it, once you allow for the loop closing.
 *
 * The deck lives on this. It tells a card how far it sits from the centre of
 * the hero, and it tells the progress rail the shortest way to reach a card
 * you clicked — never the long way round through the whole list.
 */
export default function wrapDistance(distance, total) {
  const half = total / 2;
  return ((((distance + half) % total) + total) % total) - half;
}
