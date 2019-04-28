declare function quadraticAt(p0: number, p1: number, p2: number, t: number): number;
declare function quadraticProjectPoint(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x: any, y: any, out: any): number;
declare function quadraticExtrema(p0: number, p1: number, p2: number): number[];
declare const _default: {
    at: typeof quadraticAt;
    projectPoint(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x: any, y: any): {};
    pointDistance: typeof quadraticProjectPoint;
    extrema: typeof quadraticExtrema;
};
export = _default;
