import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

    private medias: Map<string, any> = new Map();
    public change: EventEmitter<any[]> = new EventEmitter();

    constructor(private storage: Storage) {
        console.log('Hello StorageProvider Provider');
        this.init();
    }

    addMedia(media: any) {
        this.medias.set(media.imdbID, media);
        this.storage.set('user_medias', this.medias);
        this.change.emit(Array.from(this.medias.values()));
    }

    removeMedia(media: any) {
        this.medias.delete(media.imdbID);
        this.storage.set('user_medias', this.medias);
        this.change.emit(Array.from(this.medias.values()));
    }

    public isFavorite(id : any){
        return this.medias.has(id);
    }

    private async init() {
        try {
            const medias = await this.storage.get('user_medias');
            if (medias !== null && medias instanceof Map) {
                this.medias = new Map<string, any>(medias);
                this.change.emit(Array.from(this.medias.values()));
            } else {
                this.medias = new Map();
            }
        } catch (err) {
            console.log(err)
        }
    }

    public load() {
        this.change.emit(Array.from(this.medias.values()));
    }
}
