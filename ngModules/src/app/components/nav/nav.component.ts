import { Route } from '@angular/router';
import { PreloadingService } from './../../services/preloading.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private _preloadingService: PreloadingService) {}

      loadModule(route: string){
        this._preloadingService.comenzarPrecarga(route);
      }
      loadAllModule(){
        this._preloadingService.comenzarPrecarga('*');
      }


}
