import { Component, OnInit } from '@angular/core';

import { PatientService } from '../../patient.service';
import { Patient } from '../../Model/patient';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService ) { }

  ngOnInit() {
    this.patients = this.patientService.getPatients();
  }

}
