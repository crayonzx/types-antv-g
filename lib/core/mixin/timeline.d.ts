declare const Timeline1: (new (canvas: any) => {} & {
    initTimer(): void;
    addAnimator(shape: any): void;
    removeAnimator(index: any): void;
    isAnimating(): boolean;
    stop(): void;
    stopAllAnimations(): void;
    getTime(): any;
}) & {};
declare class Timeline extends Timeline1 {
}
export = Timeline;
