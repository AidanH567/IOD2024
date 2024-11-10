"use client";
import React from "react";
import { BigCats } from "../components/BigCats";
import { useState } from "react";

export default function Page() {
  return (
    <div>
      <h1>Welcome to the Big Cats Page</h1>
      <BigCats />
    </div>
  );
}
