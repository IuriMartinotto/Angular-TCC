import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  usuarios = [''];

  constructor(private fb: FormBuilder, private fakeApi: AuthService) {}

  ngOnInit(): void {
    this.getUsuarios();

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
  });
  }

  getUsuarios() {
    this.fakeApi.getJson().subscribe((res) => {
      this.usuarios = res;
    });
  }

  logar(email: any, senha: any) {
    let usuario = this.usuarios.find(
      (x: any) => x.email === email && x.senha === senha
    );

    if (usuario) {
      console.log('deu certo');
    } else {
      console.log('deu errado');
    }
  }
}
