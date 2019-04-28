declare const PathSegment1: (new (item: any, preSegment: any, isLast: any) => {} & {
    init(item: any, preSegment: any): void;
    isInside(x: any, y: any, lineWidth: any): boolean;
    draw(context: any): void;
    getBBox(lineWidth: any): void;
}) & {};
declare class PathSegment extends PathSegment1 {
}
export = PathSegment;
