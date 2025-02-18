export default defineEventHandler(async (event) => {
    const { tag } = event.context.params as { tag: string }
    
    console.log(`Fetching player data for ${tag}`)
    try {
        const response = await fetch(`https://api.brawlstars.com/v1/players/%23${tag}`, {
            headers: {
                Authorization: `Bearer ${process.env.BRAWL_STARS_API_TOKEN}`
            }
        })

        if (!response.ok) {
            throw new Error(`API responded with ${response.status}`);
        }

        const data = await response.json()
        return {
            status: 200,
            body: data
        }
    } catch (error) {
        console.error(error);
        return {
            status: 500,
            body: {
                error: 'Failed to fetch player data',
                details: error instanceof Error ? error.message : 'Unknown error'
            }
        }
    }
})