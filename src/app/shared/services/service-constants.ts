import {Headers} from '@angular/http';
import {BASE_URL} from '../../../environments/environment';

//Constants
const PROJECT = BASE_URL + 'project';
const COLLECTION = BASE_URL + 'collection';
const USER = BASE_URL + 'user';


export const PROJECT_BY_ID = PROJECT + '/get?id=:id';
export const TINDER_PROJECT = PROJECT + '/tinder';
export const ALL_PROJECTS = PROJECT + '/getAll';
export const TINDER_LIKE_PROJECT = PROJECT + '/TiderLike/:id';

//Project collections
export const PROJECTS_COLLECTIONS = {
  nearlyFunded: COLLECTION + '/nearlyfunded',
  justLaunched: COLLECTION + '/justlaunched',
  trending: COLLECTION + '/trending',
  recommended: COLLECTION + '/recommended'
};

//User urls
export const USER_CREATE = USER + '/create';


export class Replace {
  /**
   * Recibe un path y un id.
   * Reemplaza en path el literal ':id' con el valor del parametro id.
   * @param path
   * @param id
   * @returns {string}
   */
  static replaceId(path: string, id: number) {
    const pattern = ':id';
    return path.replace(pattern, id.toString());
  }

}

export class Util {
  /**
     * Agrega query params al path basePath. Recibe un array de KeyValue.
     * @param basePath
     * @param params
     * @returns {string}
     */
  static appendQueryParams(basePath: string, params ){ //KeyValue[]) {
    if (params == null)
      return basePath;
    basePath = basePath + '?';

    for (let param of params) {
      const fullParam = param.key + '=' + param.value;
      basePath = basePath + fullParam + '&';
    }
    basePath = basePath.substring(0, basePath.length - 1);
    return basePath;
  }
}




