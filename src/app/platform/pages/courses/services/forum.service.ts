import { Injectable } from '@angular/core';
import { SDK } from '../../../../sdk/sdk';
import { Comment, Forum, Post } from '../interfaces/forum.interface';

@Injectable({
  providedIn: 'root'
})
export class ForumService extends SDK {

  addPost(post: Post) {
    return this.post<Post>(`${this.endpoints.forum.post}/`, post);
  }

  getPost(post: Post) {
    return this.get<Forum>(`${this.endpoints.forum.post}/`, {
      course: post.course,
      time: Date.now()
    });
  }

  addComment(post: Post) {
    return this.post<Comment>(`${this.endpoints.forum.comment}/`, {
      post: post.id,
      description: post.comment
    });
  }

}
