import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Character } from './../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Output()
  public onIndexCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ];

  onDeleteCharacter( id?: string ): void {

    if( !id ) return;

    this.onIndexCharacter.emit(id);
  }
}
