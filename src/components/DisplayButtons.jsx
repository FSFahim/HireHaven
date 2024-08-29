import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DisplayButtons = () => {
  return (
    <div className="flex gap-6 justify-center">
      <Link to={"/jobs"}>
        <Button variant="blue" size="xl">
          Find Jobs
        </Button>
      </Link>
      <Link to={"/post-job"}>
        <Button variant="emerald" size="xl">
          Post a Job
        </Button>
      </Link>
    </div>
  );
};

export default DisplayButtons;
