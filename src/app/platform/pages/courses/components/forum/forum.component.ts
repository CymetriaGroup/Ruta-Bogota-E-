import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post, Forum } from '../../interfaces/forum.interface';
import { ForumService } from '../../services/forum.service';
import { UiService } from '../../../../services/ui.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit, OnChanges {

  @Input() course!: number;
  @ViewChild('fForum') fForum!: NgForm;

  loading: boolean = false;
  post!: Post;
  posts: Post[] = [];

  constructor(
    private forumService: ForumService,
    private uiService: UiService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.post = {
      title: '',
      description: '',
      course: this.course
    };
    this.getPosts();
  }

  ngOnInit(): void {

  }



  async getPosts() {
    const forum: Forum = await this.forumService.getPost(this.post);
    this.posts = forum.results;
  }

  async addPost() {
    if (!this.fForum.valid) {
      return;
    }
    try {
      await this.uiService.setLoading();
      await this.forumService.addPost(this.post);
      await this.getPosts();
    } catch (error) {
      console.error(error);
    } finally {
      await this.uiService.setLoading();
      this.fForum.resetForm();
    }
  }

  async addComment(post: Post) {
    try {
      await this.uiService.setLoading();
      await this.forumService.addComment(post);
      await this.getPosts();
    } catch (error) {
      console.error(error);
    } finally {
      await this.uiService.setLoading();
      this.fForum.resetForm();
    }
  }

}
