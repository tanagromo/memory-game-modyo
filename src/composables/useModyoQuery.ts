import { useQuery } from '@tanstack/vue-query'

const BASE_URL = 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries'

export function useModyoQuery(perPage: number = 20) {
  return useQuery({
    queryKey: ['get-modyo-imgs', perPage],
    queryFn: async () => {
      const url = `${BASE_URL}?per_page=${perPage}`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      return data.entries.map((entry: any) => {
        return {
          ...entry.fields.image,
          ...entry.meta
        }
      })
    }
  })
}
