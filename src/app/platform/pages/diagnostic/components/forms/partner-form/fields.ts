import { document_type, departments } from '../constants/shared';
export const fieldPartner1 = [
  {
    label: 'Tipo de documento',
    type: 'input-select',
    name: 'document_type_1',
    values: document_type,
    isRequired: true
  },
  {
    label: 'Número de documento',
    type: 'input-number',
    name: 'document_1',
    values: [],
    isRequired: true
  },
  {
    label: 'Nombres',
    type: 'input-text',
    name: 'first_name_1',
    values: [],
    isRequired: true
  },
  {
    label: 'Apellidos',
    type: 'input-text',
    name: 'last_name_1',
    values: [],
    isRequired: true
  },
  {
    label: 'Sexo',
    type: 'input-select',
    name: 'genre_1',
    values: [
      {
        value: 'F',
        name: 'Mujer'
      },
      {
        value: 'M',
        name: 'Hombre'
      },
      {
        value: 'I',
        name: 'Intersexual'
      },
      {
        value: 'T',
        name: 'Transgenero'
      }
    ],
    isRequired: true
  },
  {
    label: 'Fecha de nacimiento',
    type: 'input-date',
    name: 'birthday_1',
    values: [],
    isRequired: true,
    startYear: 1930,
    endYear: 2007
  },
  {
    label:'¿Qué cargo ocupa el ciudadano(a) dentro del emprendimiento (IE) o la unidad productiva (UP)?',
    type: 'input-select',
    name: 'position_1',
    values: [
      {
        value: '1',
        name: 'Propietario y/o socio(a)'
      },
      {
        value: '2',
        name: 'Administrador(a)'
      },
      {
        value: '3',
        name: 'Empleado(a)'
      },
      {
        value: '4',
        name: 'Familiar'
      }
    ],
    isRequired: true
  },
  {
    label: 'Municipio',
    type: 'input-select',
    name: 'department_1',
    values: departments,
    isRequired: true
  },
  {
    label: 'Localidad',
    type: 'input-select',
    name: 'location_1',
    values: [
      {
        name: 'Antonio Nariño',
        value: '1'
      },
      {
        name: 'Barrios Unidos',
        value: '2'
      },
      {
        name: 'Bosa',
        value: '3'
      },
      {
        name: 'Chapinero',
        value: '4'
      },
      {
        name: 'Ciudad Bolivar',
        value: '5'
      },
      {
        name: 'Engativá',
        value: '6'
      },
      {
        name: 'Fontibón',
        value: '7'
      },
      {
        name: 'Kennedy',
        value: '8'
      },
      {
        name: 'La Candelaria',
        value: '9'
      },
      {
        name: 'Los Mártires',
        value: '10'
      },
      {
        name: 'Puente Aranda',
        value: '11'
      },
      {
        name: 'Rafael Uribe',
        value: '12'
      },
      {
        name: 'San Cristobal',
        value: '13'
      },
      {
        name: 'Santa Fe',
        value: '14'
      },
      {
        name: 'Suba',
        value: '15'
      },
      {
        name: 'Sumapaz',
        value: '16'
      },
      {
        name: 'Teusaquillo',
        value: '17'
      },
      {
        name: 'Tunjuelito',
        value: '18'
      },
      {
        name: 'Usaquén',
        value: '19'
      },
      {
        name: 'Usme',
        value: '20'
      }
    ],
    isRequired: false,
    dependField: 'department_1',
    dependValue: '1'
  },
  {
    label: 'Dirección de la residencia',
    type: 'input-text',
    name: 'address_1',
    values: [],
    isRequired: true
  },
  {
    label: 'Barrio ',
    type: 'input-text',
    name: 'neighborhood_1',
    values: [],
    isRequired: true
  },
  {
    label: 'Estrato socioeconómico del lugar de residencia',
    type: 'input-select',
    name: 'stratum_1',
    values: [
      {
        value: '1',
        name: 'Bajo - Bajo',
      },
      {
        value: '2',
        name: 'Bajo',
      },
      {
        value: '3',
        name: 'Medio - Bajo',
      },
      {
        value: '4',
        name: 'Medio',
      },
      {
        value: '5',
        name: 'Medio - Alto',
      },
      {
        value: '6',
        name: 'Alto',
      },
      {
        value: '7',
        name: 'Zona sin estrato'
      }
    ],
    isRequired: true
  },
  {
    label: 'Teléfono fijo',
    type: 'input-phone',
    name: 'phone_1',
    values: [],
    isRequired: true
  },
  {
    label: 'Teléfono móvil',
    type: 'input-phone',
    name: 'mobile_1',
    values: [],
    isRequired: true
  },
  {
    label: 'Correo electrónico',
    type: 'input-email',
    name: 'email_1',
    values: [],
    isRequired: true
  },
  {
    label: '¿Cuál es el nivel educativo más alto alcanzado por el ciudadano(a)',
    type: 'input-select',
    name: 'education_1',
    values: [
      {
        value: '1',
        name: 'Primaria'
      },
      {
        value: '2',
        name: 'Secundaria'
      },
      {
        value: '3',
        name: 'Técnica / Tecnológica'
      },
      {
        value: '4',
        name: 'Universitaria'
      },
      {
        value: '5',
        name: 'Especialización'
      },
      {
        value: '6',
        name: 'Maestría'
      },
      {
        value: '7',
        name: 'Doctorado'
      },
      {
        value: '8',
        name: 'Ninguno'
      }
    ],
    isRequired: true
  },
  {
    label: 'La orientación sexual del ciudadano(a)',
    type: 'input-select',
    name: 'sexual_orientation_1',
    values: [
      {
        value: '1',
        name: 'Asexualidad'
      },
      {
        value: '2',
        name: 'Bisexualidad'
      },
      {
        value: '3',
        name: 'Demisexualidad'
      },
      {
        value: '4',
        name: 'Heterosexual'
      },
      {
        value: '5',
        name: 'Homosexualidad'
      },
      {
        value: '6',
        name: 'Lesbiana'
      },
      {
        value: '7',
        name: 'Monosexualidad'
      },
      {
        value: '8',
        name: 'Polisexualidad'
      },
      {
        value: '9',
        name: 'Ninguna de las anteriores'
      }
    ],
    isRequired: true
  },
  {
    label: '¿El ciudadano(a) presenta alguna discapacidad?',
    type: 'input-select',
    name: 'disability_1',
    values: [
      {
        value: '1',
        name: 'Auditiva'
      },
      {
        value: '2',
        name: 'Cognitiva'
      },
      {
        value: '3',
        name: 'Física'
      },
      {
        value: '4',
        name: 'Múltiple'
      },
      {
        value: '5',
        name: 'Psicosocial'
      },
      {
        value: '6',
        name: 'Sordo - Ceguera'
      },
      {
        value: '7',
        name: 'Visual'
      },
      {
        value: '8',
        name: 'No presenta discapacidad'
      }
    ],
    isRequired: true
  }
];



