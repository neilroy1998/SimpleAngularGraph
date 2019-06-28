import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeDashServiceService } from '../home-dash-service.service';
import { DashDispGraphTypeService } from '../dash-disp-graph-type.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  public msg: string;
  public type: string;
  constructor(private homeDashNameService: HomeDashServiceService, 
    private dashDispGraphTypeService: DashDispGraphTypeService,
    private router: Router) { }

  ngOnInit() {
    this.msg = this.homeDashNameService.returnHomeDashName();
    console.log("::" + this.msg);
    if (this.msg === undefined) {
      this.msg = 'Joe';
      console.log(this.msg);
    }
  }

  graphTypesVals: graphTypes[] = [
    {id: 0, name: 'Line Graph', source: 'https://i.ibb.co/pdDfbVv/line.png'},
    {id: 1, name: 'Pie  Graph', source: 'https://i.ibb.co/nsTGgvd/pie.png'},
    {id: 2, name: 'Bar  Graph', source: 'https://i.ibb.co/1ZJsJWz/bar.png'},
    {id: 3, name: 'Radar  Graph', source: 'https://i.ibb.co/3r8J3QN/radar.png'},
    {id: 4, name: 'Doughnut  Graph', source: 'https://i.ibb.co/6yH6VFH/doughnut.png'},

  ]

  onSelectType(graphType) {
    this.type = graphType['name'];
    console.log(this.type);
    this.dashDispGraphTypeService.getGraphType(this.type);
    this.router.navigate(['./disp-graph']);
  }

}

class graphTypes {
  id: number;
  name: string;
  source: string;
}
