/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import 'split-me';


export namespace Components {

  interface GridMe {
    'fixedH': boolean;
    'fixedV': boolean;
    'm': number;
    'maxSizesH': string | number[];
    'maxSizesV': string | number[];
    'minSizesH': string | number[];
    'minSizesV': string | number[];
    'n': number;
    'sizesH': string | number[];
    'sizesV': string | number[];
  }
  interface GridMeAttributes extends StencilHTMLAttributes {
    'fixedH'?: boolean;
    'fixedV'?: boolean;
    'm'?: number;
    'maxSizesH'?: string | number[];
    'maxSizesV'?: string | number[];
    'minSizesH'?: string | number[];
    'minSizesV'?: string | number[];
    'n'?: number;
    'sizesH'?: string | number[];
    'sizesV'?: string | number[];
  }
}

declare global {
  interface StencilElementInterfaces {
    'GridMe': Components.GridMe;
  }

  interface StencilIntrinsicElements {
    'grid-me': Components.GridMeAttributes;
  }


  interface HTMLGridMeElement extends Components.GridMe, HTMLStencilElement {}
  var HTMLGridMeElement: {
    prototype: HTMLGridMeElement;
    new (): HTMLGridMeElement;
  };

  interface HTMLElementTagNameMap {
    'grid-me': HTMLGridMeElement
  }

  interface ElementTagNameMap {
    'grid-me': HTMLGridMeElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}