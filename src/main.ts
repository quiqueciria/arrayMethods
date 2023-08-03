type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// APARTADO 5 -------------- ¡pendiente!

// const cuentaPacientesPorEspecialidad = (
//   pacientes: Pacientes[]
// ): NumeroPacientesPorEspecialidad => {
//   const totalPacientes = pacientes.reduce(
//     (acc, paciente) => {
//       if (paciente.especialidad === "Medico de familia") {
//         acc.medicoDeFamilia++;
//       } else if (paciente.especialidad === "Pediatra") {
//         acc.pediatria++;
//       } else if (paciente.especialidad === "Cardiólogo") {
//         acc.cardiologia++;
//       }
//       return acc;
//     },
//     { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0 }
//   );

//   return totalPacientes;
// };

// console.log(cuentaPacientesPorEspecialidad(pacientes));

//APARTADO 4 - OK

// const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
//   const pediatraACasa = pacientes.some(
//     (paciente) => paciente.especialidad === "Pediatra"
//   );
//   return pediatraACasa;
// };

// console.log(HayPacientesDePediatria(pacientes));

//APARTADO 3 OK con matices. No me da como sugerencia la especialidad el VS

// const reasignaPacientesAMedicoFamilia = (
//   pacientes: Pacientes[]
// ): Pacientes[] => {
//   const asignarPediatriaAMedicoFamilia = pacientes.map((paciente) => {
//     return {
//       ...paciente,
//       epecialidad: "Medico de familia",
//     };
//   });
//   return asignarPediatriaAMedicoFamilia;
// };

// console.log(reasignaPacientesAMedicoFamilia(pacientes));
// console.log(pacientes);

// APARTADO 2 OK con matices, no he usado el modelo exactamente de función que nos daba el laboratorio

// const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
//   const activarUrgencia = pacientes.every(
//     (paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
//   );
//   return activarUrgencia;
// };

// console.log(activarProtocoloUrgencia(pacientes));

// APARTADO 1 - OK

// const obtenPacientesAsignadosAPediatria = (
//   pacientes: Pacientes[]
// ): Pacientes[] => {
//   const pacientesPediatria = pacientes.filter(
//     (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
//   );
//   return pacientesPediatria;
// };

// console.log(obtenPacientesAsignadosAPediatria(pacientes));
