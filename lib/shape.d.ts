/// <reference types="@antv/util" />
import Shapes from './shapes';
import ShapeBase from './core/shape';
/**
 * Get union of property types of Shapes
 * @returns - ShapeBase | typeof Element | {} | typeof Arc | typeof Circle | ...
 */
declare type PropertiesOf<T = typeof Shapes, K extends keyof T = keyof T> = K extends keyof T ? T[K] : never;
/**
 * Filter shape sub-classes from properties of Shapes
 * @returns - typeof Arc | typeof Circle | typeof Dom | typeof Ellipse | ...
 */
declare type ShapeSublasses<T = PropertiesOf> = T extends {
    superclass: any;
} ? (T['superclass'] extends typeof ShapeBase ? T : never) : never;
/**
 * Get union of type-shape map
 * @returns - { arc: Arc } | { circle: Circle } | { dom: Dom } | ...
 */
declare type GetShapeMap<T = InstanceType<ShapeSublasses>> = T extends {
    type: any;
} ? {
    [x in T['type']]: T;
} : never;
declare namespace Shape {
    type Base = import('./core/shape');
    type ShapeMap = GUtil.UnionToIntersection<GetShapeMap>;
    type ShapeType = keyof ShapeMap;
    type Attrs<T extends ShapeType = ShapeType> = T extends ShapeType ? ShapeMap[T]['_attrs'] : never;
    type Shape<T extends ShapeType = ShapeType> = T extends ShapeType ? ShapeMap[T] : never;
}
declare type Shape = Shape.Base;
export default Shape;
