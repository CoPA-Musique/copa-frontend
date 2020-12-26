import React from "react";
import style from "./TableauComparatifs.module.css";

const TableauComparatifs = () => {
  return (
    <div className={style.TableauComparatifs}>
      <h2>Tableau comparatifs</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Membres gratuits</th>
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
        </table>
      </div>
    </div>
  );
};

export default TableauComparatifs;
