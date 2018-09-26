import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private angularfireAuth: AngularFireAuth) {}
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.angularfireAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), error => reject(error));
    });
  }
  getAuth() {
    return this.angularfireAuth.authState;
  }
  logout() {
    this.angularfireAuth.auth.signOut();
  }
}
