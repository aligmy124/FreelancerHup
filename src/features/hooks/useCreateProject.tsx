"use client"

import { addProjectServices } from "@/services/client/addProjectServices"

import { useState } from "react"

export function useCreateProject() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCreate = async (data: any) => {
    try {
      setLoading(true)
      setError(null)

      await addProjectServices(data)

      window.location.href = "/projects"

    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { handleCreate, loading, error }
}