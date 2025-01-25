import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rtrpuolrrrtsrlqwptoo.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0cnB1b2xycnJ0c3JscXdwdG9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzOTc3MDQsImV4cCI6MjA0ODk3MzcwNH0.0lIaYfF7Wzut6wS70SMmluxlCBbZv46tyhL6MfHlOhI`
const supabase = createClient(supabaseUrl, supabaseKey)

export async function getVideos() {
  let { data: videos, error } = await supabase
    .from('videos')
    .select('*')

  if (error) {
    console.log(error);
    throw new Error(error.message)
  }

  return videos
}

export async function getChannels() {
  let { data: channels, error } = await supabase
    .from('channels')
    .select('*')

  if (error) {
    console.log(error);
    throw new Error(error.message)
  }

  return channels
}

export async function getVideoByID(id) {
  let { data: videos, error } = await supabase
    .from('videos')
    .select('*')
    .eq('id', id)

  if (error) {
    console.log(error);
    throw new Error(error.message)
  }

  return videos[0]
}

export async function getChannelByID(id) {
  let { data: channels, error } = await supabase
    .from('channels')
    .select('*')
    .eq('id', id)

  if (error) {
    console.log(error);
    throw new Error(error.message)
  }

  return channels[0]
}

export async function getChannelByPublicId(publicId) {
  let { data: channels, error } = await supabase
    .from('channels')
    .select('*')
    .eq('publicId', publicId)

  if (error) {
    console.log(error);
    throw new Error(error.message)
  }

  return channels[0]
}

export default async function getVideosSearch(query) {
  const { data, error } = await supabase
    .from('videos')
    .select('*')
    .ilike('title', `%${query}%`)

  if (error) {
    console.log(error);
    throw new Error(error.message)
  }

  return data

}

