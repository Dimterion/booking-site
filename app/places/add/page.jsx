"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Heading from "@/components/Heading";
import createPlace from "@/app/actions/createPlace";

const AddPlacePage = () => {
  const [state, formAction] = useFormState(createPlace, {});
  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Place created successfully.");

      router.push("/");
    }
  }, [state]);

  return (
    <>
      <Heading title="Add a place" />
      <div className="w-full rounded-lg bg-white p-6 shadow-lg">
        <form action={formAction}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block font-bold text-gray-700"
            >
              Place name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border px-3 py-2"
              placeholder="Enter a name (Lorem Ipsum)"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="mb-2 block font-bold text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="h-24 w-full rounded border px-3 py-2"
              placeholder="Enter a description for the place"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="sq" className="mb-2 block font-bold text-gray-700">
              Size
            </label>
            <input
              type="number"
              id="sq"
              name="sq"
              className="w-full rounded border px-3 py-2"
              placeholder="Enter place size"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="capacity"
              className="mb-2 block font-bold text-gray-700"
            >
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              className="w-full rounded border px-3 py-2"
              placeholder="Number of people the place can hold"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price_per_hour"
              className="mb-2 block font-bold text-gray-700"
            >
              Price per hour
            </label>
            <input
              type="number"
              id="price_per_hour"
              name="price_per_hour"
              className="w-full rounded border px-3 py-2"
              placeholder="Enter price per hour"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="mb-2 block font-bold text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full rounded border px-3 py-2"
              placeholder="Enter full address"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="mb-2 block font-bold text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full rounded border px-3 py-2"
              placeholder="Location (Building, Floor, Place)"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="availability"
              className="mb-2 block font-bold text-gray-700"
            >
              Availability
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              className="w-full rounded border px-3 py-2"
              placeholder="Availability (Monday - Friday, 9 AM - 5 PM)"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="amenities"
              className="mb-2 block font-bold text-gray-700"
            >
              Amenities
            </label>
            <input
              type="text"
              id="amenities"
              name="amenities"
              className="w-full rounded border px-3 py-2"
              placeholder="Amenities (Lorem, Ipsum, etc.)"
              required
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="image"
              className="mb-2 block font-bold text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="w-full rounded border px-3 py-2"
            />
          </div>
          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="rounded bg-blue-800 px-4 py-2 text-white transition-colors hover:bg-blue-950"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPlacePage;
