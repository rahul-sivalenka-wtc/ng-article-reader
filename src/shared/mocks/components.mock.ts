import { Component } from '@angular/core';

/**
 * Reference: https://medium.com/@cnunciato/a-simple-mock-component-for-angular-2-d79bd58a7b31
 * 
 * Modified By:
 * Phani Rahul Sivalenka
 */
export function MockComponent(options: Component): any {
  let metadata: Component = {
    selector: options.selector,
    template: options.template || '',
    inputs: options.inputs,
    outputs: options.outputs
  };
  return Component(metadata)(class _ {});
}