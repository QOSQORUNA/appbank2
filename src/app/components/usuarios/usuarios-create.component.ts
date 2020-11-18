import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { UsuariosResponse } from '../shared/models/response/usuarios.response';
import { UsuariosRequest } from '../shared/models/request/usuarios.request';

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.css']
})
export class UsuariosCreateComponent implements OnInit {
  usuario = new UsuariosRequest();
  showAlert = false;
  
  // resultado: Array<UsuariosResponse>;

  constructor(private db: DbService) { 
  
    
  }

  ngOnInit() {
  }

  toCreate(form: NgForm) {
    this.db.toCreateUser(form.value).subscribe(res => {
      this.showAlert = true;
      res.valueOf();
      form.reset();
    });
    console.log(form.value);
  }
}
