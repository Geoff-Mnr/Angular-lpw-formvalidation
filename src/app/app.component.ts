import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movies';

  fb = inject(FormBuilder);

  form = this.fb.group({
    title: ['', Validators.required],
    year: ['', [Validators.required, Validators.min(1896)]],
    director: ['', Validators.required],
    synopsis: ['', [Validators.required, Validators.minLength(5)]],
  });

}
