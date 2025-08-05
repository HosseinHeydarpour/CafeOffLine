import { Component, inject } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-navigation',
  imports: [TuiIcon],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
