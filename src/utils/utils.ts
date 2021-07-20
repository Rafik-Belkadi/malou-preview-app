import { Post } from "../data/posts-mock";
import moment from 'moment'


const mode = (arr: any[]) => {
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length
        - arr.filter(v => v === b).length
    ).pop();
}

export const getMostOccurentTime = (array: Post[]) => {
    const arr = array.map(e => e.time)
    return mode(arr)
}

export const getNextDate = (array: Post[]) => {
    var diffArray = []
    for (let index = 0; index < array.length; index++) {
        if (index + 1 === array.length) break;
        const element = moment(array[index].date, 'DD/MM/yyyy');
        const nextElement = moment(array[index + 1].date, 'DD/MM/yyyy')
        diffArray.push(element.diff(nextElement))
    }
    const daysToAdd = mode(diffArray)

    return moment(array[0].date, 'DD/MM/yyyy').add(daysToAdd).format('DD/MM/yyyy')
}

