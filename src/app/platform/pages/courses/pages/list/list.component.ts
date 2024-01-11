import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { Level, LevelResponse } from '../../interfaces/level.interface';
import { UiService } from '../../../../services/ui.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  levels: Level[] = [];
  slug: string = '';
  loading: boolean =  true;

  constructor(
    private activateRouted: ActivatedRoute,
    private coursesService: CoursesService,
    private router: Router,
    private uiService: UiService
  ) { }

  ngOnInit(): void {
    this.uiService.setLoading();
    this.activateRouted.params.subscribe(({slug}) => {
      this.slug = slug;
      this.coursesService.getLevels({
        category__slug: this.slug,
        time: Date.now()
      })
      .then((response: LevelResponse) => {
        this.levels = response.results;
        this.loading = false;
      })
      .catch(console.error)
      .finally(() => {
        this.uiService.setLoading();
      })
    });
  }

  enterCourse(slug: string) {
    this.router.navigate(['/platform/courses/', this.slug, slug]);
  }

}
