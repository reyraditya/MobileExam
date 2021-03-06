import { ADD_PLACE, DELETE_PLACE, CREATE_DATA } from './actionTypes'

export const addPlace = placeName => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    }
}

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    }
}

export const createData = (items) => {
    var arrData = []
    var rawData = items.val()
    if(rawData){
        Object.keys(rawData).forEach(id => {
            arrData.push({
                key: id,
                value: rawData[id].nama,
                value2: rawData[id].usia,
                value3: rawData[id].jabatan,
                image: {
                    uri: "https://freerangestock.com/sample/78746/halloween-cat-icon-means-trick-or-treat-and-autumn.jpg"
                }
            })
        })
    }

    return {
        type: CREATE_DATA,
        payload: arrData
    }
}





















