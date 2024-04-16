import React from "react";

function SortBy() {
  return (
    <div>
      <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
        <div className="hidden space-y-4 lg:block">
          <div>
            <label
              htmlFor="SortBy"
              className="block text-xs font-medium text-gray-700"
            >
              {" "}
              Sort By{" "}
            </label>

            <select
              id="SortBy"
              className="mt-1 rounded border-gray-300 text-sm"
            >
              <option>Sort By</option>
              <option value="Title, DESC">Title, DESC</option>
              <option value="Title, ASC">Title, ASC</option>
              <option value="Price, DESC">Price, DESC</option>
              <option value="Price, ASC">Price, ASC</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortBy;
