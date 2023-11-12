// import { HttpBackend } from '@angular/common/http';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { Component } from '@angular/core';


@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss'],

})
export class ComparisonComponent {

  constructor(public chart:ChartjsModule){

  }
  collegeList=["KLS GIT","Angadi Instute Of Tech","SheshGiri"];
  selectedCollege=this.collegeList[0];

data:any;

  getCollegeData(e:any){
    this.selectedCollege=e.target.value;
    console.log(this.selectedCollege);
    console.log("college changed successfully")
    this.data = {
      labels: ['SS', 'FSR', 'FQE', 'FRU', 'PU', 'QP', 'IPR','FPPP','GPH','GUE','MS','GPHD','RD','WD','ESCS','PCS'],
      datasets: [
        {
          label: 'OUR COLLEGE',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 80, 40,10]
        },
        {
          label: this.selectedCollege,
          backgroundColor: '#f2400',
          data: [40, 20, 12, 39, 10, 80, 40,10]
        }
      ]
    };
    //to write get request to retrive the data of other colleges
    // and write get request to fetc data of our college

  }

}
