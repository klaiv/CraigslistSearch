import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { PagerService } from '../pager.service';
import { Listings }    from './listings';
import * as _ from 'underscore';
@Component({
  selector: 'app-posts',
  providers: [PagerService],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  // instantiate posts to an empty array
   // array of all items to be paged
  private allItems: any[];

    // pager object
  pager: any = {};
  posts: any = [];
  states: any = [];
  size: any = 0;

  constructor(private postsService: PostsService, private pagerService: PagerService) { }

  model = new Listings('buescher saxophone');

  submitted = false;

  onSubmit() {
  this.postsService.getAllPosts(this.model.searchphrase).subscribe(posts => {
       this.allItems = posts;
       this.posts = posts;


                // initialize to page 1
      //this.setPage(1);
      this.size = posts.length;
    });
  this.submitted = true; }

  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.posts = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
