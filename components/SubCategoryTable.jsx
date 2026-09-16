"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { labelFor } from "../data/labels";

const ITEMS_PER_PAGE = 15;

const CUSTOM_COLUMNS = {
  "tapered-roller-bearings": {
    dimensions: [
      "Internal Diameter (mm)",
      "Outer Diameter (mm)",
      "Total Width (mm)",
      "Bearings Height (mm)",
      "Cup Width (mm)",
      "Mass (Kg)",
    ],
    loadRating: [],
  },
};

export default function SubCategoryTable({ entry }) {
  const { category, subCategory, products = [] } = entry;

  const [filterValues, setFilterValues] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  /*
   * ---------------------------------------------------------
   * Get all available specifications from products
   * ---------------------------------------------------------
   */
  const specs = useMemo(() => {
    const combined = [];
    const seen = new Set();

    const pushSpec = (key, group) => {
      const uniqueKey = `${group}:${key}`;

      if (seen.has(uniqueKey)) return;

      seen.add(uniqueKey);

      combined.push({
        key,
        label: labelFor(key),
        group,
      });
    };

    products.forEach((product) => {
      Object.keys(product.dimensions || {}).forEach((key) => {
        pushSpec(key, "dimensions");
      });

      Object.keys(product.loadRating || {}).forEach((key) => {
        pushSpec(key, "loadRating");
      });
    });

    return combined;
  }, [products]);

  /*
   * ---------------------------------------------------------
   * Default specification keys
   * ---------------------------------------------------------
   */
  const defaultDimensionKeys = useMemo(() => {
    return specs
      .filter((spec) => spec.group === "dimensions")
      .map((spec) => spec.key);
  }, [specs]);

  const defaultLoadKeys = useMemo(() => {
    return specs
      .filter((spec) => spec.group === "loadRating")
      .map((spec) => spec.key);
  }, [specs]);

  /*
   * ---------------------------------------------------------
   * Custom / displayed columns
   * ---------------------------------------------------------
   */
  const dimensionKeys =
    CUSTOM_COLUMNS[subCategory.slug]?.dimensions ??
    defaultDimensionKeys;

  const loadKeys =
    CUSTOM_COLUMNS[subCategory.slug]?.loadRating ??
    defaultLoadKeys;

  /*
   * ---------------------------------------------------------
   * Only specifications actually visible in the table
   * should be available for filtering.
   * ---------------------------------------------------------
   */
  const visibleSpecs = useMemo(() => {
    return [
      ...dimensionKeys.map((key) => ({
        key,
        label: labelFor(key),
        group: "dimensions",
      })),

      ...loadKeys.map((key) => ({
        key,
        label: labelFor(key),
        group: "loadRating",
      })),
    ];
  }, [dimensionKeys, loadKeys]);

  /*
   * ---------------------------------------------------------
   * Extract numeric value
   *
   * Supports:
   * 25
   * "25"
   * "25 mm"
   * "12.5 kg"
   * "1,250"
   * ---------------------------------------------------------
   */
  const getNumericValue = (rawValue) => {
    if (
      rawValue === undefined ||
      rawValue === null ||
      rawValue === ""
    ) {
      return null;
    }

    const match = String(rawValue)
      .replace(/,/g, "")
      .match(/-?\d+(?:\.\d+)?/);

    if (!match) {
      return null;
    }

    const value = Number(match[0]);

    return Number.isFinite(value) ? value : null;
  };

  /*
   * ---------------------------------------------------------
   * Filter products
   *
   * MIN + MAX are BOTH checked for the same specification.
   *
   * Example:
   *
   * Min = 10
   * Max = 20
   *
   * Product must satisfy:
   *
   * value >= 10
   * AND
   * value <= 20
   *
   * Therefore:
   * 9  -> excluded
   * 10 -> included
   * 15 -> included
   * 20 -> included
   * 21 -> excluded
   * ---------------------------------------------------------
   */
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return visibleSpecs.every(({ key, group }) => {
        /*
         * Use group + key so that:
         *
         * dimensions:Some Key
         *
         * and
         *
         * loadRating:Some Key
         *
         * are treated as separate filters.
         */
        const filterKey = `${group}:${key}`;

        const filter = filterValues[filterKey];

        /*
         * No filter exists for this specification.
         */
        if (!filter) {
          return true;
        }

        const minText = String(filter.min ?? "").trim();
        const maxText = String(filter.max ?? "").trim();

        const hasMin = minText !== "";
        const hasMax = maxText !== "";

        /*
         * Both empty = don't filter this specification.
         */
        if (!hasMin && !hasMax) {
          return true;
        }

        /*
         * Get product value.
         */
        const rawValue = product[group]?.[key];

        const value = getNumericValue(rawValue);

        /*
         * If filter is active but product has no
         * usable numeric value, exclude it.
         */
        if (value === null) {
          return false;
        }

        /*
         * ---------------------------------------------------
         * MINIMUM CHECK
         * ---------------------------------------------------
         */
        if (hasMin) {
          const min = Number(minText);

          if (Number.isFinite(min) && value < min) {
            return false;
          }
        }

        /*
         * ---------------------------------------------------
         * MAXIMUM CHECK
         * ---------------------------------------------------
         */
        if (hasMax) {
          const max = Number(maxText);

          if (Number.isFinite(max) && value > max) {
            return false;
          }
        }

        /*
         * Product passed BOTH checks.
         */
        return true;
      });
    });
  }, [products, visibleSpecs, filterValues]);

  /*
   * ---------------------------------------------------------
   * Reset pagination whenever filters change
   * ---------------------------------------------------------
   */
  useEffect(() => {
    setCurrentPage(1);
  }, [filterValues]);

  /*
   * ---------------------------------------------------------
   * Pagination
   * ---------------------------------------------------------
   */
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  );

  /*
   * ---------------------------------------------------------
   * Prevent invalid page
   * ---------------------------------------------------------
   */
  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredProducts.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredProducts, currentPage]);

  /*
   * ---------------------------------------------------------
   * Update filter
   * ---------------------------------------------------------
   *
   * IMPORTANT:
   * group is included so dimensions and loadRating
   * don't overwrite each other.
   * ---------------------------------------------------------
   */
  const updateFilter = (key, group, field, value) => {
    const filterKey = `${group}:${key}`;

    setFilterValues((current) => ({
      ...current,
      [filterKey]: {
        ...(current[filterKey] || {}),
        [field]: value,
      },
    }));
  };

  /*
   * ---------------------------------------------------------
   * Clear filters
   * ---------------------------------------------------------
   */
  const clearFilters = () => {
    setFilterValues({});
    setCurrentPage(1);
  };

  /*
   * ---------------------------------------------------------
   * Check if any filter is active
   * ---------------------------------------------------------
   */
  const hasActiveFilters = Object.values(filterValues).some(
    (filter) =>
      filter &&
      (String(filter.min ?? "").trim() !== "" ||
        String(filter.max ?? "").trim() !== "")
  );

  /*
   * ---------------------------------------------------------
   * Pagination numbers
   * ---------------------------------------------------------
   */
  const paginationPages = useMemo(() => {
    if (totalPages <= 7) {
      return Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  }, [currentPage, totalPages]);

  /*
   * ---------------------------------------------------------
   * Showing range
   * ---------------------------------------------------------
   */
  const startItem =
    filteredProducts.length === 0
      ? 0
      : (currentPage - 1) * ITEMS_PER_PAGE + 1;

  const endItem = Math.min(
    currentPage * ITEMS_PER_PAGE,
    filteredProducts.length
  );

  return (
    <div className="mx-auto mb-20 w-full px-4 py-10 sm:px-8 md:px-12 lg:px-20">

      {/* Breadcrumb */}
      <nav className="mb-3 text-sm text-gray-400">
        <Link
          href="/categories"
          className="hover:text-[#DA2416]"
        >
          {category.name}
        </Link>

        {" / "}

        <span className="text-gray-700">
          {subCategory.name}
        </span>
      </nav>

      {/* Heading */}
      <div className="mb-8 flex flex-col items-start gap-2 md:flex-row md:items-center">
        <h2 className="text-2xl font-bold">
          {subCategory.name}
        </h2>

        {subCategory.smallDesc && (
          <p className="text-xs text-gray-500 md:ml-2">
            {subCategory.smallDesc}
          </p>
        )}
      </div>

      {/* ------------------------------------------------ */}
      {/* FILTER SECTION */}
      {/* ------------------------------------------------ */}
      <div className="mb-12 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-5">

        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">

          <div>
            <h3 className="font-semibold text-gray-800">
              Filter by specifications
            </h3>

            <p className="text-sm text-gray-500">
              Enter minimum and maximum values to filter
              bearings.
            </p>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Filter Inputs */}
        {visibleSpecs.length > 0 && (
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {visibleSpecs.map(({ key, label, group }) => {

              /*
               * Keep each group/key combination separate.
               */
              const filterKey = `${group}:${key}`;

              const currentFilter =
                filterValues[filterKey] || {};

              return (
                <div
                  key={filterKey}
                  className="rounded-lg border border-gray-200 bg-white p-3"
                >

                  <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {label}
                  </label>

                  <div className="mt-2 grid grid-cols-2 gap-2">

                    {/* MINIMUM */}
                    <input
                      type="number"
                      min="0"
                      value={currentFilter.min ?? ""}
                      onChange={(e) =>
                        updateFilter(
                          key,
                          group,
                          "min",
                          e.target.value
                        )
                      }
                      placeholder="Min"
                      className="w-full rounded-md border border-gray-300 px-2 py-2 text-sm outline-none transition focus:border-[#DA2416] focus:ring-1 focus:ring-[#DA2416]"
                    />

                    {/* MAXIMUM */}
                    <input
                      type="number"
                      min="0"
                      value={currentFilter.max ?? ""}
                      onChange={(e) =>
                        updateFilter(
                          key,
                          group,
                          "max",
                          e.target.value
                        )
                      }
                      placeholder="Max"
                      className="w-full rounded-md border border-gray-300 px-2 py-2 text-sm outline-none transition focus:border-[#DA2416] focus:ring-1 focus:ring-[#DA2416]"
                    />

                  </div>
                </div>
              );
            })}

          </div>
        )}
      </div>

      {/* ------------------------------------------------ */}
      {/* RESULT INFO */}
      {/* ------------------------------------------------ */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

        <p className="text-sm text-gray-600">
          Showing{" "}
          <span className="font-medium text-gray-900">
            {startItem}
          </span>
          –
          <span className="font-medium text-gray-900">
            {endItem}
          </span>{" "}
          of{" "}
          <span className="font-medium text-gray-900">
            {filteredProducts.length}
          </span>{" "}
          bearings
        </p>

        <p className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </p>
      </div>

      {/* ------------------------------------------------ */}
      {/* TABLE */}
      {/* ------------------------------------------------ */}
      <div className="overflow-x-auto rounded-xl border border-gray-200">

        <table className="w-full text-sm">

          <thead>
            <tr className="bg-gray-50 text-left">

              {/* Model */}
              <th className="whitespace-nowrap border-b p-3 font-semibold">
                Model No.
              </th>

              {/* Dimensions */}
              {dimensionKeys.map((key) => (
                <th
                  key={`dimension-${key}`}
                  className="whitespace-nowrap border-b p-3 font-semibold"
                >
                  {labelFor(key)}
                </th>
              ))}

              {/* Load Rating */}
              {loadKeys.map((key) => (
                <th
                  key={`load-${key}`}
                  className="whitespace-nowrap border-b p-3 font-semibold"
                >
                  {labelFor(key)}
                </th>
              ))}

            </tr>
          </thead>

          <tbody>

            {paginatedProducts.map((product) => (
              <tr
                key={product.slug}
                className="border-b transition hover:bg-blue-50"
              >

                {/* Model */}
                <td className="whitespace-nowrap p-3">
                  <Link
                    href={`/products/${category.slug}/${subCategory.slug}/${product.slug}`}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {product.model}
                  </Link>
                </td>

                {/* Dimensions */}
                {dimensionKeys.map((key) => (
                  <td
                    key={`dimension-${product.slug}-${key}`}
                    className="whitespace-nowrap p-3"
                  >
                    {product.dimensions?.[key] ?? "—"}
                  </td>
                ))}

                {/* Load Rating */}
                {loadKeys.map((key) => (
                  <td
                    key={`load-${product.slug}-${key}`}
                    className="whitespace-nowrap p-3"
                  >
                    {product.loadRating?.[key] ?? "—"}
                  </td>
                ))}

              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------ */}
      {/* EMPTY STATE */}
      {/* ------------------------------------------------ */}
      {filteredProducts.length === 0 && (
        <div className="mt-4 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-sm text-gray-600">

          <p className="font-medium">
            No bearings found.
          </p>

          <p className="mt-1">
            Try changing or clearing your specification
            filters.
          </p>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 rounded-md bg-[#DA2416] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#b91c12]"
            >
              Clear Filters
            </button>
          )}

        </div>
      )}

      {/* ------------------------------------------------ */}
      {/* PAGINATION */}
      {/* ------------------------------------------------ */}
      {filteredProducts.length > 0 && totalPages > 1 && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">

          {/* Previous */}
          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) =>
                Math.max(1, page - 1)
              )
            }
            disabled={currentPage === 1}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {/* Page Numbers */}
          {paginationPages.map((page, index) => {

            if (page === "...") {
              return (
                <span
                  key={`dots-${index}`}
                  className="px-2 text-gray-500"
                >
                  ...
                </span>
              );
            }

            return (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`h-10 min-w-10 rounded-md border px-3 text-sm transition ${
                  currentPage === page
                    ? "border-[#DA2416] bg-[#DA2416] text-white"
                    : "border-gray-300 bg-white hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}

          {/* Next */}
          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) =>
                Math.min(totalPages, page + 1)
              )
            }
            disabled={currentPage === totalPages}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>

        </div>
      )}

    </div>
  );
} 