import { Component, OnInit, Input } from '@angular/core';
import { SidebarRoot } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() sidebarData: SidebarRoot[]

  constructor() { }

  ngOnInit() {
  }

}
