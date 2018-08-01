import { Component, OnInit } from '@angular/core';
import { Comment } from '../model/comment';
import { CommentService } from '../comment.service';
import { Movie } from '../model/movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieId: number;
  comments: Comment[];
  newComment: Comment = new Comment();
  movie: Movie;

  constructor(
    private commentService: CommentService,
    private movieService: MovieService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.movieId = +this.router.snapshot.paramMap.get('id');
    this.comments = this.commentService.getComments(this.movieId);
    this.getMovie();
  }

  submitComment() {
    this.commentService.saveComment(this.movieId, this.newComment);
    this.newComment = new Comment();
  }

  getMovie() {
    this.movieService.getMovieDetails(this.movieId).subscribe(movie => {
      this.movie = movie;
    });
  }
}
