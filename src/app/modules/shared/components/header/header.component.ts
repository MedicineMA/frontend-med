import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public user?: SocialUser;

  public routeUrl?: string;

  constructor(private authService: SocialAuthService,
              private authOauthService: AuthService,
              private route: Router
  ) {
    this.routeUrl = this.route.url;
  }

  async signInWithGoogle(): Promise<void> {
    await this.authOauthService.signInWithGoogle()
      .then((user) => {
        this.user = user;
      });
  }

  async signOut(): Promise<void> {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
    if (this.user) {
      await this.authOauthService.googlesignOut();
    }
  }
}
