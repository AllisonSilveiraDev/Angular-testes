import { Component } from '@angular/core';

//importando o service de alert
import { AlertButtonService } from 'src/app/services/alert-button.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  constructor() {}

  //cria uma nova instancia da classe AlertButtonService
  alertButtonService = new AlertButtonService();

  dispararAlert() {
    //usa o metodo da intancia de AlertButtonService
    this.alertButtonService.alerta('Sou o Alert do AlertButtonService');
  }
}
