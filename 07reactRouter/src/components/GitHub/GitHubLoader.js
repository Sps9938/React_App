
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sps9938')
    return response.json()
}

export const anotherLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}