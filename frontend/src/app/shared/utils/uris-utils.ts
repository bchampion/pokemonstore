import {URIS} from '../uris';

export class UrisUtils {

  public static getDetailLink(id: number): any[] {
    return ['/' + URIS.POKEMON_DETAIL.replace('/:id', ''), id];
  }

  public static getListLink(): any[] {
    return ['/' + URIS.POKEMON_LIST];
  }

}
