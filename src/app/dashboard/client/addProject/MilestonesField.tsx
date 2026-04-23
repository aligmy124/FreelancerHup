"use client"

export default function MilestonesField({ milestones, setMilestones }: any) {

  const addMilestone = () => {
    setMilestones([
      ...milestones,
      { title: "", description: "", amount: 0, deadline: "" },
    ])
  }

  const updateMilestone = (index: number, field: string, value: any) => {
    const updated = [...milestones]
    updated[index][field] = value
    setMilestones(updated)
  }

  return (
    <div>
      <button type="button" onClick={addMilestone}>
        + Add Milestone
      </button>

      {milestones.map((m: any, i: number) => (
        <div key={i}>
          <input
            placeholder="Title"
            onChange={(e) => updateMilestone(i, "title", e.target.value)}
          />
      <textarea name="description" placeholder="Description" onChange={(e) => updateMilestone(i, "description", e.target.value)} />
          <input
            placeholder="Amount"
            type="number"
            onChange={(e) => updateMilestone(i, "amount", e.target.value)}
          />
      <input name="deadline" type="date" onChange={(e) => updateMilestone(i, "deadline", e.target.value)} />

        </div>
      ))}
    </div>
  )
}