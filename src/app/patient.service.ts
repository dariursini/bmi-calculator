import { dataPatient } from './dataPatient';
import { Patient } from './Model/patient';

export class PatientService {
  patient: Patient[] = dataPatient;

  getPatients() {
    return this.patient.slice();
  }
}
