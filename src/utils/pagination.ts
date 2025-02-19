// utils/paginationUtils.ts
export const generatePagination = (
  currentPage: number,
  totalPages: number,
): (number | string)[] => {
  const pages: (number | string)[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    // Always show first 3 pages
    pages.push(1, 2, 3);

    // Add dots if current page is beyond page 4
    if (currentPage > 4) pages.push("...");

    // Add pages around current page
    for (
      let i = Math.max(4, currentPage - 1);
      i <= Math.min(totalPages - 3, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    // Add dots if current page is before last 3 pages
    if (currentPage < totalPages - 3) pages.push("...");

    // Always show last 3 pages
    pages.push(totalPages - 2, totalPages - 1, totalPages);
  }

  return pages;
};
