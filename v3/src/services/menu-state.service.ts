 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuStateService {

  private activeNoddeId: string | null=null;

  setActiveNode(nodeId:string):void{
    this.activeNoddeId;
  }

  getActiveNode():string| null{
    return this.activeNoddeId;
  }

  isActive(nodeid:string): boolean{
    return this.activeNoddeId===nodeid;
  }
 }