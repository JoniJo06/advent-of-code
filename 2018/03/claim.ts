export class claim {

  private static WIDTH = 0;
  private static HEIGHT = 0;

  private readonly _left: number;
  private readonly _top: number;
  private readonly _width: number;
  private readonly _height: number;

  constructor(left: number, top: number, width: number, height: number) {

    if (left + width > claim.WIDTH)
      claim.WIDTH = left + width;

    if (top + height > claim.HEIGHT)
      claim.HEIGHT = top + height;

    this._left = left;
    this._top = top;
    this._width = width;
    this._height = height;
  }

  get left() {
    return this._left;
  }

  get top() {
    return this._top;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  static get height() {
    return claim.HEIGHT;
  }

  static get width() {
    return claim.WIDTH;
  }

  getInfo(x: number, y: number) {
    if (x > this._left && x < this._left + this._width && y > this._top && y < this._top + this._height)
      return '#';
    else return '.';
  }

}