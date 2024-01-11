import { Component, OnInit, Input } from '@angular/core';
import { Testimony } from '../../pages/dashboard/interfaces/testimony.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() testimonies: Testimony[] = [];
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 4
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ];

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  sanitizeVideo(video: string) {
    const url = `https://www.youtube.com/embed/${video}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
