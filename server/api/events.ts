export default cachedEventHandler(async (event) => {
    const apiUrl = "https://api.brawlstars.com/v1/events/rotation"

    try {
        console.log("Fetching current events")
        const data = await $fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${process.env.BRAWL_STARS_API_TOKEN}`
            }
        })
        return data
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch event data:'
        })
    }
}, {
    maxAge: 60 * 60
})