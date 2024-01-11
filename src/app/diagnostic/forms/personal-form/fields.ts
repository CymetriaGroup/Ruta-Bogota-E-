import { document_type, departments } from '../constants/shared';
export const fields = [
  {
    label: 'Tipo de documento',
    type: 'input-select',
    name: 'document_type',
    values: document_type,
    isRequired: true
  },
  {
    label: 'Número de documento',
    type: 'input-number',
    name: 'document',
    values: [],
    isRequired: true
  },
  {
    label: 'Nombres',
    type: 'input-text',
    name: 'first_name',
    values: [],
    isRequired: true
  },
  {
    label: 'Apellidos',
    type: 'input-text',
    name: 'last_name',
    values: [],
    isRequired: true
  },
  {
    label: 'Fecha de nacimiento',
    type: 'input-date',
    name: 'birthday',
    values: [],
    isRequired: true,
    startYear: 1930,
    endYear: 2007
  },
  {
    label: 'Municipio del lugar de residencia',
    type: 'input-select',
    name: 'department',
    values: departments,
    isRequired: true
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
    dependValue: '1'
  },
  {
    label: 'Teléfono móvil',
    type: 'input-phone',
    name: 'mobile',
    values: [],
    isRequired: true
  },
  {
    label: 'Correo electrónico',
    type: 'input-email',
    name: 'email',
    values: [],
    isRequired: true
  },
  {
    label: 'Contraseña',
    type: 'input-password',
    name: 'password',
    values: [],
    isRequired: true
  },
  {
    label: 'Confirmar contraseña',
    type: 'input-password',
    name: 'cpassword',
    values: [],
    isRequired: true
  }
];
