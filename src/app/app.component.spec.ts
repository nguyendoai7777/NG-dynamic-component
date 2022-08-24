import { AppComponent } from './app.component';
import { render } from '@testing-library/angular';
import { By } from '@angular/platform-browser';

describe(AppComponent.name, () => {

  async function setup() {
    return await render(AppComponent, {});
  }

  it('Then Create Component', async () => {
    const {fixture} = await setup();
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  describe('When Render', () => {
    it('Then render router-outlet', async () => {
      const {fixture, debugElement} = await setup();
      const routerOutletElement = debugElement.query(By.css('router-outlet'));
      expect(routerOutletElement).toBeTruthy();
    });
  });

});
