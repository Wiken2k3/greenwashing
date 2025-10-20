import React from "react";
import "./Impact.css";

function Impact() {
  return (
    <section className="impact" id="impact">
      <h2>Tác động của Greenwashing</h2>
      <div className="impact-grid">
        <div className="impact-card">
          <h3>Mất niềm tin người tiêu dùng</h3>
          <p>
            Khi người tiêu dùng phát hiện các chiến dịch “xanh giả”, họ mất niềm
            tin vào thương hiệu và cả ngành công nghiệp.
          </p>
        </div>
        <div className="impact-card">
          <h3>Làm chậm chuyển đổi bền vững</h3>
          <p>
            Greenwashing khiến các nỗ lực bảo vệ môi trường thực sự bị lu mờ, làm
            chậm tiến trình hướng đến phát triển bền vững.
          </p>
        </div>
        <div className="impact-card">
          <h3>Tác động đến nhận thức xã hội</h3>
          <p>
            Việc nhận diện và chống lại greenwashing giúp nâng cao ý thức cộng
            đồng và tạo động lực cho hành vi tiêu dùng xanh.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Impact;
