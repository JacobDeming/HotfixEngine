import { ElementRef } from '@angular/core';
export declare class ModalBackdropOptions {
    animate: boolean;
    constructor(options: ModalBackdropOptions);
}
export declare class ModalBackdropComponent {
    isAnimated: boolean;
    isShown: boolean;
    element: ElementRef;
    constructor(options: ModalBackdropOptions, element: ElementRef);
}
