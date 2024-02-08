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
    title: [{ value: '', disabled: true}, Validators.required],
    year: [{ value: '', disabled: true}, Validators.min(1885)],
    director: [{ value: '', disabled: true}, Validators.required],
    synopsis: [{ value: '', disabled: true}, Validators.required],
  });

}
