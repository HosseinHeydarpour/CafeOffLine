import { inject, Injectable, signal } from '@angular/core';
import { TUI_DARK_MODE_KEY, TUI_DARK_MODE } from '@taiga-ui/core';
import { WA_LOCAL_STORAGE, WA_WINDOW } from '@ng-web-apis/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  darkTheme = signal(false);

  toggleTheme(): void {
    this.darkTheme.set(!this.darkTheme());
    document.body.classList.toggle('dark', this.darkTheme());
  }

  checkDarkMode() {
    return this.darkTheme();
  }
}
