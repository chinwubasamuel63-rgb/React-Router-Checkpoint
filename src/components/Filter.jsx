const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div className="filter" style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      <input 
        type="text" 
        placeholder="Search by title..." 
        onChange={(e) => setTitleFilter(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Min rating (0-10)" 
        min="0" 
        max="10"
        onChange={(e) => setRateFilter(Number(e.target.value))} 
      />
    </div>
  );
};

export default Filter;