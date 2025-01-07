import type { FieldHook } from 'payload'

export const formatSlug = (input: string): string => {
  return input
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/-{2,}/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

// format slug hook if slug is not empty

export const formatSlugHook = (): FieldHook => {
  return ({ value }) => {
    if (typeof value === 'string') {
      return formatSlug(value)
    }
  }
}

// export const formatSlugHook =
//   (fallback: string): FieldHook =>
//   ({ data, operation, originalDoc, value }) => {
//     if (typeof value === 'string') {
//       return formatSlug(value);
//     }

//     if (operation === 'create' || !data?.slug) {
//       const fallbackData = data?.[fallback] || data?.[fallback];

//       if (fallbackData && typeof fallbackData === 'string') {
//         return formatSlug(fallbackData);
//       }
//     }

//     return value;
//   };
