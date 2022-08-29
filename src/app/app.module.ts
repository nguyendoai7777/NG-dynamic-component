import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tab-hard-rendering/tabs/tabs.component';
import { TabsBodyComponent } from './components/tab-hard-rendering/tabs-body/tabs-body.component';
import { FormsModule } from '@angular/forms';
import { TabPanelComponent } from './components/tab-dynamic-redering/tab.panel.component';
import { TabGroupComponent } from './components/tab-dynamic-redering/tab-group.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FilterTwoComponent } from './components/filter-two/filter-two.component';
import { TabBsGroupComponent } from './components/tab-dynamic-redering/tab-bs-group.component';
import { TabContentDirective } from './directives/tab-content.directive';
import { CounterComponent } from './components/tab-dynamic-redering/counter.component';
import { TransformDirective } from './directives/transform.directive';
import { CircleComponent } from './screens/canvas/circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabsBodyComponent,
    TabPanelComponent,
    TabGroupComponent,
    FilterTwoComponent,
    TabBsGroupComponent,
    TabContentDirective,
    CounterComponent,
    TransformDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
