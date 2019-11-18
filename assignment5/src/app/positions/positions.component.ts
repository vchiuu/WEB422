import { Component, OnInit } from '@angular/core';
import { PositionService } from '../services/position.service'

import { Position } from '../models/position';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  positions: Position[];
  loadingError=false;
  getPositionsSub:any;

  constructor(private positionService: PositionService) { }

  ngOnInit() {
    try {
      this.getPositionsSub = this.positionService.getPositions().subscribe(positions => {
        this.positions = positions;
      })
    } catch {
      this.loadingError = true;
    }
  }

  ngOnDestroy(){
    if (this.getPositionsSub) {
      this.getPositionsSub.unsubscribe();
    }
  }


}
