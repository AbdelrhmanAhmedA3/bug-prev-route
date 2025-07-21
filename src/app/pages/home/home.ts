import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TabsModule } from 'primeng/tabs';
import { filter, pairwise } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [TabsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly router = inject(Router);
  readonly Tabs = {
    ALL_CUSTOMERS: 0,
    ALL_GROUPS: 1,
  };

  activeTab = signal<any>(this.Tabs.ALL_CUSTOMERS);
  ngOnInit() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        pairwise() // get previous and current NavigationEnd
      )
      .subscribe(([previous, current]) => {
        console.log(previous);

        if (previous.url.includes('/group')) {
          this.activeTab.set(this.Tabs.ALL_GROUPS);
          console.log(this.activeTab());
        }
      });
  }
}
