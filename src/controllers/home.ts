import * as R from 'ramda';
import * as Chess from '../libs/chess/';

export const preview = (request, response) => {
  const { pieces } = request.body;

  const highlights = R.pipe(
    R.map(Chess.getMovementsFromPiece),
    R.flatten,
  )(pieces);

  return response.json({
    highlights,
  });
};
