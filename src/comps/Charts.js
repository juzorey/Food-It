


export default function Charts(){
  return (
    <div className="chart-container">
      <div className="toggle-view-container">
        <select name="view" id="view">
          <option value="daily">daily</option>
          <option value="weekly">weekly</option>

        </select>
      </div>
      <div className="chart-container-daily"></div>


    </div>
  )
}