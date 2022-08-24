import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { render } from '@testing-library/angular';
import { TransformDirective } from './transform.directive';

@Component({
  template: `
    <pre id="lc" transform="lowercase">Hello</pre>
    <pre id="uc" transform="uppercase">Hello</pre>
  `,
})
export class DumpTransformComponent {
}

describe('TransformDirective run: ', () => {
  async function setup() {
    return await render(DumpTransformComponent, {
      declarations: [TransformDirective]
    });
  }

  it('should create an instance', async () => {
    const {fixture} = await setup();
    expect(fixture.componentInstance).toBeTruthy();
  });


  describe('when transform type runs', () => {
    it('to lowercase', async () => {
      const {debugElement} = await setup();
      expect('hello').toEqual(debugElement.query(By.css('#lc')).nativeElement.textContent);
    });

    it('to uppercase', async () => {
      const {debugElement} = await setup();
      expect('HELLO').toEqual(debugElement.query(By.css('#uc')).nativeElement.textContent);
    });
  })

});
