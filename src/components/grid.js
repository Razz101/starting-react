const Grid = ({ data }) => {
  return (
    <div>
      <table width="100%" align="center">
        <thead>
          <tr>
            <th align="center">Id</th>
            <th align="center">Name</th>
            <th align="center">Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, index) => (
            <tr key={index}>
              <td align="center">{x.id}</td>
              <td align="center">{x.name}</td>
              <td align="center">{x.type.join(",")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
