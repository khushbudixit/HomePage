import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-agentform',
  templateUrl: './agentform.component.html',
  styleUrls: ['./agentform.component.css']
})
export class AgentformComponent implements OnInit {

  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DialogExampleComponent);
  }

}
