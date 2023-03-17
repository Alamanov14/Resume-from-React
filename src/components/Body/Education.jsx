import React from "react";

const Education = () => {
  return (
    <div>
      <div className="edu-title">
        <h2>Образование</h2>
      </div>
      <div className="education">
        <div id="edu-title">
          <div id="scool">
            <span>Средняя школа имени Т.Байбураева</span>
          </div>
          <div id="colleg">
            <span>Профессиональный колледж имени Ж.Баласагына</span>
          </div>
          <div id="makers">
            <span>IT courses Makers</span>
          </div>
        </div>
        <div id="edu-opisanie">
          <div className="info-edu">
            <p className="opisanie-par">
              Я учился с 2010 по 2019-года.Ушел после 9го класса
            </p>
          </div>
          <div className="info-edu">
            <p className="opisanie-par">
              Поступил в 2019-году на первый курс.
              <br />В отделение Информационные технологии. <br />
              На специальность "прикладная информатика".
              <br /> Окончил в 2022году с специальностьтю
              <br />
              "техник программист".
            </p>
          </div>
          <div className="info-edu">
            <p className="opisanie-par">
              После оканчания коледжа в 12-декабря записался it курс "Makers"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
