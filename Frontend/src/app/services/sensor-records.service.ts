import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable, of, Subject } from 'rxjs';
import { SensorRecord } from '../models/SensorRecord';

@Injectable({
  providedIn: 'root'
})
export class SensorRecordsService {

  constructor(private http: HttpClient, private router: Router) { }

  
  private sensorsRecords: SensorRecord[] = [];
  private updatedSensorsRecords = new Subject<SensorRecord[]>();


  addNewSensorRecord(
    id: number,
    value: number,
    sensorId: number
  ) {
    const newElement: SensorRecord = {
    id: id,
    value: value,
    sensorId: sensorId,
    };
    console.log(newElement)
    this.http
      .post<{ message: string; sensorId: number }>(
        'http://localhost:3000/api/sensorRecord',
        newElement
      )
      .subscribe((responseData) => {
        const sensorId = responseData.sensorId;
      });
  }

  sendEndSignal() {
    const newElement: SensorRecord = {
    id: -1,
    value: null,
    sensorId: null,
    };
    this.http
      .post<{ message: string; sensorId: number }>(
        'http://localhost:3000/api/sensorRecord',
        newElement
      );
  }

  getSensorUpdateListener(){
    return this.updatedSensorsRecords.asObservable();
  }
}
