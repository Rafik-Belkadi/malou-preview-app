export interface Post {
    id?: number;
    caption: string;
    image: string;
    date: string;
    time: string;
    state: "Programmé" | "Brouillon" | "Publié",
    changed: boolean
}
export const posts: Post[] = [
    {
        id: 1,
        caption: "lorem ipsum dolor",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "16/08/2021",
        time: "17:00",
        state: "Programmé",
        changed: false
    },
    {
        id: 2,
        caption: "lorem ipsum dolor",
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "14/08/2021",
        time: "17:00",
        state: "Programmé",
        changed: false
    },
    {
        id: 3,
        caption: "lorem ipsum dolor",
        image: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        date: "12/08/2021",
        time: "17:00",
        state: "Programmé",
        changed: false
    },
    {
        id: 4,
        caption: "lorem ipsum dolor",
        image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        date: "10/08/2021",
        time: "17:00",
        state: "Programmé",
        changed: false
    },
    {
        id: 5,
        caption: "lorem ipsum dolor",
        image: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        date: "08/08/2021",
        time: "17:00",
        state: "Programmé",
        changed: false
    },
    {
        id: 6,
        caption: "lorem ipsum dolor",
        image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        date: "06/08/2021",
        time: "17:00",
        state: "Programmé",
        changed: false
    },
    {
        id: 7,
        caption: "lorem ipsum dolor",
        image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        date: "04/08/2021",
        time: "17:00",
        state: "Programmé",
        changed: false
    },
    {
        id: 8,
        caption: "lorem ipsum dolor",
        image: "https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        date: "02/08/2021",
        time: "17:00",
        state: "Programmé",
        changed: false
    },
    {
        id: 9,
        caption: "lorem ipsum dolor",
        image: "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        date: "01/08/2021",
        time: "17:00",
        state: "Programmé",
        changed: false
    },
    {
        id: 10,
        caption: "lorem ipsum dolor",
        image: "https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        date: "30/07/2021",
        time: "17:00",
        state: "Programmé",
        changed: false
    },
    {
        id: 11,
        caption: "lorem ipsum dolor",
        image: "https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        date: "28/07/2021",
        time: "17:00",
        state: "Programmé",
        changed: false
    },
]











