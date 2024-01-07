import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    
    const observer = {
      next : (item : unknown) => console.log(`Une boite arrive ${item}`),
      error : (err : unknown) => console.log(`Erreur ${err}`),
      complete : () => console.log('termine ... plus rien'),
    }

    const stream = new Observable(myObserve => {
      myObserve.next('Boite N1');
      myObserve.next('Boite N2');
      myObserve.next('Boite N3');
      myObserve.complete();
    });

    stream.subscribe(observer);
  }
}
