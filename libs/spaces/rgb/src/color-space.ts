import { Notation } from './notation';

export class ColorSpace<N extends Notation = Notation> {

  constructor(readonly notation: N) {
  }
}
