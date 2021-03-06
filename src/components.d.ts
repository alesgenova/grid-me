/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import 'split-me';
import {
  EventEmitter,
} from '@stencil/core';
import {
  IResizeEvent,
} from './components/square-me/interfaces';


export namespace Components {

  interface SquareMe {
    /**
    * Prevent columns from being resized
    */
    'fixedH': boolean;
    /**
    * Prevent rows from being resized
    */
    'fixedV': boolean;
    /**
    * The number of rows in the grid.
    */
    'm': number;
    /**
    * The columns maximum sizes
    */
    'maxSizesH': string | number[];
    /**
    * The rows maximum sizes
    */
    'maxSizesV': string | number[];
    /**
    * The columns minimum sizes
    */
    'minSizesH': string | number[];
    /**
    * The rows minimum sizes
    */
    'minSizesV': string | number[];
    /**
    * The number of columns in the grid.
    */
    'n': number;
    /**
    * The initial column sizes. Acceptable formats are: `"0.33, 0.67"` or `"50%, 25%, 25%"`
    */
    'sizesH': string | number[];
    /**
    * The initial row sizes. Acceptable formats are: `"0.33, 0.67"` or `"50%, 25%, 25%"`
    */
    'sizesV': string | number[];
    /**
    * The minimum time (in ms) between column resize events while dragging.
    */
    'throttleH': number;
    /**
    * The minimum time (in ms) between row resize events while dragging.
    */
    'throttleV': number;
  }
  interface SquareMeAttributes extends StencilHTMLAttributes {
    /**
    * Prevent columns from being resized
    */
    'fixedH'?: boolean;
    /**
    * Prevent rows from being resized
    */
    'fixedV'?: boolean;
    /**
    * The number of rows in the grid.
    */
    'm'?: number;
    /**
    * The columns maximum sizes
    */
    'maxSizesH'?: string | number[];
    /**
    * The rows maximum sizes
    */
    'maxSizesV'?: string | number[];
    /**
    * The columns minimum sizes
    */
    'minSizesH'?: string | number[];
    /**
    * The rows minimum sizes
    */
    'minSizesV'?: string | number[];
    /**
    * The number of columns in the grid.
    */
    'n'?: number;
    /**
    * Emitted every time dragging causes the columns to resize
    */
    'onSlotResizedH'?: (event: CustomEvent<IResizeEvent>) => void;
    /**
    * Emitted every time dragging causes the rows to resize
    */
    'onSlotResizedV'?: (event: CustomEvent<IResizeEvent>) => void;
    /**
    * The initial column sizes. Acceptable formats are: `"0.33, 0.67"` or `"50%, 25%, 25%"`
    */
    'sizesH'?: string | number[];
    /**
    * The initial row sizes. Acceptable formats are: `"0.33, 0.67"` or `"50%, 25%, 25%"`
    */
    'sizesV'?: string | number[];
    /**
    * The minimum time (in ms) between column resize events while dragging.
    */
    'throttleH'?: number;
    /**
    * The minimum time (in ms) between row resize events while dragging.
    */
    'throttleV'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'SquareMe': Components.SquareMe;
  }

  interface StencilIntrinsicElements {
    'square-me': Components.SquareMeAttributes;
  }


  interface HTMLSquareMeElement extends Components.SquareMe, HTMLStencilElement {}
  var HTMLSquareMeElement: {
    prototype: HTMLSquareMeElement;
    new (): HTMLSquareMeElement;
  };

  interface HTMLElementTagNameMap {
    'square-me': HTMLSquareMeElement
  }

  interface ElementTagNameMap {
    'square-me': HTMLSquareMeElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
