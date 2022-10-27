import { createClient } from 'contentful'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

export async function getSocial() {

  const res = await client.getEntries({ content_type: 'socialInformation' })

  return {
      social: res.items[0]
  }

}

export async function getMainContent() {
  const res = await client.getEntries({ content_type: 'home' })

  return {
    home: res.items[0]
  }
}

type GetPageParams = {
  content_type: string
  pageTitle?: string 
};

export async function getPage(params:GetPageParams) {
  const { items: [page] } = await client.getEntries({ 
    content_type: params.content_type,
    "fields.pageTitle": params.pageTitle
  });
  return page || null
}


type GetEntries = {
  content_type: string
};

export async function fetchEntries(params:GetEntries) {
  const res = await client.getEntries({ content_type: params.content_type })

  return {
    team: res
  }
}