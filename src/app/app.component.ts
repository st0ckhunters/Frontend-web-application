import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from '../shared/components/footer/footer/footer.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {HeaderComponent} from '../shared/components/header/header.component';
import {NgOptimizedImage} from '@angular/common';
import {SignUpViewComponent} from '../auth/views/sign-up-view/sign-up-view.component';
import {InfoService} from '../shared/components/home/services/info.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, MatButtonToggleModule, MatToolbarModule, MatButtonModule, MatIconModule,
    MatSlideToggleModule, HeaderComponent, SignUpViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any){
    throw new Error('Method not implemented.');
  }
  infos: any[]=[];
  constructor(private infoService: InfoService) {}
  ngOnInit() {
    this.infoService.getAllInfo().subscribe(data => {
      this.infos = data;
    });
  }
  changeLang(es:String){

  }
}
