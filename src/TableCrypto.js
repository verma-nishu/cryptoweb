import './Scss/Home.scss';

function TableCrypto() {
  return (
   <div>
    <table>
    <thead>
        <tr>
         
          <th class='table-head1'>COMPANY ADVANTAGES</th>
          <th>CRYPTO</th>
          <th>FIAT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td class='table-head1'>Refund</td>
          <td>No</td>
          <td>Yes</td>
        </tr>
        <tr>
         
          <td class='table-head1'>Rolling reserve</td>
          <td>No</td>
          <td>Yes</td>
        </tr>
        <tr>
        <td class='table-head1'>Fees </td>
          <td >0.8%</td>
          <td> 5%</td>
        </tr>
        <tr>
        <td class='table-head1'>Transaction speed </td>
          <td >10min </td>
          <td> 60min</td>
        </tr>
      </tbody>
    </table>
   </div>
  );
}

export default TableCrypto;