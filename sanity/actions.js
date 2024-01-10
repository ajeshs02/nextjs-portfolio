import { groq } from 'next-sanity'
import { readClient } from './lib/client'
import { buildQuery } from './utils'

export const getProjects = async (params) => {
  const { category, page } = params

  // console.log('category: ', category)

  try {
    const projects = await readClient.fetch(
      groq`${buildQuery({
        type: 'projects',
        category,
        page: parseInt(page),
      })}{
        name,
        description,
        link,
        "image": image.asset->url,
        category,
        best
      }`
    )

    // console.log(`project fetched on category: ${category}`, projects)
    return projects
  } catch (error) {
    console.log(error)
  }
}
