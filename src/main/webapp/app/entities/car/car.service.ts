import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ICar } from 'app/shared/model/car.model';

type EntityResponseType = HttpResponse<ICar>;
type EntityArrayResponseType = HttpResponse<ICar[]>;

@Injectable({ providedIn: 'root' })
export class CarService {
  public resourceUrl = SERVER_API_URL + 'api/cars';
  public resourceUrlV2 = SERVER_API_URL + 'api/v2/cars';

  constructor(protected http: HttpClient) {}

  create(car: ICar): Observable<EntityResponseType> {
    return this.http.post<ICar>(this.resourceUrl, car, { observe: 'response' });
  }

  update(car: ICar): Observable<EntityResponseType> {
    return this.http.put<ICar>(this.resourceUrl, car, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICar>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICar[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  createV2(car: ICar, files: FileList): Observable<EntityResponseType> {
    const carMultipartFormParam = 'car';
    const filesMultipartFormParam = 'files';
    const formData: FormData = new FormData();
    const carAsJsonBlob: Blob = new Blob([JSON.stringify(car)], {type: 'application/json'});
 
    formData.append(carMultipartFormParam, carAsJsonBlob);
    for (let i = 0; i < files.length; i++) {
        formData.append(filesMultipartFormParam, files.item(i));
    }
 
    return this.http.post<ICar>(this.resourceUrlV2, formData, { observe: 'response' });
 }
}
