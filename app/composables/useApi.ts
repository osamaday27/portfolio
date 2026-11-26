/** Read-only public API call. Never throws: on failure `data` stays null and callers use local fallback data. */
export const useApiGet = <T>(path: string, key: string) =>
  useFetch<{ data: T }>(path, { baseURL: useRuntimeConfig().public.apiBase as string, key, default: () => null as any, timeout: 5000, retry: 0 })

export const useSite = async () => {
  const { data } = await useApiGet<any>('/site', 'site')
  return computed<any>(() => (data.value as any)?.data ?? null)
}
