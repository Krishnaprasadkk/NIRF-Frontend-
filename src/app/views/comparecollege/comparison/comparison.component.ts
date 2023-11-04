// import { HttpBackend } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})
export class ComparisonComponent {

  collegeList=["KLS GIT","Angadi Instute Of Tech","SheshGiri"];
  selectedCollege=this.collegeList[0];

  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 80, 40]
      }
    ]
  };

  getCollegeData(e:any){
    this.selectedCollege=e.target.value;
    console.log("college changed successfully")
    //to write get request to retrive the data of other colleges
    // and write get request to fetc data of our college

  }

}
