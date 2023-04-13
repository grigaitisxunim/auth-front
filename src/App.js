import React, { useEffect, useState } from "react";
import Routes from "./routes";
import { AuthProvider } from "./context/Auth";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
