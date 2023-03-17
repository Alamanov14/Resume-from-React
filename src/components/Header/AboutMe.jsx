import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="about">
        <h2 id="myInfo">Обо мне</h2>
        <p className="aboutMe">
          Личная информация - здесь вы можете указать свое имя, контактные
          данные, а также ссылки на социальные сети и профиль LinkedIn (если
          есть). Образование - здесь следует перечислить все учебные заведения,
          которые вы закончили или которые вы посещали, включая даты,
          специализацию и степень образования. Опыт работы - здесь вы должны
          указать все места, где вы работали, включая даты, название должности,
          описание своих обязанностей и достижений. Навыки - здесь следует
          перечислить все навыки, которыми вы владеете, включая компьютерные
          программы, языки программирования, социальные навыки, навыки
          руководства и т.д. Достижения и награды - здесь вы можете перечислить
          все достижения и награды, которые вы получили в своей карьере или
          жизни в целом. Хобби и интересы - здесь можно указать ваши хобби и
          интересы, которые могут помочь работодателю понять вашу личность и
          убедиться в вашей социальной адаптивности.
        </p>
        <div className="divINow">
          <p className="iNow">HTML</p>
          <p className="iNow">CSS</p>
          <p className="iNow">Java Script</p>

          <p className="iNow">bootstrap</p>
          <p className="iNow">React</p>
          <p className="iNow">React bootstrap</p>
          <p className="iNow">POWER POINT</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;