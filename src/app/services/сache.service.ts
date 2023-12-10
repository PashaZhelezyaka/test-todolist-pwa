import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cacheKey = 'tasksCache';

  constructor(private swUpdate: SwUpdate) {
    this.setupCacheInvalidation();
  }

  private setupCacheInvalidation() {
    const updatesAvailable = this.swUpdate.versionUpdates.pipe(
      filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
      map((evt: any) => ({
        type: 'UPDATE_AVAILABLE',
        current: evt.current,
        available: evt.available,
      }))
    );
    }

  cacheTasks(tasks: any[]): void {
    if ('caches' in window) {
      caches.open(this.cacheKey).then(cache => {
        cache.put(this.cacheKey, new Response(JSON.stringify(tasks)));
      });
    }
  }

  async getCachedTasks(): Promise<any[] | null> {
    if ('caches' in window) {
      const cache = await caches.open(this.cacheKey);
      const response = await cache.match(this.cacheKey);

      if (response) {
        const data = await response.json();
        return data;
      }
    }
    return null;
  }
}
