import { makeAutoObservable } from "mobx"

export default class GameStore {
    constructor() {
        this._genres = [
            { id: 1, name: 'Action' },
            { id: 2, name: 'RPG' },
            { id: 3, name: 'Sport' },
            { id: 4, name: 'Horror' }
        ]
        this._types = [
            { id: 1, name: 'PS4' },
            { id: 2, name: 'Xbox' },
            { id: 3, name: 'Steam'}
        ]
        this._games = [
            { id: 1, name: 'gta5', price: 900, rating: 5, img: 'https://igroray.ru/upload/resize_cache/iblock/c83/400_400_140cd750bba9870f18aada2478b24840a/igra_grand_theft_auto_v_gta_5_xbox_360_russkaya_versiya.jpg.webp' },
            { id: 2, name: 'gta5', price: 900, rating: 5, img: 'https://igroray.ru/upload/resize_cache/iblock/c83/400_400_140cd750bba9870f18aada2478b24840a/igra_grand_theft_auto_v_gta_5_xbox_360_russkaya_versiya.jpg.webp' },
            { id: 3, name: 'gta5', price: 900, rating: 5, img: 'https://igroray.ru/upload/resize_cache/iblock/c83/400_400_140cd750bba9870f18aada2478b24840a/igra_grand_theft_auto_v_gta_5_xbox_360_russkaya_versiya.jpg.webp' },
            { id: 4, name: 'gta5', price: 900, rating: 5, img: 'https://igroray.ru/upload/resize_cache/iblock/c83/400_400_140cd750bba9870f18aada2478b24840a/igra_grand_theft_auto_v_gta_5_xbox_360_russkaya_versiya.jpg.webp' },
            { id: 5, name: 'gta5', price: 900, rating: 5, img: 'https://igroray.ru/upload/resize_cache/iblock/c83/400_400_140cd750bba9870f18aada2478b24840a/igra_grand_theft_auto_v_gta_5_xbox_360_russkaya_versiya.jpg.webp' },
            { id: 6, name: 'gta5', price: 900, rating: 5, img: 'https://igroray.ru/upload/resize_cache/iblock/c83/400_400_140cd750bba9870f18aada2478b24840a/igra_grand_theft_auto_v_gta_5_xbox_360_russkaya_versiya.jpg.webp' },
            { id: 7, name: 'gta5', price: 900, rating: 5, img: 'https://igroray.ru/upload/resize_cache/iblock/c83/400_400_140cd750bba9870f18aada2478b24840a/igra_grand_theft_auto_v_gta_5_xbox_360_russkaya_versiya.jpg.webp' },
        ]
        this._selectedGenre = {}
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setGenres(genres) {
        this._genres = genres
    }
    setTypes(types) {
        this._types = types
    }
    setGame(games) {
        this._games = games
    }
    setSelectedGenre(genre) {
        this._selectedGenre = genre
    }
    setSelectedType(type) {
        this._selectedType = type
    }

    get genres() {
        return this._genres
    }
    get games() {
        return this._games
    }
    get types() {
        return this._types
    }
    get selectedGenre() {
        return this._selectedGenre
    }
    get selectedType() {
        return this._selectedType
    }
}