import React, { useState } from "react";
import "./Dashboard.css";
import MacroCard from "../../components/MacroCard/MacroCard";
import StatsCard from "../../components/StatsCard/StatsCard";
import WeightCard from "../../components/WeightCard/WeightCard";
import Button from "../../components/Button/Button";

function Dashboard() {

  const [macros, setMacros] = useState([
    { name: "Proteïne", consumed: 263, goal: 300, color: "#FFBE00" },
    { name: "Calorieën", consumed: 1500, goal: 2000, color: "#0066EE" },
    { name: "Koolhydraten", consumed: 12, goal: 250, color: "#2CB9B0" },
    { name: "Vetten", consumed: 12, goal: 70, color: "#6C0D8F" },
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newGoal, setNewGoal] = useState("");
  const [newConsumed, setNewConsumed] = useState("");


  const [steps, setSteps] = useState({ consumed: 0, goal: 5000 });
  const [water, setWater] = useState({ consumed: 0, goal: 2 });


  const [weight, setWeight] = useState({ current: 0, goal: 100 });


  const [editingType, setEditingType] = useState(null);


  function handleEditMacro(index) {
    setEditingType("macro");
    setEditingIndex(index);
    setNewGoal(macros[index].goal);
    setNewConsumed(macros[index].consumed);
  }

  function handleSaveMacro(e) {
    e.preventDefault();
    const updated = [...macros];
    updated[editingIndex] = {
      ...updated[editingIndex],
      goal: newGoal,
      consumed: newConsumed,
    };
    setMacros(updated);
    setEditingIndex(null);
    setEditingType(null);
  }


  const [tempStepsConsumed, setTempStepsConsumed] = useState("");
  const [tempStepsGoal, setTempStepsGoal] = useState("");

  function handleEditSteps() {
    setEditingType("steps");
    setTempStepsConsumed(steps.consumed);
    setTempStepsGoal(steps.goal);
  }

  function handleSaveSteps(e) {
    e.preventDefault();
    setSteps({
      consumed: parseInt(tempStepsConsumed),
      goal: parseInt(tempStepsGoal),
    });
    setEditingType(null);
  }


  const [tempWaterConsumed, setTempWaterConsumed] = useState("");
  const [tempWaterGoal, setTempWaterGoal] = useState("");

  function handleEditWater() {
    setEditingType("water");
    setTempWaterConsumed(water.consumed);
    setTempWaterGoal(water.goal);
  }

  function handleSaveWater(e) {
    e.preventDefault();
    setWater({
      consumed: parseFloat(tempWaterConsumed),
      goal: parseFloat(tempWaterGoal),
    });
    setEditingType(null);
  }


  const [tempWeightCurrent, setTempWeightCurrent] = useState("");
  const [tempWeightGoal, setTempWeightGoal] = useState("");

  function handleEditWeight() {
    setEditingType("weight");
    setTempWeightCurrent(weight.current);
    setTempWeightGoal(weight.goal);
  }

  function handleSaveWeight(e) {
    e.preventDefault();
    setWeight({
      current: parseFloat(tempWeightCurrent),
      goal: parseFloat(tempWeightGoal),
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
                  type="number"
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Inname (g):</label>
                <input
                  type="number"
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
                  type="number"
                  value={tempStepsConsumed}
                  onChange={(e) => setTempStepsConsumed(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Doel (stappen):</label>
                <input
                  type="number"
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
                  type="number"
                  value={tempWaterConsumed}
                  onChange={(e) => setTempWaterConsumed(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Doel (L):</label>
                <input
                  type="number"
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
                  type="number"
                  value={tempWeightCurrent}
                  onChange={(e) => setTempWeightCurrent(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Streefgewicht (kg):</label>
                <input
                  type="number"
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
