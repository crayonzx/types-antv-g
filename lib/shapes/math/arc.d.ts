declare function nearAngle(angle: number, startAngle: number, endAngle: number, clockwise?: boolean): number;
declare function arcProjectPoint(cx: number, cy: number, r: number, startAngle: number, endAngle: number, clockwise: boolean, x: number, y: number, out: any): any;
declare function arcBox(cx: any, cy: any, r: any, startAngle: any, endAngle: any, clockwise: any): {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
};
declare const _default: {
    nearAngle: typeof nearAngle;
    projectPoint(cx: number, cy: number, r: number, startAngle: number, endAngle: number, clockwise: boolean, x: number, y: number): any;
    pointDistance: typeof arcProjectPoint;
    box: typeof arcBox;
};
export = _default;
