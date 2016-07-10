import {  Component, 
          ElementRef,
          EventEmitter, 
          OnInit, 
          AfterViewInit,
          OnChanges
        } from '@angular/core';

import { FORM_DIRECTIVES } from '@angular/common';

declare var $:JQueryStatic;

export class Champion {
  id: number;
  type: string;
  hp: number;
}

const CHAMPIONS: Champion[] = [
 { id: 1, 
    type: 'Elementalist',
    hp: 50 },
 { id: 2, 
    type: 'Paragon',
    hp: 30 },
];

@Component({
  selector: 'stats',
  templateUrl: 'app/stats.component.html',
  properties: ['playerHP'],
  events: ['playerHPChange'],
  directives: [FORM_DIRECTIVES]
})

export class StatsComponent implements OnInit, AfterViewInit, OnChanges { 
  playerHP: number;

  constructor() {
    this.playerHP = 100;

  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    
  }

  ngOnChanges() {
    this.renderProgress(this.playerHP);
  }



  renderStatBar(value) {
    value = Math.floor(value);
    console.log(value);
  }




  renderProgress(progress) {
    progress = Math.floor(progress);
    if (progress<25) {
      var angle = -90 + (progress/100)*360;
      $(".animate-0-25-b").css("transform","rotate("+angle+"deg)");
    }
    else if (progress>=25 && progress<50) {
      var angle = -90 + ((progress-25)/100)*360;
      $(".animate-0-25-b").css("transform","rotate(0deg)");
      $(".animate-25-50-b").css("transform","rotate("+angle+"deg)");
    }
    else if (progress>=50 && progress<75) {
      var angle = -90 + ((progress-50)/100)*360;
      $(".animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)");
      $(".animate-50-75-b").css("transform","rotate("+angle+"deg)");
    }
    else if (progress>=75 && progress<=100) {
      var angle = -90 + ((progress-75)/100)*360;
      $(".animate-50-75-b, .animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)");
      $(".animate-75-100-b").css("transform","rotate("+angle+"deg)");
    }
    $(".text").html(progress+"%");
  }
}