"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { labelFor } from "../data/labels";

export default function SubCategoryTable({ entry }) {
  const { category, subCategory, products } = entry;

  const [filterValues, setFilterValues] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 15;

  const specs = useMemo(() => {
    const combined = [];
    const seen = new Set();

    const pushSpec = (key, group) => {
      if (seen.has(key)) return;
      seen.add(key);
      combined.push({
        key,
        label: labelFor(key),
        group,
      });
    };

    products.forEach((product) => {
      Object.keys(product.dimensions || {}).forEach((key) =>
        pushSpec(key, "dimensions")
      );

      Object.keys(product.loadRating || {}).forEach((key) =>
        pushSpec(key, "loadRating")
      );
    });

    return combined;
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return specs.every(({ key, group }) => {
        const rawValue = product[group]?.[key];

        const filter = filterValues[key] || {};

        const min = filter.min === "" ? null : Number(filter.min);
        const max = filter.max === "" ? null : Number(filter.max);

        if (rawValue == null || Number.isNaN(rawValue)) {
          return true;
        }

        const value = Number(rawValue);

        if (Number.isNaN(value)) return true;

        if (min != null && value < min) return false;
        if (max != null && value > max) return false;

        return true;
      });
    });
  }, [products, specs, filterValues]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterValues]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  );

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const updateFilter = (key, field, value) => {
    setFilterValues((current) => ({
      ...current,
      [key]: {
        ...(current[key] || {}),
        [field]: value,
      },
    }));
  };

  const clearFilters = () => {
    setFilterValues({});
    setCurrentPage(1);
  };

  const hasActiveFilters = Object.values(filterValues).some((value) => {
    return value && (value.min !== "" || value.max !== "");
  });

const defaultDimensionKeys = specs
  .filter((spec) => spec.group === "dimensions")
  .map((spec) => spec.key);

const defaultLoadKeys = specs
  .filter((spec) => spec.group === "loadRating")
  .map((spec) => spec.key);

// Only override categories that need a different layout
const customColumns = {
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

const dimensionKeys =
  customColumns[subCategory.slug]?.dimensions ??
  defaultDimensionKeys;

const loadKeys =
  customColumns[subCategory.slug]?.loadRating ??
  defaultLoadKeys;

  return (

  <div className="w-full mx-auto px-8 md:px-30 mb-10 py-10">
  <nav className="mb-2 text-sm text-gray-400">
    {category.name} /{" "}
    <span className="text-gray-700">{subCategory.name}</span>
  </nav>

  <h2 className="mb-6 text-2xl font-bold">{subCategory.name}</h2>

  <div className="mb-20 rounded-xl border border-gray-200 bg-gray-50 p-4">
    <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div>
        <h3 className="font-semibold text-gray-800">
          Filter by specifications
        </h3>

        <p className="text-sm text-gray-500">
          Narrow the table by dimensions and load ratings.
        </p>
      </div>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Clear filters
        </button>
      )}
    </div>

    <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {specs.map(({ key, label }) => (
        <div
          key={key}
          className="rounded-lg border border-gray-200 bg-white p-3"
        >
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {label}
          </label>

          <div className="mt-2 grid grid-cols-2 gap-2">
            <input
              type="number"
              value={filterValues[key]?.min ?? ""}
              onChange={(e) =>
                updateFilter(key, "min", e.target.value)
              }
              placeholder="Min"
              className="w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
            />

            <input
              type="number"
              value={filterValues[key]?.max ?? ""}
              onChange={(e) =>
                updateFilter(key, "max", e.target.value)
              }
              placeholder="Max"
              className="w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="mb-4 flex items-center justify-between">
    <p className="text-sm text-gray-600">
      Showing{" "}
      {filteredProducts.length === 0
        ? 0
        : (currentPage - 1) * ITEMS_PER_PAGE + 1}
      –
      {Math.min(
        currentPage * ITEMS_PER_PAGE,
        filteredProducts.length
      )}{" "}
      of {filteredProducts.length} bearings
    </p>

    <p className="text-sm text-gray-600">
      Page {currentPage} of {totalPages}
    </p>
  </div>

  <div className="overflow-x-auto rounded-xl border">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gray-50 text-left">
          <th className="border-b p-3 font-semibold whitespace-nowrap">
            Model No.
          </th>

          {dimensionKeys.map((key) => (
            <th
              key={key}
              className="border-b p-3 font-semibold whitespace-nowrap"
            >
              {labelFor(key)}
            </th>
          ))}

          {loadKeys.map((key) => (
            <th
              key={key}
              className="border-b p-3 font-semibold whitespace-nowrap"
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
            className="border-b hover:bg-blue-50"
          >
            <td className="p-3 whitespace-nowrap">
              <Link
                href={`/products/${category.slug}/${subCategory.slug}/${product.slug}`}
                className="font-medium text-blue-600 hover:underline"
              >
                {product.model}
              </Link>
            </td>

            {dimensionKeys.map((key) => (
              <td
                key={key}
                className="p-3 whitespace-nowrap"
              >
                {product.dimensions?.[key] ?? "—"}
              </td>
            ))}

            {loadKeys.map((key) => (
              <td
                key={key}
                className="p-3 whitespace-nowrap"
              >
                {product.loadRating?.[key] ?? "—"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {totalPages > 1 && (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
      <button
        onClick={() =>
          setCurrentPage((p) => Math.max(1, p - 1))
        }
        disabled={currentPage === 1}
        className="rounded-md border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`h-10 w-10 rounded-md border transition ${
              currentPage === page
                ? "border-[#DA2416] bg-[#DA2416] text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() =>
          setCurrentPage((p) =>
            Math.min(totalPages, p + 1)
          )
        }
        disabled={currentPage === totalPages}
        className="rounded-md border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>
    </div>
  )}

  {filteredProducts.length === 0 && (
    <div className="mt-4 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-600">
      No bearings match the selected specification range.
    </div>
  )}
</div>


  );
}
