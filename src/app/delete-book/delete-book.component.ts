import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  imports: [],
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.scss',
})
export class DeleteBookComponent {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {
    // this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    // alternative
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })
  }
}
