import React from "react";
import { css } from "@emotion/core";
import PaperSection from "../shared/PaperSection";

const OrganSharingChart = () => {
  return (
    <PaperSection>
      <div>
        <h3 className="text-center">United Network for Organ Sharing</h3>
        <h4 className="text-center">Organ: All</h4>
        <h4 className="text-center">
          Waitlist Registrations as of February 28, 2017
        </h4>
        <h4 className="text-center">
          Where Candidate's Permanent State Of Residence at Listing: New Mexico
        </h4>
        <br />
        <div className="container">
          <div
            className="table-responsive"
            css={css`
                    table thead td {
                        background-color: #81b3e0;
                        border-color: #438ed1 !important;
            `}
          >
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td rowSpan="3">
                    Candidate's Permanent State of Residence at Listing
                  </td>
                  <td colSpan="12">Desired Organ</td>
                  <td rowSpan="2" colSpan="2">
                    Total
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">Heart</td>
                  <td colSpan="2">Intestine</td>
                  <td colSpan="2">Kidney</td>
                  <td colSpan="2">Kidney-Pancreas</td>
                  <td colSpan="2">Liver</td>
                  <td colSpan="2">Lung</td>
                  <td colSpan="2">Pancreas</td>
                </tr>
                <tr>
                  <td>N</td>
                  <td>%</td>
                  <td>N</td>
                  <td>%</td>
                  <td>N</td>
                  <td>%</td>
                  <td>N</td>
                  <td>%</td>
                  <td>N</td>
                  <td>%</td>
                  <td>N</td>
                  <td>%</td>
                  <td>N</td>
                  <td>%</td>
                  <td>N</td>
                  <td>%</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-uppercase">New Mexico</td>

                  {/* <!-- Heart N --> */}
                  <td className="text-right">17</td>
                  {/* <!-- Heart %--> */}
                  <td className="text-right">2.2</td>

                  {/* <!-- Intestine N --> */}
                  <td className="text-right"></td>
                  {/* <!-- Intestine % --> */}
                  <td className="text-right"></td>
                  {/* <!-- Kidney N --> */}
                  <td className="text-right">596</td>
                  {/* <!-- Kidney % --> */}
                  <td className="text-right">78.8</td>

                  {/* <!-- Kidney-Pancreas N --> */}
                  <td className="text-right">5</td>
                  {/* <!-- Kidney-Pancreas % --> */}
                  <td className="text-right">0.7</td>

                  {/* <!-- Liver N --> */}
                  <td className="text-right">125</td>
                  {/* <!-- Liver % --> */}
                  <td className="text-right">16.5</td>

                  {/* <!-- Lung N --> */}
                  <td className="text-right">6</td>
                  {/* <!-- Lung % --> */}
                  <td className="text-right">0.8</td>

                  {/* <!-- Pancreas N --> */}
                  <td className="text-right">7</td>
                  {/* <!-- Pancreas % --> */}
                  <td className="text-right">0.9</td>

                  {/* <!-- Total N --> */}
                  <td className="text-right">756</td>
                  {/* <!-- Total % --> */}
                  <td className="text-right">100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <div className="text-center">
          Based on OPTN data as of February 24<sup>th</sup>, 2017.
        </div>
        <div className="text-center">
          Data subject to change due to future correction or submission.
        </div>
      </div>
    </PaperSection>
  );
};

export default OrganSharingChart;
