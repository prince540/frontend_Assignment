import axios from "axios";
import React from "react";

export const fetchProjects = async () => {
  const response = await axios.get("/api/projects");
  return response.data;
};


