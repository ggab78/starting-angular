import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10;
  serverStatus = '';
  userName = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'ofline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus() {
    return this.serverStatus + ' from method';
  }
}
