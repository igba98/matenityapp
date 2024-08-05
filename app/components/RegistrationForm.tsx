/* eslint-disable react/no-unescaped-entities */
"use client";
import { DatePicker } from "@nextui-org/date-picker";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { supabase } from "../../utils/supabaseClient";

interface Member {
  name: string;
  checked: boolean;
}

const initialMembers: Member[] = [
  { name: "Age below 20 years", checked: true },
  { name: "More than 10 years since last pregnancy", checked: true },
  { name: "Have ever delivered through surgery", checked: true },
  { name: "Have you ever delivered a stillborn baby", checked: false },
  { name: "Miscarriage after two weeks or more", checked: false },
  { name: "Heart disease", checked: false },
  { name: "Diabetes", checked: false },
  { name: "Tuberculosis", checked: false },
];

const educationOptions = [
  "No formal education",
  "Primary education",
  "Secondary education",
  "Higher education",
];

const occupationOptions = [
  "Farmer",
  "Teacher",
  "Engineer",
  "Doctor",
  "Unemployed",
];

const bloodGroupOptions = ["A", "B", "AB", "O"];
const rhOptions = ["Positive", "Negative"];
const syphilisStatusOptions = ["Positive", "Negative"];

interface FormState {
  clinicName: string;
  registrationNumber: string;
  motherName: string;
  motherMobileNumber: string;
  motherBirthdate: Date | null;
  motherHeight: string;
  motherEducation: string;
  motherOccupation: string;
  husbandName: string;
  husbandAge: string;
  husbandOccupation: string;
  currentLocation: string;
  numberOfPregnancies: number;
  successfulDeliveries: number;
  numberOfKids: number;
  lastPeriodDate: Date | null;
  deliveryDate: Date | null;
  bloodGroup: string;
  rh: string;
  syphilisStatus: string;
  firstPregnancy: boolean;
  members: Member[];
}

