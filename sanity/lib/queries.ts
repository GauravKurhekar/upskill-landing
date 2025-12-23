import { client } from './client'

// Fetch all testimonials
export async function getTestimonials() {
  return client.fetch(`
    *[_type == "testimonial"] | order(order asc) {
      _id,
      name,
      role,
      company,
      testimonial,
      rating,
      image,
      order
    }
  `)
}

// Fetch all videos
export async function getVideos() {
  return client.fetch(`
    *[_type == "video"] | order(order asc) {
      _id,
      title,
      description,
      videoUrl,
      thumbnail,
      duration,
      order
    }
  `)
}

// Fetch all FAQs
export async function getFAQs() {
  return client.fetch(`
    *[_type == "faq"] | order(order asc) {
      _id,
      question,
      answer,
      order
    }
  `)
}

// Fetch all features
export async function getFeatures() {
  return client.fetch(`
    *[_type == "feature"] | order(order asc) {
      _id,
      title,
      description,
      icon,
      order
    }
  `)
}

// Fetch all bonuses
export async function getBonuses() {
  return client.fetch(`
    *[_type == "bonus"] | order(order asc) {
      _id,
      title,
      description,
      icon,
      order
    }
  `)
}

// Fetch Hero Section
export async function getHeroSection() {
  return client.fetch(`*[_type == "heroSection"][0]`)
}

// Fetch CTA Section
export async function getCTASection() {
  return client.fetch(`*[_type == "ctaSection"][0]`)
}

// Fetch Instructor Section
export async function getInstructorSection() {
  return client.fetch(`*[_type == "instructorSection"][0]`)
}

// Fetch Site Settings
export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`)
}
