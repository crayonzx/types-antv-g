declare function cubicAt(p0: number, p1: number, p2: number, p3: number, t: number): number;
declare function cubicDerivativeAt(p0: number, p1: number, p2: number, p3: number, t: number): number;
declare function cubicProjectPoint(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, x: number, y: number, out: any): number;
declare function cubicExtrema(p0: number, p1: number, p2: number, p3: number): number[];
declare function cubiclLen(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, z: any): number;
declare const _default: {
    at: typeof cubicAt;
    derivativeAt: typeof cubicDerivativeAt;
    projectPoint(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, x: number, y: number): {};
    pointDistance: typeof cubicProjectPoint;
    extrema: typeof cubicExtrema;
    len: typeof cubiclLen;
};
export = _default;
