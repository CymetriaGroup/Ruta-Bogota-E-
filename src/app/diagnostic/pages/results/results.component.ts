import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../../services/rest.service';
import { User } from '../../interfaces/user.interface';
import { barOptions, radarOptions } from './chart-options';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  title: string = 'Resultado Estado de Madurez';
  subtitle: string = '';
  user!: User;
  barData: any;
  barOptions: any;
  data: any;
  radarOptions: any;
  error: string = '';
  url: string = '';

  labels: string[] = [
    'Estrategia',
    'Innovación',
    'Mercadeo',
    'Comercial',
    'Operaciones',
    'Finanzas',
    'Talento Humano',
    'Social y Ambiental',
    'Tendencias',
  ];

  meta: number[] = [
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private restService: RestService
  ) {
    this.barOptions = barOptions;
    this.radarOptions = radarOptions;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.url = `${window.location.origin}/diagnostico/#/results/${id}`;
      this.restService.getUser(id).then(user => {
        this.user = user;

        const data = [
          this.user.total_strategy,
          this.user.total_innovation,
          this.user.total_merchant,
          this.user.total_commercial,
          this.user.total_operations,
          this.user.total_finance,
          this.user.total_human,
          this.user.total_social,
          this.user.total_trends
        ]

        const reducer = (accumulator: number, curr: number) => accumulator + curr;
        const totalData = data.reduce(reducer);
        const totalMeta = this.meta.reduce(reducer);

        const avg = ( totalData * 100 ) / totalMeta;
        let level: string = '';
        let message: string = '';

        if (avg > 0 && avg <= 25) {
          level = '1 (25%)';
          message = '<strong>Ideación: </strong>Empresas o negocios nuevos en proceso de formalización que están inmersos en dinámicas de ideación y validación de producto.';
        } else if (avg > 25 && avg <= 50) {
          level = '2 (50%)';
          message = '<strong>Tracción: </strong>Emprendimientos o negocios existentes que tienen potencial de ingresos estables y auto sostenibles.';
        } else if (avg > 50 && avg <= 75) {
          level = '3 (75%)';
          message = '<strong>Crecimiento:</strong> Empresas o emprendimientos con tracción sostenible y con procesos organizados y digitalizados.';
        } else {
          level = '4 (100%)';
          message = '<strong>Expansión:</strong> Empresas existentes que tienen potencial de expandir o diversificar su actividad, generando nuevos empleos, sofisticar y modernizar sus estructuras, consolidándose en su crecimiento y expansión.';
        }

        this.subtitle = `
          <div>Este es el nivel de madurez de tu emprendimiento o idea de negocio de acuerdo a las preguntas que acabas de responder, te invitamos a fortalecer estas habilidades a través del desarrollo de tu Ruta Personalizada en la plataforma de Ruta Bogotá e</div>
          <h1>Nivel ${level}</h1>
          <p>${message}</p>
        `;


        this.loadBarChart(data);
        this.loadRadarChart(data);
      }).catch(err => {
        this.error = err.error.detail;
      })
    });
  }

  loadBarChart(data: number[]) {
    this.barData = {
      labels: this.labels,
      datasets: [
          {
              label: 'Mis resultados',
              backgroundColor: '#42A5F5',
              data
          },
          {
            label: '',
            backgroundColor: 'transparent',
            data: this.meta
        }
      ]
    };
  }

  loadRadarChart(data: number[]) {
    this.data = {
        labels: this.labels,
        datasets: [
            {
                label: 'Puntación actual',
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data
            },
            {
                label: 'Puntaje deseado',
                backgroundColor: 'transparent',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: this.meta
            }
        ]
    };

  }

}
