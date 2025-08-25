import { formatter } from "../util/investment";
export function ResultsTable({ data, initialInvestment }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((object, index) => {
            return (
              <tr key={object.year}>
                <td key={object.year}>{object.year}</td>
                <td key={object.valueEndOfYear}>
                  {formatter.format(object.valueEndOfYear)}
                </td>
                <td>{formatter.format(object.interest)}</td>
                <td>{formatter.format(object.interest * (index + 1))}</td>
                <td>
                  {formatter.format(
                    object.annualInvestment * (index + 1) + 15000
                  )}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
