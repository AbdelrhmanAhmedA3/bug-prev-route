import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TabsModule } from 'primeng/tabs';
import { NavigationService } from '../../../core';

@Component({
  selector: 'app-home',
  imports: [TabsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly router = inject(Router);
  protected readonly navigationService = inject(NavigationService);
  readonly Tabs = {
    ALL_CUSTOMERS: 0,
    ALL_GROUPS: 1,
  };

  activeTab = signal<any>(this.Tabs.ALL_CUSTOMERS);
  ngOnInit() {
    const previousUrl = this.navigationService.getPreviousUrl();
    if (previousUrl?.includes('group')) {
      this.activeTab.set(this.Tabs.ALL_GROUPS);
    }
  }
}
