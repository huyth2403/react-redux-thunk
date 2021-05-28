const people = [
    { name: 'Nader', age: 36 },
    { name: 'Amanda', age: 24 },
    { name: 'Jason', age: 44 }
  ]

export const fetchAllPeople = () => {
    return new Promise((resol, reject) => {
        setTimeout(() => {
            console.log('done !!!')
            return resol(people)
        }, 3000)
    })
}