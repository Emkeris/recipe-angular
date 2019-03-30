import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    return this.serverCreationStatus = 'Server has been created!!! Name of server is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    return this.serverName = event.target.value;
  }
}
