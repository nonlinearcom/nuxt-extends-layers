export const smoothScrollTo = (target: string) => {
  document.querySelector(`#${target}`)?.scrollIntoView({ behavior: 'smooth' })
}

export default function useCompetitionNavigation() {
  const tabNavigationItems = ref<string[]>([])
  const isActive = ref('')

  onMounted(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          if (entry.isIntersecting) isActive.value = entry.target?.id
        })
      }
    )

    /* Timeout to allow for DOM load */
    setTimeout(() => {
      document.querySelectorAll('.anchor').forEach((i) => {
        tabNavigationItems.value.push(i.getAttribute('id') as string)
        observer.observe(i)
      })
    }, 800)
  })

  return {
    isActive,
    tabNavigationItems,
  }
}
