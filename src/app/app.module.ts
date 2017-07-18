import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, IAppState, INITIAL_STATE } from '../store';
import { CounterActions } from './app.actions';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [ CounterActions ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    NgRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension) {

      const storeEnhancers = devTools.isEnabled() ?
        [ devTools.enhancer() ] : 
        [];
    
    NgRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      storeEnhancers);
  }
}
