import { Injectable } from '@angular/core';
import { Comment } from './model/comment';

@Injectable()
export class CommentService {

  comments: { [id: number]: Comment[] } = {};

  constructor() { }

  public getComments(movieId: number): Comment[] {
    this.check(movieId);
    return this.comments[movieId];
  }

  public saveComment(movieId: number, comment: Comment) {
    this.check(movieId);
    this.comments[movieId].push(comment);
  }

  private check(movieId: number) {
    if (!this.comments[movieId]) {
      this.comments[movieId] = [];
    }
  }
}