export const fieldPartner2 = [
  {
    label: 'Tipo de documento',
    type: 'input-select',
    name: 'document_type_2',
    values: [
      {
        value: 'CC',
        name: 'Cédula de ciudadanía'
      },
      {
        value: 'CE',
        name: 'Cédula de extranjería'
      },
      {
        value: 'TI',
        name: 'Tarjeta de identidad'
      },
      {
        value: 'NUIP',
        name: 'Número único de identificación personal'
      },
      {
        value: 'PP',
        name: 'Pasaporte'
      },
      {
        value: 'TE',
        name: 'Tarjeta de extranjería'
      },
      {
        value: 'RC',
        name: 'Registro civil de nacimiento'
      },
    ],
    isRequired: true
  },
  {
    label: 'Número de documento',
    type: 'input-number',
    name: 'document_2',
    values: [],
    isRequired: true
  },
  {
    label: 'Nombres',
    type: 'input-text',
    name: 'first_name_2',
    values: [],
    isRequired: true
  },
  {
    label: 'Apellidos',
    type: 'input-text',
    name: 'last_name_2',
    values: [],
    isRequired: true
  },
  {
    label: 'Sexo',
    type: 'input-select',
    name: 'genre_2',
    values: [
      {
        value: 'F',
        name: 'Mujer'
      },
      {
        value: 'M',
        name: 'Hombre'
      },
      {
        value: 'I',
        name: 'Intersexual'
      },
      {
        value: 'T',
        name: 'Transgenero'
      }
    ],
    isRequired: true
  },
  {
    label: 'Fecha de nacimiento',
    type: 'input-date',
    name: 'birthday_2',
    values: [],
    isRequired: true,
    startYear: 1930,
    endYear: 2003
  },
  {
    label:'¿Qué cargo ocupa el ciudadano(a) dentro del emprendimiento (IE) o la unidad productiva (UP)?',
    type: 'input-select',
    name: 'position_2',
    values: [
      {
        value: '1',
        name: 'Propietario y/o socio(a)'
      },
      {
        value: '2',
        name: 'Administrador(a)'
      },
      {
        value: '3',
        name: 'Empleado(a)'
      },
      {
        value: '4',
        name: 'Familiar'
      }
    ],
    isRequired: true
  },
  {
    label: 'Municipio',
    type: 'input-select',
    name: 'department_2',
    values: departments,
    isRequired: true
  },
  {
    label: 'Localidad',
    type: 'input-select',
    name: 'location_2',
    values: [
      {
        name: 'Antonio Nariño',
        value: '1'
      },
      {
        name: 'Barrios Unidos',
        value: '2'
      },
      {
        name: 'Bosa',
        value: '3'
      },
      {
        name: 'Chapinero',
        value: '4'
      },
      {
        name: 'Ciudad Bolivar',
        value: '5'
      },
      {
        name: 'Engativá',
        value: '6'
      },
      {
        name: 'Fontibón',
        value: '7'
      },
      {
        name: 'Kennedy',
        value: '8'
      },
      {
        name: 'La Candelaria',
        value: '9'
      },
      {
        name: 'Los Mártires',
        value: '10'
      },
      {
        name: 'Puente Aranda',
        value: '11'
      },
      {
        name: 'Rafael Uribe',
        value: '12'
      },
      {
        name: 'San Cristobal',
        value: '13'
      },
      {
        name: 'Santa Fe',
        value: '14'
      },
      {
        name: 'Suba',
        value: '15'
      },
      {
        name: 'Sumapaz',
        value: '16'
      },
      {
        name: 'Teusaquillo',
        value: '17'
      },
      {
        name: 'Tunjuelito',
        value: '18'
      },
      {
        name: 'Usaquén',
        value: '19'
      },
      {
        name: 'Usme',
        value: '20'
      }
    ],
    isRequired: false,
    dependField: 'department_2',
    dependValue: '1'
  },
  {
    label: 'Dirección de la residencia',
    type: 'input-text',
    name: 'address_2',
    values: [],
    isRequired: true
  },
  {
    label: 'Barrio ',
    type: 'input-text',
    name: 'neighborhood_2',
    values: [],
    isRequired: true
  },
  {
    label: 'Estrato socioeconómico del lugar de residencia',
    type: 'input-select',
    name: 'stratum_2',
    values: [
      {
        value: '1',
        name: 'Bajo - Bajo',
      },
      {
        value: '2',
        name: 'Bajo',
      },
      {
        value: '3',
        name: 'Medio - Bajo',
      },
      {
        value: '4',
        name: 'Medio',
      },
      {
        value: '5',
        name: 'Medio - Alto',
      },
      {
        value: '6',
        name: 'Alto',
      },
      {
        value: '7',
        name: 'Zona sin estrato'
      }
    ],
    isRequired: true
  },
  {
    label: 'Teléfono fijo',
    type: 'input-text',
    name: 'phone_2',
    values: [],
    isRequired: true
  },
  {
    label: 'Teléfono móvil',
    type: 'input-text',
    name: 'mobile_2',
    values: [],
    isRequired: true
  },
  {
    label: 'Correo electrónico',
    type: 'input-email',
    name: 'email_2',
    values: [],
    isRequired: true
  },
  {
    label: '¿Cuál es el nivel educativo más alto alcanzado por el ciudadano(a)',
    type: 'input-select',
    name: 'education_2',
    values: [
      {
        value: '1',
        name: 'Primaria'
      },
      {
        value: '2',
        name: 'Secundaria'
      },
      {
        value: '3',
        name: 'Técnica / Tecnológica'
      },
      {
        value: '4',
        name: 'Universitaria'
      },
      {
        value: '5',
        name: 'Especialización'
      },
      {
        value: '6',
        name: 'Maestría'
      },
      {
        value: '7',
        name: 'Doctorado'
      },
      {
        value: '8',
        name: 'Ninguno'
      }
    ],
    isRequired: true
  },
  {
    label: 'La orientación sexual del ciudadano(a)',
    type: 'input-select',
    name: 'sexual_orientation_2',
    values: [
      {
        value: '1',
        name: 'Asexualidad'
      },
      {
        value: '2',
        name: 'Bisexualidad'
      },
      {
        value: '3',
        name: 'Demisexualidad'
      },
      {
        value: '4',
        name: 'Heterosexual'
      },
      {
        value: '5',
        name: 'Homosexualidad'
      },
      {
        value: '6',
        name: 'Lesbiana'
      },
      {
        value: '7',
        name: 'Monosexualidad'
      },
      {
        value: '8',
        name: 'Polisexualidad'
      },
      {
        value: '9',
        name: 'Ninguna de las anteriores'
      }
    ],
    isRequired: true
  },
  {
    label: '¿El ciudadano(a) presenta alguna discapacidad?',
    type: 'input-select',
    name: 'disability_2',
    values: [
      {
        value: '1',
        name: 'Auditiva'
      },
      {
        value: '2',
        name: 'Cognitiva'
      },
      {
        value: '3',
        name: 'Física'
      },
      {
        value: '4',
        name: 'Múltiple'
      },
      {
        value: '5',
        name: 'Psicosocial'
      },
      {
        value: '6',
        name: 'Sordo - Ceguera'
      },
      {
        value: '7',
        name: 'Visual'
      },
      {
        value: '8',
        name: 'No presenta discapacidad'
      }
    ],
    isRequired: true
  }
];
