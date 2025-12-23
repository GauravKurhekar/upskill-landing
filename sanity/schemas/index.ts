import testimonial from './testimonial'
import video from './video'
import faq from './faq'
import feature from './feature'
import bonus from './bonus'
import heroSection from './heroSection'
import ctaSection from './ctaSection'
import instructorSection from './instructorSection'
import siteSettings from './siteSettings'

export const schemaTypes = [
  // Repeatable content
  testimonial,
  video,
  faq,
  feature,
  bonus,
  // Single-instance sections (Singletons)
  heroSection,
  ctaSection,
  instructorSection,
  siteSettings,
]
