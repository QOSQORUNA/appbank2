import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../../services/db.service';
import { UsuariosResponse } from '../shared/models/response/usuarios.response';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  resultado: Array<UsuariosResponse>;
  mensajeLogin = false;
  constructor(private db: DbService,
              private router: Router) { }

  ngOnInit() {
    this.obtenerClientes();
  }


  obtenerClientes() {
    this.db.getClients().subscribe(data => {
      this.resultado = data;
    },
    err => {
      this.mensajeLogin = true;
      console.log(err);
    }
    );
  }
  goAccount(index: number) {
    this.router.navigate( ['/accounts', index]);
  }

}
