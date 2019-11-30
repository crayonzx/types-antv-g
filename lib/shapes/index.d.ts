/// <reference types="@antv/util" />
declare const Shape: typeof import('../core/shape') & {
    Arc: typeof import('./arc');
    Circle: typeof import('./circle');
    Dom: typeof import('./dom');
    Ellipse: typeof import('./ellipse');
    Fan: typeof import('./fan');
    Image: typeof import('./image');
    Line: typeof import('./line');
    Marker: typeof import('./marker');
    Path: typeof import('./path');
    Polygon: typeof import('./polygon');
    Polyline: typeof import('./polyline');
    Rect: typeof import('./rect');
    Text: typeof import('./text');
};
export = Shape;
declare type Shapes = typeof Shape;
/**
 * Arc | Circle | CText | Dom | Ellipse | Fan | CImage | Line | Marker | ...
 */
declare type ShapeTypes<K = keyof Shapes> = K extends Exclude<keyof Shapes, 'superclass' | 'prototype'> ? (Shapes[K] extends new (...args: any) => infer R ? R : never) : never;
declare const ShapeTypes: ShapeTypes;
/**
 * { arc: Arc } & { circle: Circle } & { dom: Dom } & ...
 */
declare type ShapeTypesMap<T = ShapeTypes> = GUtil.UnionToIntersection<T extends {
    type: any;
} ? {
    [x in T['type']]: T;
} : never>;
declare const ShapeTypesMap: ShapeTypesMap;
declare namespace Shape {
    type Base = import('../core/shape');
    type ShapeMap = ShapeTypesMap;
    type ShapeType = keyof ShapeMap;
    type Attrs<T extends ShapeType | 'base' = ShapeType> = T extends ShapeType ? Partial<ShapeMap[T]['_attrs']> : Partial<Base['_attrs']>;
    type Shape<T extends ShapeType | 'base' = ShapeType> = T extends ShapeType ? ShapeMap[T] : Base;
}
declare type Shape = Shape.Base;
