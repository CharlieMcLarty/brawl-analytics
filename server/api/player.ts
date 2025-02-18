export default defineEventHandler(async (event) => {
    const { tag } = getQuery(event)
    const apiUrl = `https://api.brawlstars.com/v1/players/%23${tag}`

    try {
        console.log(`Accessing API for ${tag}`)
        const data = await $fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${process.env.BRAWL_STARS_API_TOKEN}`
            }
        })
        return data
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch player data:'
          })
    }
})