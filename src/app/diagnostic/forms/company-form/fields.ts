import { departments, ciuu } from '../constants/shared';
export const fields = [
  {
    label:'¿Qué cargo ocupa el ciudadano(a) dentro del emprendimiento (IE) o la unidad productiva (UP)?',
    type: 'input-select',
    name: 'position',
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
    label:'Estado de la empresa, emprendimiento o idea',
    type: 'input-select',
    name: 'company_status',
    values: [
      {
        value: '1',
        name: 'Ideación y proceso de formalización (etapa temprana)'
      },
      {
        value: '2',
        name: 'Formalizado y en crecimiento (formalización)'
      },
      {
        value: '3',
        name: 'Consolidación (sostenible)'
      },
      {
        value: '4',
        name: 'Expansión (aceleración)'
      },
    ],
    isRequired: true
  },
  {
    label:'Nombre del emprendimento, empresa o idea de negocios',
    type: 'input-text',
    name: 'name',
    values: [],
    isRequired: true
  },
  {
    label: 'Municipio del emprendimiento o unidad productiva',
    type: 'input-select',
    name: 'department_company',
    values: departments,
    isRequired: true
  },
  {
    label:'Localidad del emprendimiento o unidad productiva',
    type: 'input-select',
    name: 'location_company',
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
    dependField: 'department_company',
    dependValue: '1'
  },
  {
    label:'Barrio del emprendimiento o unidad productiva',
    type: 'input-text',
    name: 'neighborhood_company',
    values: [],
    isRequired: true
  },
  {
    label:'Dirección del emprendimiento o unidad productiva',
    type: 'input-text',
    name: 'address_company',
    values: [],
    isRequired: true
  },
  {
    label:'Teléfono Fijo',
    type: 'input-phone',
    name: 'phone_company',
    values: [],
    isRequired: true
  },
  {
    label:'Teléfono Móvil',
    type: 'input-phone',
    name: 'mobile_company',
    values: [],
    isRequired: true
  },
  {
    label:'Correo electrónico',
    type: 'input-email',
    name: 'email_company',
    values: [],
    isRequired: true
  },
  {
    label:'¿El emprendimiento o unidad productiva tiene cámara de comercio?',
    type: 'input-select',
    name: 'ccb',
    values: [
      {
        value: true,
        name: 'Si',
      },
      {
        value: false,
        name: 'No',
      }
    ],
    isRequired: true
  },
  {
    label:'Nit',
    type: 'input-text',
    name: 'nit',
    values: [],
    isRequired: false,
    dependField: 'ccb',
    dependValue: true
  },
  {
    label:'Fecha de inicio de operaciones',
    type: 'input-date',
    name: 'start_date',
    values: [],
    isRequired: false,
    startYear: 1930,
    endYear: 2021
  },
  {
    label:'Tipo de empresa',
    type: 'input-select',
    name: 'org_type',
    values: [
      {
        value: '1',
        name: 'Sociedad Anonima'
      },
      {
        value: '2',
        name: 'Sociedad en comandita por acciones simplificadas'
      },
      {
        value: '3',
        name: 'Sociedad en comandita simple'
      },
      {
        value: '4',
        name: 'Economía solidaria (Cooperativa)'
      },
      {
        value: '5',
        name: 'Mixta'
      },
      {
        value: '6',
        name: 'Estatal'
      },
      {
        value: '7',
        name: 'Sociedad LTDA'
      },
      {
        value: '8',
        name: 'Persona natural'
      },
      {
        value: '9',
        name: 'Sociedad por acciones simplificada (SAS)'
      },
      {
        value: '10',
        name: 'Sin animo de lucro'
      },
      {
        value: '11',
        name: 'Sociedad colectiva'
      },
      {
        value: '12',
        name: 'Sucursal de sociedad extranjera'
      },
      {
        value: '13',
        name: 'Unipersonal'
      },
      {
        value: '14',
        name: 'Sin definir'
      },
    ],
    isRequired: false,
    dependField: 'ccb',
    dependValue: true
  },
  {
    label:'¿Principalmente en que lugar desarrolla su actividad productiva?',
    type: 'input-select',
    name: 'place',
    values: [
      {
        value:'1',
        name: 'Calle (Ambulante - Estacionaria)'
      },
      {
        value:'2',
        name: 'Campo Terreno Propio'
      },
      {
        value:'3',
        name: 'Campo Terreno arrendado'
      },
      {
        value:'4',
        name: 'Kiosco o caseta'
      },
      {
        value:'5',
        name: 'Local u oficina propia'
      },
      {
        value:'6',
        name: 'Local u oficina en arriendo'
      },
      {
        value:'7',
        name: 'Maquila'
      },
      {
        value:'8',
        name: 'Puerta a puerta'
      },
      {
        value:'9',
        name: 'Satélite'
      },
      {
        value:'10',
        name: 'Vehículo arrendado o prestado'
      },
      {
        value:'11',
        name: 'Vehículo propio'
      },
      {
        value:'12',
        name: 'Vivienda diferente a la suya'
      },
      {
        value:'13',
        name: 'Vivienda que habita'
      },
      {
        value:'14',
        name: 'Emprendimiento no ha iniciado actividades'
      },
      {
        value:'15',
        name: 'Ninguna de las anteriores'
      }
    ],
    isRequired: true
  },
  {
    label:'¿Principalmente que medio utiliza para comercializar sus productos y/o servicios?',
    type: 'input-select',
    name: 'sales_way',
    values: [
      {
        value: '1',
        name: 'Calle (Ambulante - Estacionaria)'
      },
      {
        value: '2',
        name: 'Ferias y eventos'
      },
      {
        value: '3',
        name: 'Internet'
      },
      {
        value: '4',
        name: 'Kiosco o caseta'
      },
      {
        value: '5',
        name: 'Madrugón'
      },
      {
        value: '6',
        name: 'Punto de venta: Local, almacén, taller o fabrica'
      },
      {
        value: '7',
        name: 'Vehículo arrendado o prestado'
      },
      {
        value: '8',
        name: 'Vehículo propio'
      },
      {
        value: '9',
        name: 'Emprendimiento no ha iniciado actividades'
      }
    ],
    isRequired: true
  },
  {
    label:'¿Cuántos socios tiene el emprendimiento o unidad productiva?',
    type: 'input-number',
    name: 'partners_number',
    values: [],
    isRequired: true
  },
  {
    label:'¿Cuántas personas incluido el propietario(a) y socios, trabajan en el emprendimiento o unidad productiva?',
    type: 'input-number',
    name: 'employes_number',
    values: [],
    isRequired: true
  },
  {
    label:'¿La idea de emprendimiento o unidad productiva es de carácter familiar?',
    type: 'input-select',
    name: 'family_company',
    values: [
      {
        value: true,
        name: 'Si',
      },
      {
        value: false,
        name: 'No',
      }
    ],
    isRequired: true
  },
  {
    label:'Número de familias asociadas',
    type: 'input-number',
    name: 'family_associated',
    values: [],
    isRequired: false,
    dependField: 'family_company',
    dependValue: true
  },
  {
    label:'Código CIIU o actividad económica',
    type: 'input-select-filter',
    name: 'ciuu',
    values: ciuu,
    isRequired: true
  },
  {
    label:'Descripción breve del emprendimiento y sus servicios o productos',
    type: 'input-textarea',
    name: 'description',
    values: [],
    isRequired: true
  },
  {
    label:'Experiencia empresarial ',
    type: 'input-select',
    name: 'experience',
    values: [
      {
        value: '1',
        name: 'Primera vez que emprendo'
      },
      {
        value: '2',
        name: 'He tenido empresa'
      },
      {
        value: '3',
        name: 'Soy empleado/desempleado actualmente'
      }
    ],
    isRequired: true
  },
  {
    label:'Su producto o servicio se destaca por',
    type: 'input-select',
    name: 'highlight',
    values: [
      {
        value: '1',
        name: 'Calidad',
      },
      {
        value: '2',
        name: 'Diseño',
      },
      {
        value: '3',
        name: 'Marca',
      },
      {
        value: '4',
        name: 'Innovación',
      },
      {
        value: '5',
        name: 'Precio',
      },
      {
        value: '6',
        name: 'Servicio'
      }
    ],
    isRequired: true
  },
  {
    label:'Las ventas del ultimo año fueron',
    type: 'input-select',
    name: 'sales',
    values: [
      {
        value: '1',
        name: 'No tengo ventas aún'
      },
      {
        value: '1',
        name: 'Entre 1 y 50 millones'
      },
      {
        value: '1',
        name: 'Entre 51 y 250 millones'
      },
      {
        value: '1',
        name: 'Más de 251 millones'
      },
    ],
    isRequired: true
  },
  {
    label:'Su empresa exporta',
    type: 'input-select',
    name: 'export',
    values: [
      {
        value: '1',
        name: 'No exporto y por ahora no me interesa exportar'
      },
      {
        value: '2',
        name: 'No exporto y me gustaria exportar'
      },
      {
        value: '3',
        name: 'Actualmente exporto a otro país'
      }
    ],
    isRequired: true
  },
  {
    label:'Sector ecónomico del emprendimiento o unidad productiva',
    type: 'input-select',
    name: 'economic_sector',
    values: [
      {
        value: '1',
        name: 'Alimentos'
      },
      {
        value: '2',
        name: 'Artesanías'
      },
      {
        value: '3',
        name: 'Agricultura'
      },
      {
        value: '4',
        name: 'Ambiental'
      },
      {
        value: '5',
        name: 'Automotores'
      },
      {
        value: '6',
        name: 'Belleza (peluqueria, spa, cosméticos, tratamientos)'
      },
      {
        value: '7',
        name: 'Bicicletas'
      },
      {
        value: '8',
        name: 'Calzado, cuero y marroquinería'
      },
      {
        value: '9',
        name: 'Confección'
      },
      {
        value: '10',
        name: 'Consultoría, asesoría y Tecnología'
      },
      {
        value: '11',
        name: 'Educación'
      },
      {
        value: '12',
        name: 'Eléctricos, metal y ferretería'
      },
      {
        value: '13',
        name: 'Empaque'
      },
      {
        value: '14',
        name: 'Eventos'
      },
      {
        value: '15',
        name: 'Joyería y bisutería'
      },
      {
        value: '16',
        name: 'Maquinaria y equipo'
      },
      {
        value: '17',
        name: 'Marketing'
      },
      {
        value: '18',
        name: 'Mascotas'
      },
      {
        value: '19',
        name: 'Salud'
      },
      {
        value: '20',
        name: 'Telecomunicaciones'
      },
      {
        value: '21',
        name: 'Publicidad y diseño'
      },
      {
        value: '22',
        name: 'Reciclaje'
      },
      {
        value: '23',
        name: 'Negocios verdes',
      },
      {
        value: '24',
        name: 'Industrias Creativas y Culturales',
      },
      {
        value: '25',
        name: 'Tecnología-Internet',
      }
    ],
    isRequired: true
  },
  {
    label:'¿Qué problema resuelve tu producto o servicio?',
    type: 'input-textarea',
    name: 'problem',
    values: [],
    isRequired: true
  },
  {
    label:'¿Cuál es la propuesta de valor de tu producto o servicio?',
    type: 'input-textarea',
    name: 'proposal',
    values: [],
    isRequired: true
  }
];
