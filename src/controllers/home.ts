import * as R from 'ramda';
import * as Chess from '../libs/chess/';

export const preview = (request, response) => {
  const { pieces, cols, rows } = request.body;

  const highlights = R.pipe(
    R.map(piece => Chess.getMovementsFromPiece(piece, cols, rows)),
    R.flatten,
  )(pieces);

  return response.json({
    highlights,
  });
};
