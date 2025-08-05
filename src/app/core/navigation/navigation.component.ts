import { Component, inject } from '@angular/core';

import { ThemeService } from '../../shared/services/theme.service';
import { Router } from 'express';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
