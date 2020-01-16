import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId = 10;
  serverStatus = '';
  userName = '';
  detailText = '';
  details = ['detail 1', 'detail 2'];


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  onAddDetail() {
    this.details.push(this.detailText);
    this.detailText = '';

  }
  getDetailColor(i) {
    return i >= 5 ? 'blue' : 'white';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }


  getServerStatus() {
    return this.serverStatus + ' from method';
  }
}
