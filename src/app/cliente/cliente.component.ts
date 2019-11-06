import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  clienteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente){
    this.clienteForm = new FormGroup({
      nome: new FormControl(cliente.nome),
      cpf: new FormControl(cliente.cpf)
    })
  }

  salvar(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })}
     this.http.post<Cliente>('http://localhost:4200/api/clientes', this.clienteForm.value, httpOptions)
     .subscribe(data => console.log("Inserido com sucesso"))
  }

}
