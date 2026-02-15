export class Register {
  id?: number;

  fullName!: string;
  dob!: string;          // MUST be string in Angular
  gender!: string;

  address!: string;
  phone!: string;
  emailid!: string;
  password!: string;

  course!: string;
  previousSchool!: string;
  qualification!: string;
  percentage!: number;  // MUST be number
}
