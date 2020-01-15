import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = '';
  serverName = '';
  isCreated = false;
  servers = ['test_1', 'test_2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created! Server name is' + this.serverName;
    this.servers.push(this.serverName);
    this.isCreated = true;
  }

  onUpdateServerName($event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
