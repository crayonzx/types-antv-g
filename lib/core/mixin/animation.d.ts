declare const Mixin: {
    /**
     * 执行动画
     * @param  {Object}   toProps  动画最终状态
     * @param  {Number}   duration 动画执行时间
     * @param  {String}   easing   动画缓动效果
     * @param  {Function} callback 动画执行后的回调
     * @param  {Number}   delay    动画延迟时间
     */
    animate: Mixin.IAnimate;
    stopAnimate(): void;
    pauseAnimate(): any;
    resumeAnimate(): any;
};
export = Mixin;
declare type Mixin = typeof Mixin;
declare namespace Mixin {
    interface IProps {
        transform: any;
        rotate: any;
        matrix: any;
    }
    interface IAnimate {
        (toProps: IProps, duration: number, easing?: string, delay?: number): void;
        (toProps: IProps, duration: number, callback: () => void, delay?: number): void;
        (toProps: IProps, duration: number, easing: string, callback: () => void, delay?: number): void;
    }
}
