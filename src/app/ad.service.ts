import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(
        HeroProfileComponent,
        { name: 'Books', bio: "Search the world's most comprehensive index of full-text books" }
      ),
      new AdItem(
        HeroProfileComponent,
        { name: 'Movies', bio: "Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience." }
      ),
      new AdItem(
        HeroProfileComponent,
        { name: 'Tv Series', bio: "These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV." }
      ),
      new AdItem(
        HeroProfileComponent,
        {name: 'Music', bio: "Find your sound today. Listen to Music Vine's acclaimed catalog of world-class artists, composers, and producers – trusted by the world's leading brands."}
      ),
      new AdItem(
        HeroJobAdComponent,
        { headline: 'Arancia Mediatica', body: 'La app per gestire i tuoi interessi!' }
      ),
     
    ];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/