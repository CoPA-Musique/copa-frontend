import React from "react";
import Tableau from "../../atoms/Tableau/Tableau";
import style from "./TableauComparatif.module.css";

const TableauComparatif = () => {
  return (
    <section className={style.TableauComparatif}>
      <h2>Tableau comparatif</h2>
      <div>
        <Tableau>
          <thead>
            <tr>
              <th></th>
              <th>Membres réguliers</th>
              <th>Membres Pros</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem ipsum dolor sit amet consectetur</td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet consectetur</td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet consectetur</td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet consectetur</td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet consectetur</td>
              <td>X</td>
              <td>X</td>
            </tr>
          </tbody>
        </Tableau>
      </div>
    </section>
  );
};

export default TableauComparatif;
