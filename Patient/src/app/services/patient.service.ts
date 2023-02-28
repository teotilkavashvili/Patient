import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../interfaces/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl = environment.baseUrl;

constructor(private readonly http: HttpClient) { }

public getAllPatients(): Observable<Patient[]> {
  return this.http.get<Patient[]>(`${this.baseUrl}/patients`);
}

public editPatient(patient: any): Observable<Patient> {
  return this.http.patch<Patient>(`${this.baseUrl}/patients/${patient.id}`, patient);
}

public addPatient(patient: any): Observable<Patient> {
  return this.http.post<Patient>(`${this.baseUrl}/patients`, patient)
}

public deletePatient(patientId:any): Observable<boolean> {
  return this.http.delete<boolean>(`${this.baseUrl}/patients/${patientId}`);
}

}
