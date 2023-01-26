export const isInternal = (url: string) => {
  const baseUrl = new URL(useRuntimeConfig().public.baseUrl)
  return new URL(url, baseUrl).hostname === baseUrl.hostname
}

export const getYear = (date: string) => new Date(date).getFullYear()

export const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export const useDate = (d: string) => {
  const { localeProperties } = useI18n()
  const date = new Date(d)

  return date.toLocaleDateString((localeProperties.value as LocaleObject).iso, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const useDateNumeric = (d: string) => {
  const date = new Date(d)

  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

export const useDirectusURL = (filenameDisk: string) =>
  `${useRuntimeConfig().public.directus.url}/assets/${filenameDisk}`
