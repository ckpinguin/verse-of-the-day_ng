import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ImageViewComponent } from './image-view/image-view.component';

const routes: Routes = [
  // {
    // path: '',
    // component:
    // children: [AppComponent]
  // }
];

export const appRouting = RouterModule.forRoot(routes);
export const routingComponents = [ ImageViewComponent ];
