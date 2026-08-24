"use client";

import React, { useState } from "react";

export default function WeightConverter() {
  const [kg, setKg] = useState<string>("");
  const [lbs, setLbs] = useState<string>("");
  const [oz, setOz] = useState<string>("");

  const handleKgChange = (val: string) => {
    setKg(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setLbs((num * 2.20462).toFixed(4));
      setOz((num * 35.274).toFixed(4));
    } else {
      setLbs("");
      setOz("");
    }
  };

  const handleLbsChange = (val: string) => {
    setLbs(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setKg((num / 2.20462).toFixed(4));
      setOz((num * 16).toFixed(4));
    } else {
      setKg("");
      setOz("");
    }
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Convertitore di Peso Online Gratis</h1>
      <p>Converti istantaneamente Chilogrammi (kg), Libbre (lbs) e Once (oz).</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem", background: "#f5f5f5", padding: "1.5rem", borderRadius: "8px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Chilogrammi (kg)</label>
          <input
            type="number"
            placeholder="es. 70"
            value={kg}
            onChange={(e) => handleKgChange(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Libbre (lbs)</label>
          <input
            type="number"
            placeholder="es. 154.3"
            value={lbs}
            onChange={(e) => handleLbsChange(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Once (oz)</label>
          <input
            type="number"
            readOnly
            placeholder="Risultato oz"
            value={oz}
            style={{ width: "100%", padding: "0.5rem", fontSize: "1rem", backgroundColor: "#e0e0e0" }}
          />
        </div>

        <button
          onClick={() => { setKg(""); setLbs(""); setOz(""); }}
          style={{ padding: "0.5rem 1rem", cursor: "pointer", marginTop: "1rem" }}
        >
          Azzera Campi
        </button>
      </div>
    </main>
  );
}
