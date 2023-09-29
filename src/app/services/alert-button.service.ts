export class AlertButtonService {
  constructor() {}

  alerta(msg: string) {
    alert(msg);
  }
}

//criada a classe sem injetar com decorator no root que acredito que seja a classe app.module.ts

// @Injectable({
//   providedIn: 'root',
// })
