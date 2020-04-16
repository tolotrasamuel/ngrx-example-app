import { Component, OnInit, Input } from '@angular/core';
import {SampleModel} from '../../models/sample-model';


@Component({
  selector: 'app-joke-card-item',
  templateUrl: './sample-item.component.html',
  styleUrls: ['./sample-item.component.css']
})
export class SampleItemComponent implements OnInit {
  @Input() joke: SampleModel;

  constructor() { }

  ngOnInit() {
  }

}
