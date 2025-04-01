import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import MacroCard from "../../components/MacroCard/MacroCard";
import StatsCard from "../../components/StatsCard/StatsCard";
import WeightCard from "../../components/WeightCard/WeightCard";
import Button from "../../components/Button/Button";

function Dashboard() {
  const defaultMacros = [
    { name: "Calorieën", consumed: 0, goal: 1800, color: "#0066EE" },
    { name: "Koolhydraten", consumed: 0, goal: 222, color: "#2CB9B0" },
    { name: "Proteïne", consumed: 0, goal: 89, color: "#FFBE00" },
    { name: "Vetten", consumed: 0, goal: 59, color: "#6C0D8F" },
  ];

  const [macros, setMacros] = useState(() => {
    const stored = localStorage.getItem("dashboard_macros");
    return stored ? JSON.parse(stored) : defaultMacros;
  });

  const defaultSteps = { consumed: 0, goal: 10000 };
  const [steps, setSteps] = useState(() => {
    const stored = localStorage.getItem("dashboard_steps");
    return stored ? JSON.parse(stored) : defaultSteps;
  });

  const defaultWater = { consumed: 0, goal: 2 };
  const [water, setWater] = useState(() => {
    const stored = localStorage.getItem("dashboard_water");
    return stored ? JSON.parse(stored) : defaultWater;
  });

  const defaultWeight = { current: 85, goal: 85 };
  const [weight, setWeight] = useState(() => {
    const stored = localStorage.getItem("dashboard_weight");
    return stored ? JSON.parse(stored) : defaultWeight;
  });

  useEffect(() => {
    localStorage.setItem("dashboard_macros", JSON.stringify(macros));
  }, [macros]);

  useEffect(() => {
    localStorage.setItem("dashboard_steps", JSON.stringify(steps));
  }, [steps]);

  useEffect(() => {
    localStorage.setItem("dashboard_water", JSON.stringify(water));
  }, [water]);

  useEffect(() => {
    localStorage.setItem("dashboard_weight", JSON.stringify(weight));
  }, [weight]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [newGoal, setNewGoal] = useState("");
  const [newConsumed, setNewConsumed] = useState("");
  const [editingType, setEditingType] = useState(null);

  function handleEditMacro(index) {
    setEditingType("macro");
    setEditingIndex(index);
    setNewGoal(macros[index].goal.toString());
    setNewConsumed(macros[index].consumed.toString());
  }

  function handleSaveMacro(e) {
    e.preventDefault();
    const updated = [...macros];
    updated[editingIndex] = {
      ...updated[editingIndex],
      goal: parseFloat(newGoal.replace(',', '.')),
      consumed: parseFloat(newConsumed.replace(',', '.')),
    };
    setMacros(updated);
    setEditingIndex(null);
    setEditingType(null);
  }

  const [tempStepsConsumed, setTempStepsConsumed] = useState("");
  const [tempStepsGoal, setTempStepsGoal] = useState("");

  function handleEditSteps() {
    setEditingType("steps");
    setTempStepsConsumed(steps.consumed.toString());
    setTempStepsGoal(steps.goal.toString());
  }

  function handleSaveSteps(e) {
    e.preventDefault();
    setSteps({
      consumed: parseInt(tempStepsConsumed.replace(',', '.'), 10),
      goal: parseInt(tempStepsGoal.replace(',', '.'), 10),
    });
    setEditingType(null);
  }

  const [tempWaterConsumed, setTempWaterConsumed] = useState("");
  const [tempWaterGoal, setTempWaterGoal] = useState("");

  function handleEditWater() {
    setEditingType("water");
    setTempWaterConsumed(water.consumed.toString());
    setTempWaterGoal(water.goal.toString());
  }

  function handleSaveWater(e) {
    e.preventDefault();
    setWater({
      consumed: parseFloat(tempWaterConsumed.replace(',', '.')),
      goal: parseFloat(tempWaterGoal.replace(',', '.')),
    });
    setEditingType(null);
  }

  const [tempWeightCurrent, setTempWeightCurrent] = useState("");
  const [tempWeightGoal, setTempWeightGoal] = useState("");

  function handleEditWeight() {
    setEditingType("weight");
    setTempWeightCurrent(weight.current.toString());
    setTempWeightGoal(weight.goal.toString());
  }

  function handleSaveWeight(e) {
    e.preventDefault();
    setWeight({
      current: parseFloat(tempWeightCurrent.replace(',', '.')),
      goal: parseFloat(tempWeightGoal.replace(',', '.')),
    });
    setEditingType(null);
  }

  function handleCancel() {
    setEditingIndex(null);
    setEditingType(null);
  }

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="macro-container">
        {macros.map((macro, index) => (
          <MacroCard
            key={macro.name}
            name={macro.name}
            consumed={macro.consumed}
            goal={macro.goal}
            color={macro.color}
            onEdit={() => handleEditMacro(index)}
          />
        ))}
      </div>

      <div className="stats-row">
        <StatsCard
          title="Stappen"
          consumed={steps.consumed}
          goal={steps.goal}
          onEdit={handleEditSteps}
        />
        <StatsCard
          title="Water"
          consumed={water.consumed}
          goal={water.goal}
          onEdit={handleEditWater}
        />
      </div>

      <div className="weight-card">
        <WeightCard 
          currentWeight={weight.current}
          goalWeight={weight.goal}
          onEdit={handleEditWeight}
        />
      </div>

      {editingType === "macro" && editingIndex !== null && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Bewerk {macros[editingIndex].name}</h3>
            <form onSubmit={handleSaveMacro}>
              <div className="form-group">
                <label>Doel (g):</label>
                <input
                  type="text"
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Inname (g):</label>
                <input
                  type="text"
                  value={newConsumed}
                  onChange={(e) => setNewConsumed(e.target.value)}
                  required
                />
              </div>
              <div className="modal-buttons">
                <Button text="Opslaan" className="blue" type="submit" />
                <Button text="Annuleren" className="white" onClick={handleCancel} />
              </div>
            </form>
          </div>
        </div>
      )}

      {editingType === "steps" && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Bewerk Stappen</h3>
            <form onSubmit={handleSaveSteps}>
              <div className="form-group">
                <label>Inname (stappen):</label>
                <input
                  type="text"
                  value={tempStepsConsumed}
                  onChange={(e) => setTempStepsConsumed(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Doel (stappen):</label>
                <input
                  type="text"
                  value={tempStepsGoal}
                  onChange={(e) => setTempStepsGoal(e.target.value)}
                  required
                />
              </div>
              <div className="modal-buttons">
                <Button text="Opslaan" className="blue" type="submit" />
                <Button text="Annuleren" className="white" onClick={handleCancel} />
              </div>
            </form>
          </div>
        </div>
      )}

      {editingType === "water" && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Bewerk Water</h3>
            <form onSubmit={handleSaveWater}>
              <div className="form-group">
                <label>Inname (L):</label>
                <input
                  type="text"
                  value={tempWaterConsumed}
                  onChange={(e) => setTempWaterConsumed(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Doel (L):</label>
                <input
                  type="text"
                  value={tempWaterGoal}
                  onChange={(e) => setTempWaterGoal(e.target.value)}
                  required
                />
              </div>
              <div className="modal-buttons">
                <Button text="Opslaan" className="blue" type="submit" />
                <Button text="Annuleren" className="white" onClick={handleCancel} />
              </div>
            </form>
          </div>
        </div>
      )}

      {editingType === "weight" && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Bewerk Gewicht</h3>
            <form onSubmit={handleSaveWeight}>
              <div className="form-group">
                <label>Huidig gewicht (kg):</label>
                <input
                  type="text"
                  value={tempWeightCurrent}
                  onChange={(e) => setTempWeightCurrent(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Streefgewicht (kg):</label>
                <input
                  type="text"
                  value={tempWeightGoal}
                  onChange={(e) => setTempWeightGoal(e.target.value)}
                  required
                />
              </div>
              <div className="modal-buttons">
                <Button text="Opslaan" className="blue" type="submit" />
                <Button text="Annuleren" className="white" onClick={handleCancel} />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
