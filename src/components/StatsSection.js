import React from "react";
import "./StatsSection.css";
import Chart from "./Chart";

function StatsSection() {
  return (
    <section id="stats" className="stats">
      <h2>Kết quả khảo sát (mẫu minh họa)</h2>
      <p>Dưới đây là số liệu tổng hợp từ khảo sát nhận thức về Greenwashing.</p>
      <Chart />
    </section>
  );
}

export default StatsSection;
