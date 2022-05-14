import React from "react";
import { Chart, DataChart } from "grommet";

import styles from "../styles/Home.module.css";

export default function SkillsChart() {
  return (
    <div className={styles.componentContainer}>
      <DataChart
        data={[
          { amount: 100, label: "Drinking Coffee", color: "accent-2" },
          { amount: 90, label: "JavaScript", color: "accent-4" },
          { amount: 90, label: "Reactjs", color: "neutral-3" },
          { amount: 70, label: "Strapi", color: "#7D4CDB" },
          { amount: 70, label: "Figma", color: "status-ok" },
          { amount: 60, label: "Adobe Illustrator", color: "status-error" },
        ]}
        series={["Skills", "value"]}
        axis={{ x: { property: "skills", granularity: "fine" } }}
      />

      <Chart
        bounds={[
          [0, 5],
          [0, 100],
        ]}
        values={[
          { value: [0, 100], label: "Drinking Coffee", color: "accent-2" },
          { value: [1, 90], label: "JavaScript", color: "accent-4" },
          { value: [2, 90], label: "Reactjs", color: "neutral-3" },
          { value: [3, 70], label: "Strapi", color: "#7D4CDB" },
          { value: [4, 70], label: "Figma", color: "status-ok" },
          { value: [5, 60], label: "Adobe Illustrator", color: "status-error" },
        ]}
        aria-label="chart"
        thickness="large"
        alignSelf="stretch"
        animate
      />
    </div>
  );
}
