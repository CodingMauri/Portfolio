import { useState, useEffect} from "react";
const axios = require("axios");

export default function GetProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      axios.get("projects.json").then((res) => setProjects(res.Projects));
      
  }, [projects])
}
