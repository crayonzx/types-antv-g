declare const Mixin: {
    canFill: boolean;
    canStroke: boolean;
    initAttrs(attrs: any): any;
    getDefaultAttrs<T extends {
        _attrs: any;
    }>(this: T): T["_attrs"];
    /**
     * 设置或者设置属性，有以下 4 种情形：
     *   - name 不存在, 则返回属性集合
     *   - name 为字符串，value 为空，获取属性值
     *   - name 为字符串，value 不为空，设置属性值，返回 this
     *   - name 为键值对，value 为空，设置属性值
     *
     * @param  {String | Object} name  属性名
     * @param  {*} value 属性值
     * @return {*} 属性值
     */
    attr: Mixin.IAttr;
    _setAttr(name: any, value: any): void;
    clearBBox(): void;
    hasFill(): any;
    hasStroke(): any;
    _setClip(item: any): void;
};
export = Mixin;
import Shapes from '../../shapes';
declare type Mixin = typeof Mixin;
declare namespace Mixin {
    type Attrs<T extends {
        _attrs: {};
    }> = T['_attrs'];
    interface IAttr {
        /** Get all attrs */
        <T extends {
            _attrs: {};
        }>(this: T): Attrs<T>;
        /** Get attr by name  */
        <T extends {
            _attrs: {};
        }, K extends keyof Attrs<T>>(this: T, name: K): Attrs<T>[K];
        /** Set partial of attrs */
        <T extends {
            _attrs: {};
        }>(this: T, values: Partial<Attrs<T>>): void;
        /** Set attr by name and value */
        <T extends {
            _attrs: {};
        }, K extends keyof Attrs<T>>(this: T, name: K, value: Attrs<T>[K]): void;
        <T extends Shapes.ShapeType>(): Required<Shapes.Attrs<T>>;
        <T extends Shapes.ShapeType, K extends keyof Shapes.Attrs<T>>(name: K): Required<Shapes.Attrs<T>>[K];
        <T extends Shapes.ShapeType>(values: Partial<Shapes.Attrs<T>>): void;
        <T extends Shapes.ShapeType, K extends keyof Shapes.Attrs<T>>(name: K, value: Required<Shapes.Attrs<T>>[K]): void;
    }
}
