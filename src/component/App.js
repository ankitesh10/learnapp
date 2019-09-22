import React from "react";

import Header from "./Header";
import CourseList from "./CourseList";
import CategorySelect from './CategorySelect';

const App = () => {
  return (
    <div>
      <Header />
      <section className="section-course">
        <img src="img/oval.png" alt="oval" className="section-course__img" />
        <CategorySelect />
        <CourseList />
      </section>
    </div>
  );
};

export default App;
