import Row from "./Row"

const TableForChallengeTwo = ({ items }) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
          {items &&
            items.length &&
            items.map((item) => <Row key={item.id} item={item} />)}
        </tbody>
      </table>
    </div>
  )
}

export default TableForChallengeTwo
