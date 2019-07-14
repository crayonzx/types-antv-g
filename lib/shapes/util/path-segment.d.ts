declare class PathSegment {
    constructor(item: any, preSegment: any, isLast: any);
    init(item: any, preSegment: any): void;
    isInside(x: number, y: number, lineWidth: number): boolean;
    draw(context: any): void;
    getBBox(lineWidth: number): void;
}
export = PathSegment;