export default function Page() {
  const { control, handleSubmit, register, watch, setValue } =
    useForm<FormState>({
      defaultValues: {
        clinicName: "",
        registrationNumber: "",
        motherName: "",
        motherMobileNumber: "",
        motherBirthdate: null,
        motherHeight: "",
        motherEducation: "",
        motherOccupation: "",
        husbandName: "",
        husbandAge: "",
        husbandOccupation: "",
        currentLocation: "",
        numberOfPregnancies: 0,
        successfulDeliveries: 0,
        numberOfKids: 0,
        lastPeriodDate: null,
        deliveryDate: null,
        bloodGroup: "",
        rh: "",
        syphilisStatus: "",
        firstPregnancy: false,
        members: initialMembers,
      },
    });

  const onSubmit = async (data: FormState) => {
    try {
      const response = await fetch("/api/mothers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        console.error("Error inserting data:", result.error);
      } else {
        console.log("Data inserted successfully:", result);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const { fields } = useFieldArray({
    control,
    name: "members",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const watchFirstPregnancy = watch("firstPregnancy");

  const steps = [
    "Personal Details",
    "Previous Pregnancy Information",
    "Current Pregnancy Information",
  ];

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <main className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h1 className="text-[32px] font-semibold">Registration</h1>
          <p className="text-center text-gray-600 sm:w-[800px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            nisi vitae eum aut neque maiores debitis doloremque sit fuga. Iusto
            exercitationem rem reprehenderit accusamus eligendi suscipit, eaque
            ullam cupiditate!
          </p>
        </div>

        <div className="mb-10 flex flex-col justify-center gap-8 px-28">
          {currentStep === 0 && (
            <>
              <h1 className="text-[20px] font-semibold">Personal Details</h1>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Name of Clinic/Hospital
                  </label>
                  <input
                    type="text"
                    {...register("clinicName")}
                    placeholder="Name of Clinic/Hospital"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    {...register("registrationNumber")}
                    placeholder="Registration Number"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Mother's Mobile Number
                  </label>
                  <input
                    type="text"
                    {...register("motherMobileNumber")}
                    placeholder="Mother's Mobile Number"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Mother's Name
                  </label>
                  <input
                    type="text"
                    {...register("motherName")}
                    placeholder="Mother's Name"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Mother's Birthdate
                  </label>
                  <Controller
                    control={control}
                    name="motherBirthdate"
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        label="Mother's Birthdate"
                        className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                        value={field.value || undefined}
                        onChange={(date) => field.onChange(date)}
                      />
                    )}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Mother's Height
                  </label>
                  <input
                    type="text"
                    {...register("motherHeight")}
                    placeholder="Mother's Height"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Mother's Education Level
                  </label>
                  <select
                    {...register("motherEducation")}
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  >
                    {educationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Mother's Occupation
                  </label>
                  <select
                    {...register("motherOccupation")}
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  >
                    {occupationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Husband's Name
                  </label>
                  <input
                    type="text"
                    {...register("husbandName")}
                    placeholder="Husband's Name"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Husband's Age
                  </label>
                  <input
                    type="text"
                    {...register("husbandAge")}
                    placeholder="Husband's Age"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Husband's Occupation
                  </label>
                  <select
                    {...register("husbandOccupation")}
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  >
                    {occupationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Current Location
                  </label>
                  <input
                    type="text"
                    {...register("currentLocation")}
                    placeholder="Current Location"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
              </div>
            </>
          )}

          {currentStep === 1 && (
            <>
              <h1 className="text-[20px] font-semibold">
                Previous Pregnancy Information
              </h1>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <Controller
                    control={control}
                    name="firstPregnancy"
                    render={({ field: { onChange, value } }) => (
                      <Button
                        onClick={() => onChange(true)}
                        className={`mt-2 w-full ${
                          value ? "bg-gray-600" : "bg-gray-400"
                        }`}
                      >
                        Yes, It's my first
                      </Button>
                    )}
                  />
                </div>
                <div>
                  <Controller
                    control={control}
                    name="firstPregnancy"
                    render={({ field: { onChange, value } }) => (
                      <Button
                        onClick={() => onChange(false)}
                        className={`mt-2 w-full ${
                          !value ? "bg-gray-600" : "bg-gray-400"
                        }`}
                      >
                        No, It's not
                      </Button>
                    )}
                  />
                </div>
              </div>

              {!watchFirstPregnancy && (
                <>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div>
                      <label className="mb-2 block text-sm text-gray-600">
                        Number of Previous Pregnancies
                      </label>
                      <input
                        type="number"
                        {...register("numberOfPregnancies")}
                        placeholder="Number of Previous Pregnancies"
                        className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-gray-600">
                        Successful Deliveries
                      </label>
                      <input
                        type="number"
                        {...register("successfulDeliveries")}
                        placeholder="Successful Deliveries"
                        className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-gray-600">
                        Number of Kids
                      </label>
                      <input
                        type="number"
                        {...register("numberOfKids")}
                        placeholder="Number of Kids"
                        className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                      />
                    </div>
                  </div>
                </>
              )}
            </>
          )}

          {currentStep === 2 && (
            <>
              <h1 className="text-[20px] font-semibold">
                Current Pregnancy Information
              </h1>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Last Period Date (LNMP)
                  </label>
                  <Controller
                    control={control}
                    name="lastPeriodDate"
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        label="Last Period Date (LNMP)"
                        className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                        value={field.value || undefined}
                        onChange={(date) => {
                          field.onChange(date);
                          const deliveryDate = new Date(date);
                          deliveryDate.setMonth(deliveryDate.getMonth() + 9);
                          setValue("deliveryDate", deliveryDate);
                        }}
                      />
                    )}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Expected Date of Delivery
                  </label>
                  <Controller
                    control={control}
                    name="deliveryDate"
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        label="Expected Date of Delivery"
                        className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                        value={field.value || undefined}
                        onChange={(date) => field.onChange(date)}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Blood Group
                  </label>
                  <select
                    {...register("bloodGroup")}
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  >
                    {bloodGroupOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600">Rh</label>
                  <select
                    {...register("rh")}
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  >
                    {rhOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Syphilis Sero Status
                  </label>
                  <select
                    {...register("syphilisStatus")}
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  >
                    {syphilisStatusOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="my-10 grid grid-cols-1 gap-6 px-28 sm:grid-cols-2">
          {currentStep > 0 && (
            <div>
              <Button
                onClick={handlePrevStep}
                className="mt-2 w-full bg-gray-400 text-gray-100"
              >
                Previous
              </Button>
            </div>
          )}
          {currentStep < steps.length - 1 ? (
            <div>
              <Button
                onClick={handleNextStep}
                className="mt-2 w-full bg-gray-600 text-gray-100"
              >
                Next
              </Button>
            </div>
          ) : (
            <div>
              <Button
                type="submit"
                className="mt-2 w-full bg-gray-600 text-gray-100"
              >
                Submit Registration
              </Button>
            </div>
          )}
        </div>
      </form>
    </main>
  );
}
