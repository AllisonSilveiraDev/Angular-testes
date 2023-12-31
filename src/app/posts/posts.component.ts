import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_POSTS } from '../graphql.oparations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_POSTS,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.posts = data.posts;
        this.error = error;
      });
  }
}
