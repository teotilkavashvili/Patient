import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from 'src/app/interfaces/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  patients:Patient[]=[];
  displayedColumns: string[] = [
    'name', 'surname', 'IdNumber', 'birthDate', 'gender', 'city', 'address','actions'
  ];
  dataSource = new MatTableDataSource<Patient>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private patientService:PatientService
  ) { }

  ngOnInit() {
    this.getPatientList();
  }

  getPatientList(){
    this.patientService.getAllPatients().subscribe(patients=>{
      this.patients = patients;
      this.dataSource = new MatTableDataSource<Patient>(
        this.patients
      );
      setTimeout(()=> this.dataSource.paginator=this.paginator)
    })
  }
  
  editPatient(patient){

  }

  deletePatient(id){

  }

}
