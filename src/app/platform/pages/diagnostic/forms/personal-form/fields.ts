import { document_type, departments } from '../constants/shared';
export const fields = [
  {
    label: 'Tipo de documento',
    type: 'input-select',
    name: 'document_type',
    values: document_type,
    isRequired: true,
    readOnly: false
  },
  {
    label: 'Número de documento',
    type: 'input-number',
    name: 'document',
    values: [],
    isRequired: true,
    readOnly: false
  },
  {
    label: 'Fecha de nacimiento',
    type: 'input-date',
    name: 'birthday',
    values: [],
    isRequired: true,
    startYear: 1930,
    endYear: 2007,
    readOnly: false
  },
  {
    label: 'Municipio del lugar de residencia',
    type: 'input-select',
    name: 'department',
    values: departments,
    isRequired: true,
    readOnly: false
  },
  {
    label: 'Localidad',
    type: 'input-select',
    name: 'location',
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
    dependField: 'department',
    dependValue: '1',
    readOnly: false
  },
  {
    label: 'Barrio ',
    type: 'input-text',
    name: 'neighborhood',
    values: [],
    isRequired: true
  },
  {
    label: 'Dirección de la residencia',
    type: 'input-text',
    name: 'address',
    values: [],
    isRequired: true
  },
  {
    label: 'Teléfono fijo',
    type: 'input-phone',
    name: 'phone',
    values: [],
    isRequired: true
  },
  {
    label: 'Sexo',
    type: 'input-select',
    name: 'genre',
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
    label: 'Estrato socioeconómico del lugar de residencia',
    type: 'input-select',
    name: 'stratum',
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
    label: '¿Cuál es el nivel educativo más alto alcanzado por el ciudadano(a)',
    type: 'input-select',
    name: 'education',
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
    label: '¿El ciudadano(a) presenta alguna discapacidad?',
    type: 'input-select',
    name: 'disability',
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
  },
  {
    label: '¿El ciudadano(a) se reconoce en alguno de estos grupos étnicos?',
    type: 'input-select',
    name: 'ethnic',
    values: [
      {
        value: '1',
        name: 'Indígena'
      },
      {
        value: '2',
        name: 'Gitano'
      },
      {
        value: '3',
        name: 'Raizal'
      },
      {
        value: '4',
        name: 'Palenquera de San Basilic'
      },
      {
        value: '5',
        name: 'Negro - Afrocolombiano'
      },
      {
        value: '6',
        name: 'Otro, ¿Cuál?'
      },
      {
        value: '7',
        name: 'Ninguna de las anteriores'
      },
    ],
    isRequired: true
  },
  {
    label: 'Ingrese grupo étnico',
    type: 'input-text',
    name: 'other_ethnic',
    dependField: 'ethnic',
    dependValue: '6',
    values: [],
    isRequired: false
  },
  {
    label: 'La orientación sexual del ciudadano(a)',
    type: 'input-select',
    name: 'sexual_orientation',
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
    label: '¿El ciudadano(a) realiza alguna de estas actividades?',
    type: 'input-select',
    name: 'activity',
    values: [
      {
        value: '1',
        name: 'Cuidado de niños y niñas'
      },
      {
        value: '2',
        name: 'Cuidado de personas con discapacidad'
      },
      {
        value: '3',
        name: 'Cuidado de personas mayores'
      },
      {
        value: '16',
        name: 'Cuidado de mascotas'
      },
      {
        value: '4',
        name: 'Personas en ejercicio de prostitución'
      },
      {
        value: '5',
        name: 'Reciclador - Corotero'
      },
      {
        value: '6',
        name: 'Vendedores ambulantes - estacionarios'
      },
      {
        value: '7',
        name: 'Artista'
      },
      {
        value: '8',
        name: 'Miembro de culturas urbanas'
      },
      {
        value: '9',
        name: 'Habitante de calle'
      },
      {
        value: '10',
        name: 'Cabeza de familia'
      },
      {
        value: '11',
        name: 'Desmovilizado(a)'
      },
      {
        value: '14',
        name: 'Reinsertado(a)'
      },
      {
        value: '13',
        name: 'Ninguno de los anteriores'
      },
      {
        value: '15',
        name: 'Victima del conflicto armado'
      }
    ],
    isRequired: true
  }
];
