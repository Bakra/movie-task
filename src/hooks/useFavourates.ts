import { useEffect, useState } from "react"

const useFavourates = () => {
    const [favourates, setFavourates] = useState<number[]>([])

    useEffect(() => {
        const fav = localStorage.getItem('fav')
        if (fav) {
            setFavourates(JSON.parse(fav))
        }
    }, [])

    const addToFav = (id: number) => {
        favourates.push(id)
        setFavourates([...favourates])
        localStorage.setItem('fav', JSON.stringify(favourates))
    }

    const isInFavourates = (id: number) => {
        return favourates.includes(id)
    }
    const removeItem = (id: number) => {
        setFavourates([...favourates.filter(item => item !== id)])
    }
    return { addToFav, isInFavourates, removeItem, favourates }
}


export default useFavourates