import {URIS} from '../uris';

export class UrisUtils {

  public static getDetailLink(id: number): any[] {
    return [id];
  }

  public static getListLink(): any[] {
    return ['/' + URIS.POKEMON_LIST];
  }

}
