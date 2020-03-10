import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoaderService} from '../../../core/services/loader.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading: boolean;
  constructor(private loaderService: LoaderService,
              private cdRef: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.loaderService.loading.pipe(
        tap(isLoading => {
              this.isLoading = isLoading;
              this.cdRef.detectChanges();
            })
    ).subscribe();
  }
}
